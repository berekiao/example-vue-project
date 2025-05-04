import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'


import stores from "./stores";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).
    use(stores).
    mount('#app')
