<template>
  <a-config-provider
    :theme="currentTheme"
  >
    <router-view />
    <switch-Theme @setTheme="setTheme"/>
  </a-config-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SwitchTheme from '@/components/SwitchTheme.vue'

const currentTheme = ref({})
const setTheme = (theme: any) => {
  currentTheme.value = theme
}
</script>
