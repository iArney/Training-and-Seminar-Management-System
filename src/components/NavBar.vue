<template>
  <v-conatiner class="px-16 light shadow">
    <v-app-bar color="light" elevation="0" class="py-1" height="100px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <AppLogo />
      <v-spacer></v-spacer>
      <div class="">
        <router-link
          to="/home"
          class="text-decoration-none dark--text fw-bold mx-4"
          >Home</router-link
        >
        <router-link
          to="/modules"
          class="text-decoration-none dark--text fw-bold mx-4"
          >Modules <font-awesome-icon icon="fa-solid fa-caret-down"
        /></router-link>
        <router-link
          to="/login"
          class="text-decoration-none dark--text fw-bold mx-4"
          >Login</router-link
        >
        <router-link
          to="/register"
          class="text-decoration-none dark--text fw-bold mx-4"
        >
          <btn class="btn white btn-shadow deep--text"> Register </btn>
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
a:hover{
   text-shadow: 0.1px 0.3px 0.1px black;
}
</style>
