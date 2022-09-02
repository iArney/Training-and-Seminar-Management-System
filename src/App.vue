<template>

  <v-app>
    <!-- <NavBar /> -->
    <router-view/>
    <Footer />
  </v-app>
</template>

<style></style>

<script>
import Footer from "@/components/global_components/FooterSection.vue";

export default {
  components: {
    // NavBar,
    Footer

  },
};
</script>
