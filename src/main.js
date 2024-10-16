import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import './assets/scss/main.scss';
import 'bootstrap';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import router from './router';
import App from './App.vue';

defineRule('email', email);
defineRule('required', required);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(LoadingPlugin, {
  color: '#f95900',
});
app.use(router);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
