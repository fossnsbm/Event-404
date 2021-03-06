import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFoundPage from "../views/NotFound.vue";
import ArticlePage from "../views/Article.vue";
import Blog from "../views/Blog.vue";
import Events from "../views/Events.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "ArticlePage",
    component: ArticlePage,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
