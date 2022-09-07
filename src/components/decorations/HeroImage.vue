<template>
  <img
    src="@/assets/images/Hero.webp"
    class="object-cover image-fluid hero-image"
    alt=""
    srcset=""
  />
</template>

<script>
export default {};
</script>

<style scoped>
.hero-image {
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  animation: zoom-in 15s ease-in-out infinite;
}
@keyframes zoom-in {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
