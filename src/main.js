import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import Logo from './components/ui/Logo.vue';
import Card from './components/ui/BaseCard.vue';

const app = createApp(App);

app.component('o-logo', Logo);
app.component('base-card', Card);
app.use(router);

app.mount('#app');
