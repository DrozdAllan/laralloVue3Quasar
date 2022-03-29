<template>
  <transition

      enter-active-class="animated backInLeft"
      leave-active-class="animated backOutLeft faster"
  >
    <q-form
        v-if="drawerStore.loginForm"
        class="q-pa-md"
        ref="loginForm"
    >
      <q-input
          v-model="username"
          label="Username"
          filled
          lazy-rules="ondemand"
          :rules="usernameRules"
          @click="hasError = false"
          @keydown.enter="validateLogin"
      />
      <q-input
          v-model="password"
          label="Password"
          filled
          lazy-rules="ondemand"
          :rules="passwordRules"
          @click="hasError = false"
          @keydown.enter="validateLogin"
          :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="flex flex-center">
        <q-btn :disable="hasError" label="Login" color="primary" @click="validateLogin"/>
      </div>
    </q-form>
  </transition>
</template>

<script setup>
import {ref} from "vue";
import {useDrawerStore} from "../store/drawer";

import '@quasar/extras/animate/backInLeft.css'
import '@quasar/extras/animate/backOutLeft.css'

const drawerStore = useDrawerStore();
const loginForm = ref(null)
const hasError = ref(false)
const username = ref('')
const password = ref('')
const isPwd = ref(true)

const usernameRules = [
  (v) => !!v || "Required",
  (v) => v.length >= 5 || "Min 5 characters",
];

const passwordRules = [
  (v) => !!v || "Required",
  (v) => v.length >= 6 || "Min 6 characters",
]

async function validateLogin() {
  const success = await loginForm.value.validate();
  if (success) {
    axios.post('/login', {
      name: username.value,
      password: password.value
    }).then((response) => {
      location.reload();
    }).catch((e) => {
      if (e.response.status === 422) {
        password.value = null;
        hasError.value = true;
      }
    })
  }
}
</script>
