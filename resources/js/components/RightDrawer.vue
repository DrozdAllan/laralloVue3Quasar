<template>
  <q-drawer show-if-above v-model="drawerStore.rightDrawer" side="right" bordered class="q-pa-lg text-center">

    <div v-if="connectedUsers.length">
      There <span v-if="connectedUsers.length === 1"> is </span><span v-else> are </span>
      <span class="text-primary text-weight-bold">{{ connectedUsers.length }}</span>
      user<span v-if="connectedUsers.length > 1">s</span> online

      <div v-for="connectedUser in connectedUsers">
        <span>{{ connectedUser.name }}</span>
      </div>
    </div>

    <div v-else>
      You must log in to see online users
    </div>

  </q-drawer>
</template>


<script setup>
import {onMounted, ref} from 'vue'
import {useDrawerStore} from '../store/drawer';

const drawerStore = useDrawerStore();

const connectedUsers = ref([]);

onMounted(() => {
  Echo.join("online")
      .here((users) => (connectedUsers.value = users))
      .joining((user) => connectedUsers.value.push(user))
      .leaving((user) => connectedUsers.value = connectedUsers.value.filter((u) => u.id !== user.id))
})
</script>