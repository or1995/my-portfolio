import { createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Projects from '../pages/Projects/Projects.vue';
import Resume from '../pages/Resume/Resume.vue';
import Contact from '../pages/Contact/Contact.vue';
import About from '../pages/About/About.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', props: true, component: Home},
        {path: '/projects', props: true, component: Projects},
        {path: '/resume', props: true, component: Resume},
        {path: '/contact', props: true, component: Contact},
        {path: '/about', props: true, component: About},
    ]
})