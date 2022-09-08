<template>
  <!-- <v-navigation-drawer
    app
    color="#D5E6FB"
    elevation="25"
    permanent
  >
    <div class="pt-7">
      <AppLogo />

      <div class="icons">
        <div class="d-board-card drop-menu active deep light--text">
          <font-awesome-icon icon="fa-solid fa-gauge fa-2xl" class="ind-icon" />
          <span class="dash-font">Dashboard</span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-code-pull-request" class="ind-icon" />
          <span class="dash-font">Applications</span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-book-open" class="ind-icon" />
          <span class="dash-font">Report &#38; Doc </span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-solid fa-tools" class="ind-icon" />
          <span class="dash-font">Management</span>
        </div>
      </div>
    </div>
    <div class="side-nav"></div>
  </v-navigation-drawer> -->
  <!-- <v-app id="inspire">
    <v-navigation-drawer color="#D5E6FB" v-model="drawer" app>
      <v-list-item class="px-2 mt-4 ">
        <v-img
          alt="TSMS Logo"
          class="shrink mr-2"
          contain
          src="logo.png"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="TSMS Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="tsms.png"
          width="80"
        />
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          router
          to="/dashboard"
          class="active py-3"
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <v-list>
        <v-list-item
          router
          to="/dashboard"
          class="py-3"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Staff Management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <v-list>
        <v-list-item
          router
          to="/reports"
          class="py-3"
        >
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <v-list>
        <v-list-item
          router
          to="/dashboard"
          class=""
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text><span>Modules</span> </v-btn>
      <v-btn text>Login</v-btn>
      <v-btn text color="#004b8e" elevation="2"> Register</v-btn>
    </v-app-bar>

    <v-main> </v-main>
  </v-app> -->
  <!-- <div
    class="offcanvas offcanvas-start primary"
    tabindex="-1"
    id="side-nav"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    
  </div> -->
  <div>
    <v-navigation-drawer v-model="drawerOpen" color="#D5E6FB" class="pt-8" app>
      <div v-if="$vuetify.breakpoint.smAndDown" class="text-end pe-5  mb-5">
        <button
          id="sideNavToggler"
          @click="drawerOpen = false"
          type="button"
          class="btn-close no-outline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body p-0">
        <div class="w-100">
          <AppLogo />
          <ul class="list-unstyled p-0 pt-7">
            <a
              class="text-decoration-none dark--text"
              href="/dashboard"
            >
              <li class="my-3 py-8 ps-4 border-bottom active w-100">
                <v-icon class="me-2">mdi-view-dashboard</v-icon> Dashboard
              </li>
            </a>
            <a class="text-decoration-none dark--text" href="/staffManagement">
              <li class="my-3 py-8 ps-4 border-bottom">
                <v-icon class="me-2">mdi-account-group-outline</v-icon>
                Staff Management
              </li>
            </a>
            <a class="text-decoration-none dark--text" href="/application-form">
              <li class="my-3 py-8 ps-4 border-bottom">
                <font-awesome-icon
                  icon="fa-code-pull-request"
                  class="ind-icon me-2"
                />
                Applications
              </li>
            </a>
            <a class="text-decoration-none dark--text">
              <li class="my-3 py-8 ps-4 border-bottom">
                <v-icon class="me-2">mdi-chart-bar</v-icon>
                Reports
              </li>
            </a>
          </ul>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useNavigationStore } from "@/stores/NavigationStore";
import AppLogo from "./AppLogo.vue";
export default {
  components: { AppLogo },
  name: "NavigationView",
  computed: {
    ...mapWritableState(useNavigationStore, ["drawerOpen"]),
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/navigation" },
      { title: "Apply", icon: "mdi-application-edit", route: "/" },
      {
        title: "Staff Management",
        icon: "mdi-account-group-outline",
        route: "/",
      },
      { title: "Reports", icon: "mdi-chart-bar", route: "/" },
    ],
  }),
};
// import AppLogo from "./AppLogo.vue";
// export default {
//   components: { AppLogo },
//   name: "NavigationDrawer",
//   data: () => ({
//     admins: [
//       ["Management", "mdi-account-multiple-outline"],
//       ["Settings", "mdi-cog-outline"],
//     ],
//   }),
// };
</script>

<style scoped>
/* .drop-menu {
  width: 230px;
  height: 5rem;
}
.drop-menu:hover {
  background: #fffeea;
  color: #000;
  margin: auto 50px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.d-board-card {
  height: 5rem;
  width: 23rem;
  text-align: center;
}

.icons {
  position: absolute;
  display: block;
  top: 6em;
  left: -3.6em;
  font-size: 1.5em;
  line-height: 4em;
  padding: auto;
} */

.active {
  background: #004b8e !important;
  color: #d5e6fb;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.active .v-icon {
  color: #d5e6fb !important;
}

/* .dash-font {
  font-size: 80%;
  margin-left: 20px;
} */
/* 
.ind-icon,
.dash-font {
  padding: auto;
  left: 0.2px;
  top: -9px;
} */
/* .side-nav {
  display: flex;
} */
/* .top-side-bar {
  display: flex;
  color: #004b8e;
  margin-left: 32px;
} */
</style>
