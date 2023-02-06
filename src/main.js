import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import PrimeVue from "primevue/config";
import Menubar from 'primevue/menubar';
import NormalButton from 'primevue/button';
import RadioButton from 'primevue/radiobutton';

import './assets/general.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';



const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component('NormalButton', NormalButton);
app.component("MenuBar", Menubar);
app.component("RadioButton", RadioButton);

app.mount("#app");
