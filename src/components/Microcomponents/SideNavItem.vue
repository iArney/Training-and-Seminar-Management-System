<template>
  <a  class="text-decoration-none dark--text" :href="link">
    <li
      :class="[
        $router.currentRoute.path == link && 'active',
        'my-3 py-8 ps-4 border-bottom w-100 side-nav-item drop-menu',
      ]"
    >
      <v-icon class="me-2">{{ icon }}</v-icon> {{ name }}
    </li>
  </a>
</template>

<script>
export default {
  name: "SideNavItem",
  props: {
    active: Boolean,
    name: String,
    icon: String,
    link: String,
  },
};
</script>

<style scoped>
.active {
  background: #004b8e !important;
  color: #d5e6fb;
  cursor: pointer;
}

.side-nav-item {
  transition: 0.5s ease-in-out;
}

.active .v-icon {
  color: #d5e6fb !important;
}
.drop-menu {
  width: 230px;
  height: 5rem;
}

.drop-menu:hover {
  background: #fffeea;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  overflow: hidden !important;
}
</style>
