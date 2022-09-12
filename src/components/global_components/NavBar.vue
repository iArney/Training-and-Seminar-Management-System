<template>
  <div class="px-lg-16 light shadow">
    <v-app-bar color="light" elevation="0" class="py-1" height="100px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <AppLogo />
      <v-spacer></v-spacer>
        <router-link
          to="/"
          class="text-decoration-none dark--text fw-bold mx-3 d-none d-sm-inline-block"
          >Home</router-link
        >
        <router-link
          v-if="!isAuthenticated"
          to="/login"
          class="text-decoration-none dark--text fw-bold mx-3"
          >Login</router-link
        >
        <UserDetails v-if="isAuthenticated" color="light"/>
        <router-link
          v-if="!isAuthenticated"
          to="/registration"
          class="text-decoration-none dark--text fw-bold mx-3"
        >
          <button class="btn zoom white btn-shadow deep--text">Register</button>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="d-sm-none d-inline-block"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import UserDetails from "@/components/Microcomponents/UserDetails.vue";
import AppLogo from "./AppLogo.vue";
import { useUserStore } from "@/stores/userStore";
import { mapState } from "pinia";

export default {
  name: "NavBar",
  components: {
    AppLogo,
    UserDetails,
  },
  computed: {
    ...mapState(useUserStore, ["isAuthenticated", "user"]),
  },
};
</script>

<style scoped>
.btn-shadow {
  box-shadow: 0px 10px 20px rgba(242, 68, 5, 0.15);
}

a {
  transition: font-size 0.1s;
}
</style>
