<template>
  <div class="text-center">
    <!-- Vertically centered modal -->
    <div v-bind="$attrs" class="modal-dialog modal-dialog-centered">Hello</div>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
};
</script>

<style></style>
