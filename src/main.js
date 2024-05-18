import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import '@/apis/apiTest'
import { getCategory } from '@/apis/apiTest'

// 测试接口调用
getCategory().then(res => {
    console.log('res:', res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
