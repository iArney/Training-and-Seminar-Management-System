<template>
  <v-conatiner class="px-lg-16 light shadow">
    <v-app-bar color="light" elevation="0" class="py-1" height="100px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <AppLogo />
      <v-spacer></v-spacer>
      <div class="">
        <router-link
          to="/"
          class="text-decoration-none dark--text fw-bold mx-3 d-none d-sm-inline-block"
          >Home</router-link
        >
        <router-link
          to="/modules"
          class="text-decoration-none dark--text fw-bold mx-3 d-none d-sm-inline-block"
          >Modules <font-awesome-icon icon="fa-solid fa-caret-down"
        /></router-link>
        <router-link
          to="/login"
          class="text-decoration-none dark--text fw-bold mx-3"
          >Login</router-link
        >
        <router-link
          to="/register"
          class="text-decoration-none dark--text fw-bold mx-3"
        >
          <btn class="btn white btn-shadow deep--text"> Register </btn>
          <v-menu  left bottom>
            <template  v-slot:activator="{ on, attrs }">
              <v-btn class="d-sm-none d-inline-block" icon v-bind="attrs" v-on="on">
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
        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->

        <!-- <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </div>
    </v-app-bar>
  </v-conatiner>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";

export default {
  name: "NavBar",
  components: {
    AppLogo,
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
