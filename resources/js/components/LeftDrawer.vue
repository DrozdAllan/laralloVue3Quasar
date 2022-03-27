<template>
  <q-drawer show-if-above v-model="drawerStore.leftDrawer" side="left" bordered>
    <div class="row justify-around q-pa-md">
      <q-btn push :color="drawerStore.loginForm ? 'primary' : ''"
             :text-color="drawerStore.loginForm ? '' : 'primary'" class="text-weight-bold"
             @click="drawerStore.toggleLoginForm">Login
      </q-btn>
      <q-btn push :color="drawerStore.registerForm ? 'primary' : ''"
             :text-color="drawerStore.registerForm ? '' : 'primary'" class="text-weight-bold"
             @click="drawerStore.toggleRegisterForm">Register
      </q-btn>
    </div>
    <div v-if="drawerStore.loginForm" class="q-pa-sm">
      <LoginForm/>
    </div>
    <div v-if="drawerStore.registerForm" class="q-pa-sm">
      <RegisterForm/>
    </div>
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
import {ref} from 'vue'
import {useDrawerStore} from "../store/drawer";

const drawerStore = useDrawerStore();

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

</script>

<style lang="scss">
.active-router {
  color: white;
  background: #00796B;
}
</style>