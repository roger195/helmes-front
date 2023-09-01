import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import PrimeVue from "primevue/config";
import { createI18n } from "vue-i18n";
import { messages } from "./localization";

const i18n = createI18n({
  locale: "en",
  messages,
});

createApp(App).use(store).use(i18n).use(PrimeVue).mount("#app");
