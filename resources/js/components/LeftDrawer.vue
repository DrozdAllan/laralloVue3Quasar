<template>
  <q-drawer show-if-above v-model="drawerStore.leftDrawer" side="left" :bordered="$q.screen.gt.sm" :width="250"
            style="overflow: hidden">

    <div v-if="userStore.user" class="row justify-around q-pt-sm ">

      <h6 class="q-ma-sm">
        Welcome {{ userStore.user.name }}</h6>

      <q-btn push text-color="primary" class="text-weight-bold" @click="disconnect">
        Logout
      </q-btn>
    </div>
    <div v-else class="row justify-around q-px-md q-pt-lg">
      <q-btn push :color="drawerStore.loginForm ? 'primary' : undefined"
             :text-color="drawerStore.loginForm ? undefined : 'primary'" class="text-weight-bold"
             @click="drawerStore.toggleLoginForm">
        Login
      </q-btn>
      <q-btn push :color="drawerStore.registerForm ? 'primary' : undefined"
             :text-color="drawerStore.registerForm ? undefined : 'primary'" class="text-weight-bold"
             @click="drawerStore.toggleRegisterForm">
        Register
      </q-btn>
    </div>

    <LoginForm/>

    <RegisterForm/>

    <q-separator class="q-my-md" size="2px" inset/>
    <div class="q-py-md">
      <q-list>
        <q-item :to="{name:'main'}" active-class="active-router" clickable v-ripple>
          <q-item-section no-wrap>Main Channel</q-item-section>
        </q-item>

        <q-item :to="{name:'private'}" active-class="active-router" clickable v-ripple>
          <q-item-section>
            Private Channels
          </q-item-section>
        </q-item>

        <q-item :to="{name:'about'}" active-class="active-router" clickable v-ripple>
          <q-item-section>
            About
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup>
import {onMounted} from 'vue'
import {useDrawerStore} from "../store/drawer";
import {useUserStore} from "../store/user";
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const drawerStore = useDrawerStore();
const userStore = useUserStore();


function disconnect() {
  axios.post('/logout').then(() => {
        location.reload();
      }
  );
}

onMounted(() => {
  axios.get("/sanctum/csrf-cookie").then((response) => {
    userStore.connectUser();
  });
})


</script>

<style lang="scss">
.active-router {
  color: white;
  background: #00796B;
}
</style>