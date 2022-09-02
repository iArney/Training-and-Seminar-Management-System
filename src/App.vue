<template>
  <v-app>
    <NavBar />
    <router-view/>
    <Footer />
  </v-app>
</template>

<style></style>

<script>
import NavBar from "@/components/global_components/NavBar.vue";
import Footer from "@/components/global_components/FooterSection.vue";

export default {
  components: {
    NavBar,
    Footer
  },
};
</script>
