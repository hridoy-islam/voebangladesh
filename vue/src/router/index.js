import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import About from '../views/About.vue';
import Advisors from '../views/Advisors.vue';
import Ambassadors from '../views/Ambassadors.vue';
import Contact from '../views/Contact.vue';
import ContributionStories from '../views/ContributionStories.vue';
import CulturalHour from '../views/CulturalHour.vue';
import EncourageEntrepreneurship from '../views/EncourageEntrepreneurship.vue';
import EngineersNews from '../views/EngineersNews.vue';
import GuestHour from '../views/GuestHour.vue';
import HelpTheNation from '../views/HelpTheNation.vue';
import Home from '../views/Home.vue';
import HopeTalk from '../views/HopeTalk.vue';
import LadyTalk from '../views/LadyTalk.vue';
import Programs from '../views/Programs.vue';
import Publication from '../views/Publication.vue';
import SpecialEpisode from '../views/SpecialEpisode.vue';
import Subscribe from '../views/Subscribe.vue';
import SubscriptionBenifits from '../views/SubscriptionBenifits.vue';
import TalkTable from '../views/TalkTable.vue';
import TechnicalKnowHow from '../views/TechnicalKnowHow.vue';
import Updates from '../views/Updates.vue';

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
            { path: '/programs/help-the-nation', name: 'helpTheNation', component: HelpTheNation },
            { path: '/programs/encourage-entrepreneurship', name: 'encourageEntrepreneurship', component: EncourageEntrepreneurship },
            { path: '/programs/technical-know-how', name: 'technicalKnowHow', component: TechnicalKnowHow },
            { path: '/programs/contribution-stories', name: 'contributionStories', component: ContributionStories },
            { path: '/programs/lady-talk', name: 'ladyTalk', component: LadyTalk },
            { path: '/programs/hope-talk', name: 'hopeTalk', component: HopeTalk },
            { path: '/programs/talk-table', name: 'talkTable', component: TalkTable },
            { path: '/programs/special-episode', name: 'specialEpisode', component: SpecialEpisode },
            { path: '/programs/engineers-news', name: 'engineersNews', component: EngineersNews },
            { path: '/programs/cultural-hour', name: 'culturalHour', component: CulturalHour },
            { path: '/programs/guest-hour', name: 'guestHour', component: GuestHour },
            { path: '/contact', name: 'contact', component: Contact },
            { path: '/contact', name: 'contact', component: Contact },
            { path: '/publication', name: 'publication', component: Publication },
            { path: '/updates', name: 'updates', component: Updates },
            { path: '/subscribe', name: 'subscribe', component: Subscribe },
            { path: '/subscribe-benefits', name: 'SubscriptionBenifits', component: SubscriptionBenifits },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
