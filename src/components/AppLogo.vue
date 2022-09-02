<template>
  <router-link :to="link" class="d-flex align-center text-decoration-none">
      <v-img
        src="@/assets/images/logo.webp"
        class="logo-img d-inline-block"
        max-width="100.86"
        max-height="85"
      />
      <h1 class="logo-text d-inline-block deep--text fw-bold">TSMS</h1>
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

<style scoped>

  @media only screen and (max-width: 660px) {
  .logo-text {
    font-size: 1.2rem !important;
  }
  .logo-img{
    width: 70px !important;
  }
  a{
    font-size: 1rem !important;
  }
}
</style>
