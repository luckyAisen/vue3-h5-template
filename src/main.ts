import { createPinia } from 'pinia';
import { createApp } from 'vue';
import 'virtual:svg-icons-register';
import App from './App.vue';
import { router } from './router';
import './styles';

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount('#app');
