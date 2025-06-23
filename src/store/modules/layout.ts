import { defineStore } from 'pinia'

export const useStore = defineStore('layout', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})