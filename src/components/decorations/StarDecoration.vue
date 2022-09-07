<template>
  <font-awesome-icon
    id="star"
    class="deep--text"
    icon="fa-solid fa-star fs-"
    size="2xl"
  />
</template>

<script>
export default {};
</script>

<style scoped>
#star {
  animation: twinkle 1s ease-in-out 2s infinite;
}

@keyframes twinkle {
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
