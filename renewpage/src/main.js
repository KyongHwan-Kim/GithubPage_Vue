import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { router } from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import store from './store';

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');
app.config.globalProperties.$axios = axios;

loadFonts();
