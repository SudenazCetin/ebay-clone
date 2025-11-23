import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'




const app = createApp(App)

// Pinia instance oluştur


// Uygulamaya ekle

app.use(router)

app.mount('#app')
