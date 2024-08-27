import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HelloView from "@/views/HelloView.vue";
import SlotView from "@/views/SlotView.vue";
import LoginView from "@/views/LoginView.vue";
import VIfView from "@/views/VifView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/hello",
      name: "hello",
      component: HelloView,
    },
    {
      path: "/slot",
      name: "slot",
      component: SlotView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/v-if",
      name: "v-if",
      component: VIfView,
    }
  ],
});

router.beforeEach(async (to, from) => {
  const isAuthenticated = true;
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
