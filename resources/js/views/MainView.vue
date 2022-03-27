<template>
  <div class="zinzin">
    <h2 class="text-center q-py-3">Main Channel</h2>

<!--    <div v-if="user != null">-->
<!--      <ul class="q-px-none q-px-lg">-->
<!--        <li-->
<!--            v-for="(message, index) in messages"-->
<!--            :key="index"-->
<!--            class="q-py-sm"-->
<!--            :class="message.username === user.name ? 'text-right' : 'text-left'">-->
<!--          ({{ message.date }})-->
<!--          <b :class="message.username === user.name ? 'primary&#45;&#45;text' : ''">-->
<!--            {{ message.username }} </b>-->
<!--          : {{ message.message }}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <ul class="q-px-none q-px-lg">-->
<!--        <li-->
<!--            v-for="(message, index) in messages"-->
<!--            :key="index"-->
<!--            class="py-1">-->
<!--          ({{ message.date }})-->
<!--          <b> {{ message.username }} </b>-->
<!--          : {{ message.message }}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    footer input ici
  </div>
</template>

<script setup>
// TODO: https://quasar.dev/vue-components/chat#introduction
</script>

<style>
.zinzin {
  word-break: break-word;
}

ul {
  list-style: none;
}
</style>