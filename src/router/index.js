import { useUserStore } from "@/stores/userStore";
import hasRoutePermission from "@/helpers/authorizeHelper";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/Home-View.vue";
//replace isLogged in with an actual state;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-event/:id",
    name: "about-event",
    meta: {
      //if the route requires auth
      requiresAuth: true,
      permissions: [],
      //set user permissions
      // permissions: ['edit_data'],
    },
    /* route level code-splitting
    * this generates a separate chunk (about.[hash].js) for this route
     which is lazy-loaded when the route is visited.
     */
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutEvent-View.vue"),
  },
  {
    path: "/create",
    name: "create",
    meta: {
      requiresAuth: true,
      permissions: ["edit_data"],
    },

    component: () => import("@/views/Create-Training.vue"),
  },
  {
    path: "/events-collection",
    name: "eventcollection",
    meta: {
      requiresAuth: true,
      permissions: []
    },

    component: () => import("@/views/EventCollection-View.vue"),
  },
  {
    path: "/application-form",
    name: "applicationform",
    meta: {
      requiresAuth: true,
      permissions: ["edit_data"],
    },
    component: () => import("@/views/ApplicationForm-View.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login-View.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/views/Registration-View.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    component: () => import("../views/Dashboard-View.vue"),
  },
  {
    path: "/services",
    name: "services",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    component: () => import("../views/Services-View.vue"),
  },
  {
    path: "/staff",
    name: "staff",
    meta: {
      requiresAuth: true,
      permissions: ["edit_data"],
    },
    component: () => import("../views/Staff-View.vue"),
  },
  {
    path: "/staff-management",
    name: "staffManagement",
    meta: {
      requiresAuth: true,
      permissions: ["edit_data"],
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/StaffManagement-View.vue"
      ),
  },
  {
    path: "/online-training",
    name: "online-training",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    component: () => import("../views/OnlineTraining-View.vue"),
  },
  {
    path: "/training",
    name: "training",
    component: () => import("@/views/Training.vue"),
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
  const userStore = useUserStore();

  //store the from route in local storage
  for (const route of to.matched) {
    /*
     *Check if page exists else show a 404 error page
     */
    /***
     * If route doesnot require auth then proceed
     */
    if (!route.meta.requiresAuth) {
      return next();
    }
    /**
     * if it needs auth, check the state of the user if is logged in
     * if not redirect to login page
     */
    if (!userStore.isAuthenticated) {
      return next("/login");
    }
    /* If the user is logged in check if he has permission to access resources
     * if not remain to the current page
     */
    if (route.meta.permissions.length === 0) {
      return next();
    }
    if (hasRoutePermission(route.meta.permissions, userStore.permissions)) {
      return next();
    }

    return next(from.path);
  }
});

export default router;
