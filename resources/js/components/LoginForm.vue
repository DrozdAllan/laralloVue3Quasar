<template>
  <q-form
      ref="loginForm"
      class="q-gutter-md"
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
</template>

<script setup>
import {ref} from "vue";

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
    console.log('form success')
    // TODO: axios to login
    username.value = null;
    password.value = null;
  } else {
    console.log('form failure')
    hasError.value = true;
  }
}
</script>
