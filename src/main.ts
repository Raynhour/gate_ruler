import { createApp } from "vue";
import App from "./presentation/App.vue";
import router from "./presentation/router";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App).use(router).use(Toaster);

app.provide("toast", app.config.globalProperties.$toast);
app.mount("#app");
