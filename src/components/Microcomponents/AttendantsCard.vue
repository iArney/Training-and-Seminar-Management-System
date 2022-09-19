<template>
  <div
    class="small-image"
    :style="{
      backgroundImage: `url('${thumbnail}') !important`,
    }"
  >
    <div class="name h-100 w-100 d-flex align-end ps-1">
        <span class="white--text font-weight-medium">{{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttendantsCard",
  props: {
    thumbnail: String,
    name: String,
  },
};
</script>

<style scoped>
.small-image {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  height: 120px;
}
.name{
    background: rgba(0, 0, 0, 0.2) !important;
}
</style>
