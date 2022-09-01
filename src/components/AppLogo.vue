<template>
  <router-link :to="link" class="d-flex align-center text-decoration-none">
      <v-img
        src="@/assets/images/logo.webp"
        class="d-inline-block"
        max-width="100.86"
        max-height="85"
      />
      <h1 class="d-inline-block deep--text fw-bold">TSMS</h1>
    </router-link>
</template>

<script>
export default {
  name: "AppLogo",
  props: {
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style></style>
