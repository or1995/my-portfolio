import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import Logo from './components/ui/Logo.vue';

const app = createApp(App);

app.component('o-logo', Logo);
app.use(router);

app.mount('#app');
