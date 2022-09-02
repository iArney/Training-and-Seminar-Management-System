<template>
  <div
    class="bubble-decoration rounded-circle"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    size: Number,
  },
};
</script>

<style scoped>
.bubble-decoration {
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  background: radial-gradient(
    69.79% 69.79% at 31.25% 30.21%,
    #beeef5 0%,
    #fffeea 100%
  );
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(-50%);
  }

  50% {
    transform: translatey(0);
  }
  100% {
    transform: translatey(-50%);
  }
}
</style>
