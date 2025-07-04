<template>
  <label :class="['handle', open ? 'drop' : '']" @click="showDrawer"><i class="arrow" /></label>
  <a-drawer
    :height="150"
    title=""
    :placement="placement"
    :open="open"
    :mask="false"
    :closable="false"
    @close="onClose">
    <switch-theme @setTheme="setTheme"/>
    <switch-lang @setLang="setLang"/>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
import SwitchTheme from '@/components/pe-top-drawer/components/SwitchTheme.vue'
import SwitchLang from '@/components/pe-top-drawer/components/SwitchLang.vue'
import i18n from '@/i18n'

const placement = ref<DrawerProps['placement']>('top');
const open = ref<boolean>(false);
const emit = defineEmits(['setCurrentTheme'])

const showDrawer = () => {
  open.value = !open.value;
};

const onClose = () => {
  open.value = false;
};

const setTheme = (theme: any) => {
  emit('setCurrentTheme', theme)
}
const setLang = (lng: string) => {
  i18n.changeLanguage(lng, (err, t) => {
    if (err) return console.log('something went wrong loading', err)
    console.log(t('switchLangSuccess'))
  })
}
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
    transform: translateY(-50%) translateX(2px);
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
    top: 150px;
    i.arrow {
      transform: rotate(180deg) translateX(1px);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s;
    }
  }
}
</style>