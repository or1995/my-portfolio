import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import Logo from './components/ui/Logo.vue';
import Card from './components/ui/BaseCard.vue';
import Button from './components/ui/BaseButton.vue';
import Title from './components/ui/BaseTitle.vue';
import Spinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);

app.component('o-logo', Logo);
app.component('base-card', Card);
app.component('base-button', Button);
app.component('section-title', Title);
app.component('base-spinner', Spinner);
app.use(router);

app.mount('#app');
