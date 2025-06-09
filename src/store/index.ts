import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    conut: 0
  }),
  actions: {
    increment() {
      this.conut++
    }
  }
})

