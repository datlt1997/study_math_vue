import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from "./router"

createApp(App)
.use(VueAxios, axios)
.use(store)
.use(router)
.mount('#app')
