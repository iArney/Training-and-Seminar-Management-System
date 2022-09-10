<template>
  <div
  @click="$emit('changeTab', activityName)"
    class="pt-6 shadow white text-center mx-auto"
    style="width: 240.75px; height: 159.07px"
  >
    <div class="d-flex justify-center mx-auto">
      <img :src="icon" alt="eee" class="object-contain" />

      <div class="ms-2">
        <span class="fw-bold">{{ activityName }}</span>
        <span class="sub-head"><p>&#40;scheduled&#41;</p></span>
      </div>
    </div>

    <v-avatar color="#FFFEEA" class="mt-1" size="60">
      <span class="counter h2 fw-bold deep--text">{{ activityNumber }}</span>
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  props: {
    activityName: String,
    activityNumber: Number,
    icon: String,
  },
};
</script>

<style scoped>
  div:hover{
    cursor: pointer;
  }
</style>
