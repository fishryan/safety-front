import { createApp } from "vue";
import router from "@/router";
import App from "./App.vue";
<<<<<<< HEAD

createApp(App).use(router).mount("#app");
=======
import { MotionPlugin } from "@vueuse/motion";

createApp(App).use(router).use(MotionPlugin).mount("#app");
>>>>>>> 97a1ea749edf8d7de2f0cf4cb3525f8d4049a13a
