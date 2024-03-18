import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Hi from './components/Hi.vue'
const app = createApp(App)
app.component(
    Hi
)
const ppp = ref(100)
app.provide('imProvider',ppp)
app.use(createPinia())
app.use(router)

app.mount('#app')
