<template>
    <h4 class="text-center q-py-3 text-primary text-weight-bold">Private Channels</h4>

    <div v-if="messageField" class="q-pa-md row justify-center">
      <q-btn @click="stopChannel" color="negative" no-caps>
        Stop listening to {{ channelName }}
      </q-btn>
      <div style="width: 100%">

        <div v-for="message in messages">
          <q-chat-message
                          :name="message.username"
                          :text="[message.message]"
                          :sent="message.username === userStore.user.name"
                          :stamp="message.date">
          </q-chat-message>
        </div>
      </div>
    </div>


    <div v-if="userStore.user" class="row justify-center q-pa-md">
      <div class="col-6 text-center">
        <q-form
            v-if="!messageField"
            ref="channelForm"
        >
          <q-input
              outlined
              v-model="channelName"
              :rules="channelNameRules"
              label="Select the channel name you want to connect to"
              @keydown.space.prevent
              @keydown.enter="validateChannel"
          ></q-input>
          <q-btn
              :disable="!channelValid"
              color="primary"
              @click="validateChannel"
          >
            Connect
          </q-btn>
        </q-form>
      </div>
    </div>


    <div v-else class="text-center">
      You must be connected to use private channels
    </div>

    <q-page-sticky v-if="messageField" expand position="bottom">
      <div class="col-12 q-pa-sm">
        <q-input standout="bg-primary text-white" v-model="messageToSend"
                 label="Enter your message (do not send private data)"
                 @keydown.enter="sendMessage">
          <template v-slot:after>
            <q-icon name="send" :color="messageToSend === '' ? undefined : 'primary'" @click="sendMessage"/>
          </template>
        </q-input>
      </div>
    </q-page-sticky>
</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from "../store/user";

const userStore = useUserStore();

const channelForm = ref(null)
const messages = ref([])
const channelValid = ref(true)
const channelName = ref('')
const messageField = ref(false)
const messageToSend = ref("")
const channelNameRules = [
  value => !!value || "Required.",
  value => /^[A-z\d]*$/.test(value) || 'Channel name is invalid',
];

async function validateChannel() {
  const success = await channelForm.value.validate();
  if (success) {
    messageField.value = true;
    connectToChannel();
  }
}

function sendMessage() {
  if (messageToSend.value !== '') {
    axios.post("/privateChannel", {
      channelName: channelName.value,
      message: messageToSend.value,
    })
    messageToSend.value = '';
  }
}

function connectToChannel() {
  Echo.private(channelName.value).listen("PrivateMessageEvent", (data) => {
    messages.value.push(data);
  });
}

function stopChannel() {
  Echo.leaveChannel(channelName.value);
  channelName.value = '';
  messageField.value = false;
  messages.value = null;
}

</script>