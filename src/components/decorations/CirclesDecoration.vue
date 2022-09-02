<template>
  <div
    class="outercircle rounded-circle text-center d-flex mt-16 align-center position-absolute"
  >
    <div class="innercircle rounded-circle mx-auto"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outercircle {
  width: 226px;
  height: 232.73px;
  background: rgba(255, 255, 255, 0.3);
  animation: waves 7s linear forwards infinite;
  /* border: 45px solid rgba(255, 255, 255, 0.2); */
}
.innercircle {
  width: 50%;
  height: 50%;
  background: rgba(255, 255, 255, 0.5);
  /* border: 50px solid rgba(255, 255, 255, 0.4); */
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(5);
    opacity: 0;
  }
}
</style>
