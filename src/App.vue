<template>
  <a-config-provider
    :theme="currentTheme"
  >
    <router-view />
    <!--切换主题色-->
    <a-dropdown>
      <template #overlay>
        <a-menu @click="switchTheme">
          <a-menu-item v-for="key in themeArray" :key="key">
            <BgColorsOutlined />
            {{ key }}
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Button{{ currentTheme }}
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </a-config-provider>
</template>
<script lang="ts">
import greenTheme from '@/theme/greenTheme.json'
import purpleTheme from '@/theme/purpleTheme.json'
import { defineComponent, reactive, ref } from 'vue'
import { BgColorsOutlined, DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'App',
  components: {
    BgColorsOutlined,
    DownOutlined
  },
  setup() {
    const themeMap = reactive(new Map([
      ['greenTheme', greenTheme],
      ['purpleTheme', purpleTheme]
    ]))
    const currentTheme = ref(themeMap.get('greenTheme'))
    console.log(themeMap)
    const themeArray = Array.from(themeMap.keys()); // 获取所有键
    const switchTheme = (info: any) => {
      console.log('click', info.key);
      currentTheme.value = themeMap.get(info.key)
      console.log('currentTheme', currentTheme)
    }
    return {
      currentTheme,
      themeArray,
      switchTheme
    }
  },
})
</script>
<style scoped>

</style>
