<template>
  <label :class="['handle', open ? 'drop' : '']" @click="showDrawer"><i class="arrow" /></label>
  <a-drawer
    :height="100"
    title=""
    root-class-name="tool-header"
    :content-wrapper-style="currentLayoutKey === 'topLeft' ? {} : {left: '300px'}"
    :force-render="true"
    :placement="placement"
    :open="open"
    :mask="false"
    :closable="false"
    :z-index="1001"
    @close="onClose">
    <div class="left-control">
      {{ currentLayoutKey  }}
    </div>
    <div class="center-control">
      <switch-layout />
    </div>
    <div class="right-control">
      <switch-theme />
      <switch-lang />
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useLayoutStore } from '@/store/modules/layout'

import type { DrawerProps } from 'ant-design-vue';
import SwitchLayout from '@/components/pe-tool-header/components/SwitchLayout.vue'
import SwitchTheme from '@/components/pe-tool-header/components/SwitchTheme.vue'
import SwitchLang from '@/components/pe-tool-header/components/SwitchLang.vue'

defineOptions({ name: 'pe-tool-header' })

const layoutStore = useLayoutStore();
const currentLayoutKey = computed(() => layoutStore.getLayout)

const placement = ref<DrawerProps['placement']>('top');
const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = !open.value;
};

const onClose = () => {
  open.value = false;
};


</script>
<style lang="scss" scoped>
.handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: auto;
  cursor: pointer;
  transition: all 0.3s;
  i.arrow {
    position: absolute;
    top: 50%;
    inset-inline-end: 16px;
    width: 10px;
    color: currentcolor;
    transform: translateY(-50%) translateX(3px);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s;
    &::before, &::after {
      position: absolute;
      width: 6px;
      height: 1.5px;
      background-color: currentcolor;
      border-radius: 6px;
      transition: 
        background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), 
        transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), 
        top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), 
        color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      content: "";
    }
    &::before {
      transform: rotate(-45deg) translateX(2.5px);
    }
    &::after {
      transform: rotate(45deg) translateX(-2.5px);
    }
  }
  &.drop {
    top: 100px;
    i.arrow {
      transform: rotate(180deg) translateX(1px);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s;
    }
  }
}

.left-control,
.center-control,
.right-contrl {
  color: #fff;
  font-size: 20px;
  flex: 0 1 auto;
}

// 覆盖 drawer 的样式
:global(.tool-header .ant-drawer-content) {
  background-color: rgba(0, 21, 41, 0.4);
}
:global(.tool-header .ant-drawer-body) {
  display: flex;
  justify-content: space-between;
}
</style>