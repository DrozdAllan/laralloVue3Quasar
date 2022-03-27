<template>
  <q-form
      ref="registerForm"
      class="q-gutter-md"
  >
    <q-input
        v-model="email"
        label="Email"
        type="email"
        filled
        lazy-rules="ondemand"
        :rules="emailRules"
        @click="hasError = false"
        @keydown.enter="validateRegister"
    />
    <q-input
        v-model="username"
        label="Username"
        filled
        lazy-rules="ondemand"
        :rules="usernameRules"
        @click="hasError = false"
        @keydown.enter="validateRegister"
    />
    <q-input
        v-model="password"
        label="Password"
        filled
        lazy-rules="ondemand"
        :rules="passwordRules"
        @click="hasError = false"
        @keydown.enter="validateRegister"
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
      <q-btn :disable="hasError" label="Register" color="primary" @click="validateRegister"/>
    </div>
  </q-form>
</template>

<script setup>
import {ref} from "vue";

const registerForm = ref(null)
const hasError = ref(false)
const email = ref('')
const username = ref('')
const password = ref('')
const isPwd = ref(true)


const emailRules = [
  (v) => !!v || "Required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const usernameRules = [
  (v) => !!v || "Required",
  (v) => v.length >= 5 || "Min 5 characters",
];

const passwordRules = [
  (v) => !!v || "Required",
  (v) => v.length >= 6 || "Min 6 characters",
]

async function validateRegister() {
  const success = await registerForm.value.validate();
  if (success) {
    console.log('form success')
    // TODO: axios to register
    email.value = null;
    username.value = null;
    password.value = null;
  } else {
    console.log('form failure')
    hasError.value = true;
  }
}
</script>
