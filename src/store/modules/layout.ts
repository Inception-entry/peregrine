// 布局相关
import { defineStore } from 'pinia'
import { store } from '@/store'
import { getLayout, setLayout, removeLayout } from '@/utils/layout';

interface LayoutState {
  layoutKey: string;
}

export const useLayoutStore = defineStore('layout', {
  state: ():LayoutState => ({
    layoutKey: 'classic',
  }),
  getters: {
    getLayout(): string {
      return this.layoutKey || getLayout()
    }
  },
  actions: {
    setLayout(info: string) {
      this.layoutKey = info ?? ''; // for null or undefined value
      setLayout(info);
    },
    removeLayout() {
      removeLayout();
    }
  }
})

// Need to be used outside the setup
export const useLayoutStoreWithOut = () => {
  return useLayoutStore(store);
}