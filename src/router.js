import { createRouter, createWebHistory } from "vue-router";
import Favorites from "./views/Favorites.vue";
import Bonds from "./views/Bonds.vue";
import Faq from "./views/FAQ.vue";
import Settings from "./views/Settings.vue";

const routes = [
    { path: "/", component: Bonds },
    { path: "/favorites", component: Favorites },
    { path: "/faq", component: Faq },
    { path: "/settings", component: Settings },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
