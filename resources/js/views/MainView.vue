<template>
  <h4 class="text-center q-my-md text-primary text-weight-bold">Main Channel</h4>

  <q-separator/>
  <q-scroll-area ref="chatScroll"
                 class="q-px-sm row justify-center q-mb-xl"
                 style="height: 73vh;">
    <div style="width: 99%">
      <!--      TODO: réussir l'autoscroll de la scroll area-->
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
      </div>
    </div>
  </q-scroll-area>


  <q-page-sticky expand position="bottom">
    <div class="col-12 q-pa-sm">
      <q-input standout="bg-primary text-white" v-model="messageToSend"
               :class="{rubberAnim: isRubbing}"
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
import '@quasar/extras/animate/rubberBand.css'


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
// TODO: scroll function here

  })

})

</script>

<style lang="scss" scoped>
.rubberAnim {
  animation: rubberBand;
  animation-duration: 0.5s;
}
</style>