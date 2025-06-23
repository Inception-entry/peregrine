<template>
  <div class="h-screen bg-green-200">
    <overlay v-if="cesiumLoaded">
      <router-view></router-view>
    </overlay>
    <pe-cesium-vue @loaded="loaded" :depthTestAgainstTerrain="true" />
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script lang="ts">
import overlay from '@/components/pe-overlay/index.vue'
import peCesiumVue from '@/components/pe-cesium-vue/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, ref, computed } from 'vue'
import { userCounterStore } from '@/store/modules/counter'
export default defineComponent({
  name: 'pe-home',
  components: {
    overlay,
    peCesiumVue,
    HelloWorld
  },
  setup() {
    const cesiumLoaded = ref<boolean>(false)
    const store = userCounterStore()
    const loaded = (): void => {
      cesiumLoaded.value = true
    }
    return {
      jtCesiumVueContainerStyle: computed(
        () => {
          return {
            height: `calc(100% - ${store.$state.count}px)`
          }
      }),
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
