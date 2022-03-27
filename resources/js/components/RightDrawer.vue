<template>
  <q-drawer show-if-above v-model="drawerStore.rightDrawer" side="right" bordered>
    You must log in to see online users
  </q-drawer>
</template>


<script setup>
import {ref} from 'vue'
import {useDrawerStore} from '../store/drawer';

const drawerStore = useDrawerStore();


</script>