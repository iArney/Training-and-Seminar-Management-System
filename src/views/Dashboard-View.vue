<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <AdminDashboard v-if="permissions.includes('edit_data')"/>
    <UserDashboard v-else/>
    <Footer class="light" />
  </v-app>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppBar from "@/components/global_components/AppBar.vue";

import Footer from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import AdminDashboard from '@/components/sections/AdminDashboard.vue';
import UserDashboard from "@/components/sections/UserDashboard";
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/userStore';
// import SideBanners from "@/components/SideBanners.vue";

export default {
  name: "Dashboard-View",
  components: {
     AdminDashboard,
    AppBar,
    Footer,
    NavigationDrawer,
   UserDashboard,
  },
  computed: {
    ...mapState(useUserStore, ['permissions']),
  }
};
</script>
<style scoped>
.text-header {
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
}

</style>
