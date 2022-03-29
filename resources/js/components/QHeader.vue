<template>
  <q-header elevated class="bg-header">
    <q-toolbar class="justify-center">
      <q-btn icon="menu" flat round color="primary" class="lt-md" @click="drawerStore.toggleLeftDrawer"/>

      <div class="text-center text-black" :class="$q.screen.lt.md ? 'text-caption' : 'text-subtitle2'" :style="{'line-height': $q.screen.lt.md ? 1.2 : 'normal'}">
        Note : you can use the main channel without logging in, user1 and user2 are available with
        the password "password" to see users online
      </div>

      <q-btn icon="account_circle" flat round color="primary" class="lt-md" @click="drawerStore.toggleRightDrawer"/>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import {useDrawerStore} from "../store/drawer";

const drawerStore = useDrawerStore();

</script>

<style>
.bg-header {
  background: #f5fffe !important;
}
</style>