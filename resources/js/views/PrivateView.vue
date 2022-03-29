<template>

  <q-page class="row no-wrap">
    <div class="col footer-margin">
      <div class="row">
        <q-space class="col-0 col-md-4"/>
        <h4 class="col-6 col-md-4 text-center text-primary text-weight-bold q-my-md">Private Channels</h4>
        <div class="col-6 col-md-4 self-center text-center">
          <q-btn size="small" v-if="messageField" @click="stopChannel" color="negative" no-caps>
            Disconnect from {{ channelName }}
          </q-btn>
        </div>
      </div>
      <q-separator inset/>

      <div class="column full-height">
        <q-scroll-area class="col">
          <div id="scrollArea" class="q-px-lg">

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

            <div v-else class="text-center q-py-lg">
              You must be connected to use private channels
            </div>

            <div v-for="message in messages">
              <q-chat-message
                  :name="message.username"
                  :text="[message.message]"
                  :sent="message.username === userStore.user.name"
                  :text-color="message.username === userStore.user.name ? 'white' : 'black'"
                  :bg-color="message.username === userStore.user.name ? 'primary' : 'teal-1'"
                  :stamp="message.date">
              </q-chat-message>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>


  <q-footer v-if="messageField" class="bg-white">
    <div class="row justify-center">
      <div class="col-8 col-lg-6 q-py-sm">
        <q-input standout="bg-primary text-white" v-model="messageToSend"
                 :class="{rubberAnim: isRubbing}"
                 label="Enter your message (do not send private data)"
                 @keydown.enter="sendMsg">
          <template v-slot:after>
            <q-icon name="send" :color="messageToSend === '' ? undefined : 'primary'" @click="sendMsg"/>
          </template>
        </q-input>
      </div>
    </div>
  </q-footer>


</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from "../store/user";
import {scroll} from "quasar";

const {getScrollTarget, setVerticalScrollPosition} = scroll

const userStore = useUserStore();

const channelForm = ref(null)
const messages = ref([])
const channelValid = ref(true)
const channelName = ref('')
const messageField = ref(false)
const messageToSend = ref("")
const isRubbing = ref(false)
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

function sendMsg() {
  activRubbing()
  if (messageToSend.value !== '') {
    axios.post("/privateChannel", {
      channelName: channelName.value,
      message: messageToSend.value,
    })
    messageToSend.value = '';
  }
}

function activRubbing() {
  isRubbing.value = true
  setTimeout(() => {
    isRubbing.value = false
  }, 1000)
}

function connectToChannel() {
  Echo.private(channelName.value).listen("PrivateMessageEvent", (data) => {
    messages.value.push(data);

    // Scroll function with quasar helpers here
    const scrollArea = document.getElementById('scrollArea');
    const target = getScrollTarget(scrollArea);
    const offset = scrollArea.offsetHeight;
    setVerticalScrollPosition(target, offset, 1000);
  });
}

function stopChannel() {
  Echo.leaveChannel(channelName.value);
  channelName.value = '';
  messageField.value = false;
  messages.value = null;
}

</script>

<style lang="scss" scoped>
.rubberAnim {
  animation: rubberBand;
  animation-duration: 0.5s;
}

.footer-margin {
  margin-bottom: 73px;
}
</style>