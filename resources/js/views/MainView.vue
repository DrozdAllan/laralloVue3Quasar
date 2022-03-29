<template>

  <q-page class="row no-wrap">
    <div class="col footer-margin">
      <h4 class="text-center text-primary text-weight-bold q-my-md">Main Channel</h4>

      <q-separator inset />

      <div class="column full-height">
        <q-scroll-area class="col">
          <div id="scrollArea" class="q-px-lg">
            <div v-for="message in messages">
              <q-chat-message v-if="userStore.user"
                              :name="message.username"
                              :text="[message.message]"
                              :sent="message.username === userStore.user.name"
                              :text-color="message.username === userStore.user.name ? 'white' : 'black'"
                              :bg-color="message.username === userStore.user.name ? 'primary' : 'teal-1'"
                              :stamp="message.date">
              </q-chat-message>
              <q-chat-message v-else
                              name="Anonymous"
                              :text="[message.message]"
                              :stamp="message.date">
              </q-chat-message>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>

  <q-footer class="bg-white">
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
import {onMounted, ref} from "vue";
import {useUserStore} from "../store/user";
import '@quasar/extras/animate/rubberBand.css'
import {scroll} from "quasar";

const {getScrollTarget, setVerticalScrollPosition} = scroll


const userStore = useUserStore();

const messages = ref([])
const messageToSend = ref("")
const isRubbing = ref(false)

function sendMsg() {
  activRubbing()
  if (messageToSend.value !== '') {
    axios.post("/msg", {
      message: messageToSend.value,
    });
    messageToSend.value = '';
  }
}

function activRubbing() {
  isRubbing.value = true
  setTimeout(() => {
    isRubbing.value = false
  }, 500)
}

onMounted(() => {
  Echo.channel("MainChannel").listen("ChatMessageEvent", (data) => {
    messages.value.push(data);

    // Scroll function with quasar helpers here
    const scrollArea = document.getElementById('scrollArea');
    const target = getScrollTarget(scrollArea);
    const offset = scrollArea.offsetHeight;
    setVerticalScrollPosition(target, offset, 1000);
  })

})

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