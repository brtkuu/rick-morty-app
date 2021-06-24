/* eslint-disable */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Allcharacters from "../views/Allcharacters.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "characters",
    component: Allcharacters
  },
  {
    path: "/favorites",
    name: "favorites",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Favorites
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
