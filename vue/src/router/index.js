import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import About from '../views/About.vue';
import Advisors from '../views/Advisors.vue';
import Ambassadors from '../views/Ambassadors.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Programs from '../views/Programs.vue';

const routes = [
    {
        path: '/',
        redirect: '/',
        meta: { isGuest: true },
        component: MainLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About },
            { path: '/advisors', name: 'advisors', component: Advisors },
            { path: '/ambassadors', name: 'ambassadors', component: Ambassadors },
            { path: '/programs', name: 'programs', component: Programs },
            { path: '/contact', name: 'contact', component: Contact },
        ]
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
