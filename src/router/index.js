import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/Home-View.vue";
//replace isLogged in with an actual state;
const isLoggedIn = true;
const hasPermission = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login-View.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Registration-View.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard-View.vue"),
  },
  {
    path: "/services",
    name: "services",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services-View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/**
 * This function acts as a navigation guard before any
 * navigation
 * @param to (the route weare going to)
 * @param from(the route weare going to)
 */

router.beforeEach((to, from, next) => {
  //store the from route in local storage

  for (const record of to.matched) {
    /*
     *Check if page exists else show a 404 error page
     */
    /***
     * If route doesnot require auth then proceed
     */
    if (!record.meta.requiresAuth) {
      console.log(to.name);
      return next();
    }
    /**
     * if it needs auth, check the state of the user if is logged in
     * if not redirect to login page
     */
    if (!isLoggedIn) {
      return next("/login");
    }
    /* If the user is logged in check if he has permission to access resources
     * if not remain to the current page
     */
    if (hasPermission) {
      return next();
    }

    return next(from.path);
  }
});

export default router;
