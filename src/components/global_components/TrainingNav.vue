<template>
  <div>
    <div class="px-lg-16 light shadow">
      <v-app-bar color="white" elevation="0" class="py-1" height="100px">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-img
          src="@/assets/images/logo.webp"
          class="logo-img d-inline-block"
          max-width="100.86"
          max-height="85"
        />
        <h5>[Internal] Weekly Report Marketing + Sales</h5>
        <v-spacer></v-spacer>

        <UserDetails color="#F6F66" />
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import UserDetails from "@/components/Microcomponents/UserDetails.vue";

export default {
  components: {
    UserDetails,
  },
};
</script>

<style></style>
