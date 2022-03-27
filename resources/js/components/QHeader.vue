<template>
  <q-header elevated class="bg-header text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" class="bg-primary" @click="drawerStore.toggleLeftDrawer"/>

      <q-toolbar-title class="text-black">
        Note : you can use the main channel without logging in, user1 and user2 are available with the password
        "password" to see users online.
      </q-toolbar-title>

      <q-btn dense flat round icon="menu" class="bg-primary" @click="drawerStore.toggleRightDrawer"/>
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