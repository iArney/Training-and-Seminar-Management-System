<template>
  <v-app>
    <NavBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<style></style>

<script setup>
import Footer from "@/components/global_components/FooterSection.vue";
import NavBar from "@/components/global_components/NavBar.vue";

// import { useInstituionStore } from "@/stores/apiTestStore";

// const store = useInstituionStore();
// store.getInstitutions();
// console.log(store.institutions);
//  console.log("clicked");
// export default {
//   components: {
//     NavBar,
//     Footer,
//   },
// };
</script>
