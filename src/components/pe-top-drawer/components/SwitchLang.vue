<template>
  <a-dropdown class="switch_lang" :trigger="['click', 'hover']">
    <template #overlay>
      <a-menu @click="switchLang">
        <a-menu-item v-for="key in langArray" :key="key" :class="[{'active_lang': currentLangKey === key }]">
          <BgColorsOutlined />
          {{ key }}
        </a-menu-item>
      </a-menu>
    </template>
    <a-button>
      {{ $t('switchLang') }}
      <DownOutlined />
    </a-button>
  </a-dropdown>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { BgColorsOutlined, DownOutlined } from '@ant-design/icons-vue';
import { useLangStore } from '@/store/modules/lang'
import { inject } from 'vue';
 
const emit = defineEmits(['setLang'])
const langStore = useLangStore();

// 语言包
const $t = inject('$language');

const langMap = reactive(new Map([
  ['zh', '中文'],
  ['en', '英文']
]))

// 浏览器中存储的语言；如果没有默认选择中文
const defaultLang = langStore.getLang || 'zh'
// 当前默认的语言
let currentLangKey = ref(defaultLang)

// 语言列表集合
const langArray = Array.from(langMap.keys());

// 切换语言
const switchLang = (info: any) => {
  currentLangKey = info.key
  langStore.setLang(info.key)
  emit('setLang', currentLangKey)
}
</script>
<style lang="scss" scoped>
.switch_lang {
  margin-left: 20px;
}
</style>