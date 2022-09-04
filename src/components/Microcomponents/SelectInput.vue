<template>
  <div>
      <div class="form-floating mb-3 no-outline">
    <input
      type="Text"
      class="form-control no-outline"
      v-bind="email"
      placeholder="name@example.com"
    />
    <label for="floatingInput d-flex align-center">
      <img src="@/assets/icons/mail 1.svg" alt="" class="me-2" srcset="" />
      --Institution--
    </label>
  </div>
  </div>
</template>

<script>
export default {
    props: {
        options: Array,
    }
}
</script>

<style>

</style>