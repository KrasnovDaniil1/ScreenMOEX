import { createApp } from "vue";
import router from "./router";

import "./assets/styles/fonts.css";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
