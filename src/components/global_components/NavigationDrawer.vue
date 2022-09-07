<template>
  <v-navigation-drawer
    app
    color="#D5E6FB"
    elevation="25"
    :mini-variant="$vuetify.breakpoint.mdAndDown"
    permanent
  >
    <div class="top-side-bar pt-7">
      <AppLogo />

      <div class="icons">
        <div class="d-board-card drop-menu active deep light--text">
          <font-awesome-icon icon="fa-solid fa-gauge fa-2xl" class="ind-icon" />
          <span class="dash-font">Dashboard</span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-code-pull-request" class="ind-icon" />
          <span class="dash-font">Applications</span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-book-open" class="ind-icon" />
          <span class="dash-font">Report &#38; Doc </span>
        </div>
        <div class="d-board-card drop-menu">
          <font-awesome-icon icon="fa-solid fa-tools" class="ind-icon" />
          <span class="dash-font">Management</span>
        </div>
      </div>

      <!-- the side bar -->
    </div>
    <div class="side-nav"></div>
  </v-navigation-drawer>
</template>

<script>
import AppLogo from "./AppLogo.vue";
export default {
  components: { AppLogo },
  name: "NavigationDrawer",
  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),
};
</script>

<style scoped>
.drop-menu {
  width: 230px;
  height: 5rem;
}
.drop-menu:hover {
  background: #fffeea;
  color: #000;
  margin: auto 50px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
/* dash-board */
.d-board-card {
  height: 5rem;
  width: 23rem;
  text-align: center;
}

.icons {
  position: absolute;
  display: block;
  top: 6em;
  left: -3.6em;
  font-size: 1.5em;
  line-height: 4em;
  padding: auto;
}
/* .active {
  background: #004b8e;
  color: #d5e6fb;
   cursor: pointer;
  transition: 0.5s ease-in-out;
}*/

.dash-font {
  font-size: 80%;
  margin-left: 20px;
}

.ind-icon,
.dash-font {
  padding: auto;
  left: 0.2px;
  top: -9px;
}
.side-nav {
  display: flex;
}
.top-side-bar {
  display: flex;
  color: #004b8e;
  margin-left: 32px;
}
</style>
