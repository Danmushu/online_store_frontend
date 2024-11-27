// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/tailwindcss.css'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus样式
import router from './router'
const app = createApp(App)
// createApp(App).mount('#app')
app.use(router)
app.use(ElementPlus)
app.mount('#app')