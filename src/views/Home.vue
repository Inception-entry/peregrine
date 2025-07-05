<template>
  <div class="h-screen bg-green-200">
    <overlay v-if="cesiumLoaded">
      <router-view></router-view>
    </overlay>
    <pe-cesium-vue @loaded="loaded" :depthTestAgainstTerrain="true" />
    <HelloWorld msg="Vite + Vue" />
    <pe-top-drawer/>
  </div>
</template>

<script lang="ts">
import overlay from '@/components/pe-overlay/index.vue'
import peCesiumVue from '@/components/pe-cesium-vue/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import PeTopDrawer from '@/components/pe-top-drawer/index.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'pe-home',
  components: {
    overlay,
    peCesiumVue,
    HelloWorld,
    PeTopDrawer
  },
  setup() {
    const cesiumLoaded = ref<boolean>(false)
    const loaded = (): void => {
      cesiumLoaded.value = true
    }
    return {
      cesiumLoaded,
      loaded,
    }
  },
})
</script>
<style lang="scss" scoped>
.h-screen.bg-green-200 {
  position: relative;
  // width: 100%;
  // height: 100vh;
}
</style>
