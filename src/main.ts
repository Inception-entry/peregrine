import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import register from './components/pe-global-register'

// global css
import '@/style/common.scss'

// cesium vue
import cesiumVue from '@/libs/cesium/cesium-vue'

const app = createApp(App)

app.use(router).use(cesiumVue)

register(app)

app.mount('#app')
