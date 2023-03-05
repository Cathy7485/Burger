import { createApp } from 'vue'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'
import 'bootstrap'

const app = createApp(App)

app.use(VueSweetalert2)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
