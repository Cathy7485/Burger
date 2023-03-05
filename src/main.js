import { createApp } from 'vue'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import baseComponent from 'bootstrap/js/dist/base-component.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

const app = createApp(App)

app.use(VueSweetalert2, VueAxios, axios, baseComponent)
app.use(router)
app.mount('#app')
