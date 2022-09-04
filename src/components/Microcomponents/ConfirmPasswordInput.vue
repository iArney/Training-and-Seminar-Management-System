<template>
  <div class="form-floating mb-3 no-outline">
    <input
      type="password"
      class="form-control no-outline"
      v-bind="confirmPassword"
      placeholder="*********"
    />
    <label for="floatingInput d-flex align-center">
      <img src="@/assets/icons/key.svg" alt="" class="me-2" srcset="" />
      Confirm Password
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
