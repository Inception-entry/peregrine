<template>
  <a-config-provider
    :theme="currentTheme"
  >
    <router-view :key="refreshKey" />
  </a-config-provider>
</template>
<script setup lang="ts">
import i18n from '@/i18n'
import { provide, computed } from 'vue'
import { useLangStore } from '@/store/modules/lang';
import { useThemeStore } from '@/store/modules/theme'

const store = useLangStore();
const themeStore = useThemeStore()
const refreshKey = computed(() => store.getLang);
const currentTheme = computed(() => themeStore.getThemeValue);

const $language = (name: string) => {
  return i18n.t(name)
}
provide('$language', $language);

</script>
