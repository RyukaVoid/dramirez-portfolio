import { createApp } from 'vue'
import router from './plugins/router'
import App from './App.vue'
import "./assets/scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(router)
    .mount('#app') 
