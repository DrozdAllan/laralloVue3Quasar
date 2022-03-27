<template>
  <div class="zinzin">
    <h2 class="text-center primary--text q-py-3">Private channels</h2>
    <div class="text-center" v-if="messageField">
      <q-btn small outlined color="error" @click="stopChannel" class="no-uppercase">
        Stop listening to {{ channelName }}
      </q-btn>
    </div>
    <div v-if="!isConnected" class="text-center">
      You must be connected to use private channels
    </div>
    <div v-else>
      <div class="row" justify="center">
        <div class="col text-center" cols="6">
          <q-form

              v-if="!messageField"
              ref="channelForm"
              v-model="channelValid"
              lazy-validation
          >
            <q-input
                v-model="channelName"
                :counter="10"
                :rules="channelNameRules"
                label="Select the channel name you want to listen"
                required
                @keydown.space.prevent
                @keydown.enter="validateForm"
            ></q-input>
            <q-btn
                :disabled="!channelValid"
                large
                outlined
                color="primary"
                class="mr-4"
                @click="validateForm"
            >
              Validate
            </q-btn>
          </q-form>
        </div>
      </div>
      <!--      <div v-if="messageField">-->
      <!--        <v-footer ref="messageField" app color="transparent" height="72" inset>-->
      <!--          <v-row dense>-->
      <!--            <v-text-field-->
      <!--                background-color="grey lighten-3"-->
      <!--                flat-->
      <!--                rounded-->
      <!--                filled-->
      <!--                v-model="message"-->
      <!--                append-outer-icon="mdi-send"-->
      <!--                @click:append-outer="sendMessage"-->
      <!--                @keydown.enter="sendMessage"-->
      <!--                :label="'Enter your message to ' + this.channelName + ' (do not send private data)'"-->
      <!--            ></v-text-field>-->
      <!--          </v-row>-->
      <!--        </v-footer>-->
      <!--        <div>-->
      <!--          <ul class="q-px-0 q-px-lg">-->
      <!--            <li-->
      <!--                v-for="(message, index) in messages"-->
      <!--                :key="index"-->
      <!--                class="q-py-1"-->
      <!--                :class="message.username === user.name ? 'text-right' : 'text-left'">-->
      <!--              ({{ message.date }})-->
      <!--              <b v-if="user != null"-->
      <!--                 :class="message.username === user.name ? 'primary&#45;&#45;text' : ''">-->
      <!--                {{ message.username }} </b>-->
      <!--              <b v-else>-->
      <!--                {{ message.username }}-->
      <!--              </b>-->
      <!--              : {{ message.message }}-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const messages = ref([])
const channelValid = ref(false)
const channelName = ref('')
const messageField = ref(false)
const message = ref('')
const channelNameRules = [
  value => !!value || "Required.",
  value => /^[A-z\d]*$/.test(value) || 'Channel name is invalid',
];

const isConnected = ref(false)

</script>

<style>
.zinzin {
  word-break: break-word;
}

.no-uppercase {
  text-transform: unset !important;
}

ul {
  list-style: none;
}
</style>