<template>
  <h4 class="text-center q-py-3 text-primary text-weight-bold">Main Channel</h4>

  <div class="q-pa-md row justify-center">
    <div style="width: 100%">

      <div v-for="message in messages">
        <q-chat-message v-if="userStore.user"
                        :name="message.username"
                        :text="[message.message]"
                        :sent="message.username === userStore.user.name"
                        :stamp="message.date">
        </q-chat-message>
        <q-chat-message v-else
                        name="Anonymous"
                        :text="[message.message]"
                        :stamp="message.date">
        </q-chat-message>
<!--        TODO: check how the window behave when you have too many messages, add scrollbar and style it if possible -->
      </div>
    </div>
  </div>

  <q-page-sticky expand position="bottom">
    <div class="col-12 q-pa-sm">
<!--      TODO: try an animation smurf like when sending message -->
<!--      TODO: check how to change font with quasar https://quasar.dev/style/typography#add-custom-fonts  -->
      <q-input standout="bg-primary text-white" v-model="messageToSend"
               label="Enter your message (do not send private data)"
               @keydown.enter="sendMsg">
        <template v-slot:after>
          <q-icon name="send" :color="messageToSend === '' ? undefined : 'primary'" @click="sendMsg"/>
        </template>
      </q-input>
    </div>
  </q-page-sticky>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "../store/user";

const userStore = useUserStore();

const messages = ref([])
const messageToSend = ref("")

function sendMsg() {
  if (messageToSend.value !== '') {
    axios.post("/msg", {
      message: messageToSend.value,
    });
    messageToSend.value = '';
  }
}

onMounted(() => {
  Echo.channel("MainChannel").listen("ChatMessageEvent", (data) => {
    messages.value.push(data);
  })
})

</script>