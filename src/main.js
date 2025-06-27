import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
/* import "./permission.js"; */
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

/* import { Card, Button, InputText, Dialog, Textarea, OverlayPanel, Toolbar, DataTable, Column, MultiSelect } from "./components"; */
import ConfirmationService from 'primevue/confirmationservice';


import PrimeVue from "primevue/config";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: "small" })
  .use(PrimeVue)
  .use(ConfirmationService)
  .use(VueLoading, {
    color: "#0F417A",
    loader: "bars",
    opacity: 0.2,
  })
  .component("scale-loader", ScaleLoader)
  .mount("#app");