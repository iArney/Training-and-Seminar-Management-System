<template>
  <div class="form-floating mb-3 no-outline">
    <input
      type="Text"
      class="form-control no-outline"
      v-model="email"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label for="floatingInput d-flex align-center">
      <img src="@/assets/icons/mail 1.svg" alt="" class="me-2" srcset="" />
      Email
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style></style>
