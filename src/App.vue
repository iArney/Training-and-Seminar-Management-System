<template>
  <v-app>
    <NavBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<style></style>

<script>
import Footer from "@/components/global_components/FooterSection.vue";
import NavBar from "@/components/global_components/NavBar.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
