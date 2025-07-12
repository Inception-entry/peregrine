<template>
  <label :class="['handle', open ? 'drop' : '']" @click="showDrawer"><i class="arrow" /></label>
  <a-drawer
    :width="300"
    title=""
    root-class-name="menu-aside"
    :content-wrapper-style="currentLayoutKey === 'topLeft' ? { top: '100px' } : ''"
    :force-render="true"
    :placement="placement"
    :open="open"
    :mask="false"
    :closable="false"
    :z-index="1000"
    @close="onClose">
  </a-drawer>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useLayoutStore } from '@/store/modules/layout'
import type { DrawerProps } from 'ant-design-vue';

defineOptions({ name: 'pe-menu-aside' })

const layoutStore = useLayoutStore();
const currentLayoutKey = computed(() => layoutStore.getLayout)

const placement = ref<DrawerProps['placement']>('left');
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
  bottom: 0;
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
    left: 300px;
    i.arrow {
      transform: rotate(180deg) translateX(1px);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s;
    }
  }
}

// 覆盖 drawer 的样式
:global(.menu-aside .ant-drawer-content) {
  background-color: rgba(0, 21, 41, 0.4) !important;
}

</style>