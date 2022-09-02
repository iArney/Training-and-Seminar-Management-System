<template>

  <v-app>
    <!-- <NavBar /> -->
    <router-view/>
    <Footer />
  </v-app>
</template>

<style></style>

<script>

// import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterSection.vue";

export default {
  components: {
    // NavBar,
    Footer

  },
};
</script>
