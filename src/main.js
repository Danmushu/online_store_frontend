import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/tailwindcss.css'
import router from './router'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus样式

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')