import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/components/Home.vue";
import LoginView from "@/views/Login.vue";

const routes = [
  { path: "/", redirect: "/login"},
  { path: "/login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
