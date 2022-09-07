<template>
  <div id="triangle-decorator" class="mt-12 deep"></div>
</template>

<script>
export default {};
</script>

<style scoped>
#triangle-decorator {
  transform: matrix(0.59, -0.81, 0.81, 0.59, 0, 0);
  width: 50.02px;
  height: 53.1px;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  /* animation: rotate 10s ease-in-out 2s infinite; */
}

/* @keyframes rotate {
  0% {
   transform: matrix(0.59, -0.81, 0.81, 0.59, 0, 0);
  }

  50% {
    transform: matrix(-0.59, 0.81, 0.81, -0.59, 0, 0);
  }
  100% {
    transform: matrix(0.59, -0.81, 0.81, 0.59, 0, 0);
  }
} */
</style>
