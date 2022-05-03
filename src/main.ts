import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app');

import "bootstrap/dist/js/bootstrap.js"