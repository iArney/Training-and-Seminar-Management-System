<template>
  <div>
    <v-navigation-drawer
      v-model="drawerOpen"
      color="#D5E6FB"
      class="drawer pt-8"
      app
    >
      <div v-if="$vuetify.breakpoint.smAndDown" class="text-end pe-5 mb-5">
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
          <AppLogo link="/dashboard" />
          <ul class="list-unstyled p-0 pt-7">
            <SideNavItem
              icon="mdi-view-dashboard"
              link="/dashboard"
              name="Dashboard"
            />
            <SideNavItem
              v-if="permissions.includes('edit_data')"
              icon="mdi-account-group-outline"
              link="/staff"
              name="Staff Management"
            />
            <SideNavItem
              v-if="permissions.includes('edit_data')"
              icon="mdi-creation"
              link="/create"
              name="Create"
            />
            <SideNavItem
              v-if="permissions.includes('edit_data')"
              icon="mdi-hand-coin"
              link="/application-form"
              name="Apply"
            />
            <SideNavItem
              v-if="permissions.includes('edit_data')"
              icon="mdi-chart-bar"
              link="/reports"
              name="Reports"
            />
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
import { mapState, mapWritableState } from "pinia";
import { useNavigationStore } from "@/stores/NavigationStore";
import AppLogo from "./AppLogo.vue";
import SideNavItem from "@/components/Microcomponents/SideNavItem";
import { useUserStore } from "@/stores/userStore";

export default {
  components: { AppLogo, SideNavItem },
  name: "NavigationView",
  computed: {
    ...mapWritableState(useNavigationStore, ["drawerOpen"]),
    ...mapState(useUserStore, ["permissions"]),
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
    active: "dashboard",
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
/* 

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
.drawer {
  z-index: 3000;
}
.active {
  background: #004b8e !important;
  color: #d5e6fb;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.active .v-icon {
  color: #d5e6fb !important;
}

/* .side-nav-item:hover{
  margin-left: 20px !important;
  background-color: #FFFFEE !important;
  color: #004b8e;
  overflow: auto !important;
} */

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
