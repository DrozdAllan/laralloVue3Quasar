<template>
  <q-layout view="hHh LpR lfr">
    <QHeader/>
    <LeftDrawer/>
    <RightDrawer/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';
import QHeader from './components/QHeader'
</script>