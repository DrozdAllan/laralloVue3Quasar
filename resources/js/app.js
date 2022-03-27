require('./bootstrap');
import {createApp} from "vue";
import {createPinia} from "pinia";
import {Quasar} from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// import 'quasar/src/css/index.sass';

import './quasar-variables.scss';

import App from "./App.vue";
import router from './router';


createApp(App)
    .use(createPinia())
    .use(router)
    .use(Quasar, {
        plugins: {}
    })
    .mount("#app");
