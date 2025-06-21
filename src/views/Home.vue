<template>
  <div class="h-screen bg-green-200">
    <overlay v-if="cesiumLoaded">
      <router-view></router-view>
    </overlay>
    <pe-cesium-vue @loaded="loaded" :depthTestAgainstTerrain="true" />
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script setup lang="ts">
import overlay from '@/components/pe-overlay/index.vue'
import peCesiumVue from '@/components/pe-cesium-vue/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'
defineComponent({
  name: 'pe-home',
  components: {
    overlay,
    peCesiumVue,
  },
  setup() {
    const cesiumLoaded = ref<boolean>(false)
    const loaded = (): void => {
      cesiumLoaded.value = true
    }
    return {
      cesiumLoaded,
      loaded
    }
  },
})
</script>
<style lang="scss" scoped>
.h-screen.bg-green-200 {
  position: relative;
  width: 100dvw;
  height: 100dvh;
}
</style>
