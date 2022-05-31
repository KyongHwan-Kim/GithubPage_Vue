import Vue from "vue";
import VueRouter from "vue-router";
import Error from "@/views/Error.vue";
import Layout from "@/components/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/calender",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/calender",
        name: "Calender",
        component: Calender,
      },
    ],
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
