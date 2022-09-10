<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main class="light mt-7">
      <v-container>
        <StaffTable />
      </v-container>
    </v-main>
    <FooterSection class="light" />
  </v-app>
</template>

<script>
import AppBar from "@/components/global_components/AppBar.vue";
import FooterSection from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import StaffTable from '@/components/Microcomponents/StaffTable.vue';
export default {
  components: { FooterSection, AppBar, NavigationDrawer, StaffTable },
};
</script>

<style scoped>

</style>
