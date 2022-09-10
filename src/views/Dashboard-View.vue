<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <AdminDashboard />
    <Footer class="light" />
  </v-app>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppBar from "@/components/global_components/AppBar.vue";

import Footer from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import AdminDashboard from '@/components/sections/AdminDashboard.vue';
// import SideBanners from "@/components/SideBanners.vue";

export default {
  name: "Dashboard-View",
  components: {
    AppBar,
    Footer,
    NavigationDrawer,
    AdminDashboard,
  },
};
</script>
<style scoped>
.text-header {
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
}

</style>
