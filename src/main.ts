import { createApp } from 'vue';
import 'virtual:svg-icons-register';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './stores';
import './styles';

const app = createApp(App);
setupRouter(app);
setupStore(app);

app.mount('#app');
