import stores from "./stores";
import router from "./router";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(stores)
    .use(router)
    .mount('#app');
