<template>
  <div>
    <v-app-bar class="px-lg-16 z-3000" color="white" elevation="0" height="90" app>
      <div class="d-flex">
        <div class="">
          <button
            @click="drawerOpen = !drawerOpen"
            class="bg-inherit btn border-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#side-nav"
            aria-controls="side-nav"
          >
            <v-icon>fas fa-list</v-icon>
          </button>
        </div>

        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="input-group search-bar border rounded-pill ps-6 pe-3 w-75"
        >
          <input
            type="text"
            class="form-control border-0 no-outline white"
            id="inputMobileSearch"
            name="query"
            placeholder="Search ..."
          />
          <button type="submit" class="input-group-text white">
            <i class="fa fa-fw fa-search"></i>
          </button>
        </div>
        <button
          v-if="$vuetify.breakpoint.smAndDown"
          type="submit"
          class="input-group-text white"
        >
          <i class="fa fa-fw fa-search"></i>
        </button>
      </div>
      <v-spacer></v-spacer>

      <router-link
        to="/"
        class="text-decoration-none dark--text fw-bold mx-3 d-none d-sm-inline-block"
      >
        <font-awesome-icon icon="fa-solid fa-bell" />
      </router-link>
      <UserDetails color="light" />

      <!-- </notifcation ends> -->
      <!-- <div class="user-profile">
          <v-avatar size="45">
            <img src="@/assets/images/logo.webp" alt="userprofile" />
          </v-avatar>
          <v-badge
            bordered
            bottom
            color="green"
            dot
            offset-x="90"
            offset-y="-10"
          ></v-badge>
        </div> -->

      <!-- new notification {an event handler is required to switch notification status to read} -->
    </v-app-bar>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useNavigationStore } from "@/stores/NavigationStore";
import UserDetails from "@/components/Microcomponents/userDetails.vue";

export default {
  name: "AppBar",
  components: {
    UserDetails,
  },
  computed: {
    ...mapWritableState(useNavigationStore, ["drawerOpen"]),
  },
  emits: ["open-drawer"],
};
</script>

<style scoped>
.search-bar {
  border: 1.3px solid rgba(196, 202, 205, 0.4);
  border-radius: 57px;
  width: 430px !important;
}
.username {
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 13.4683px !important;
}
.email {
  font-weight: 500 !important;
  font-size: 0.6875rem !important;
  line-height: 28px !important;
}
</style>
