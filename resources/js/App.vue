<template>
  <q-layout view="hHh lpR fFf">
    <QHeader/>
    <LeftDrawer/>
    <RightDrawer/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref, onBeforeMount, onUpdated} from 'vue'
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';
import QHeader from './components/QHeader'

</script>
