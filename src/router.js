import { createRouter, createWebHistory } from "vue-router";
import Favorites from "./views/Favorites.vue";
import Ofz from "./views/OFZ.vue";
import Corporate from "./views/Corporate.vue";
import Faq from "./views/FAQ.vue";
import NotInformation from "./views/NotInformation.vue";
import Settings from "./views/Settings.vue";

const routes = [
    { path: "/", component: Ofz },
    { path: "/favorites", component: Favorites },
    { path: "/corporate", component: Corporate },
    { path: "/notinforamation", component: NotInformation },
    { path: "/faq", component: Faq },
    { path: "/settings", component: Settings },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
