import { IonicVue } from '@ionic/vue'

import { createApp } from 'vue'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
  .use(IonicVue)
  .use(router)

router.isReady().then(() => { app.mount('#app') })
