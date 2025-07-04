<template>
  <a-config-provider
    :theme="currentTheme"
  >
    <router-view />
    <pe-top-drawer @setCurrentTheme="setCurrentTheme"/>
  </a-config-provider>
</template>
<script setup lang="ts">
import i18n from '@/i18n'
import { ref, provide } from 'vue'
import PeTopDrawer from '@/components/pe-top-drawer/index.vue'

const currentTheme = ref({})

const $language = (name: string) => {
  return i18n.t(name)
}
provide('$language', $language);

const setCurrentTheme = (theme: any) => {
  currentTheme.value = theme
}
</script>
