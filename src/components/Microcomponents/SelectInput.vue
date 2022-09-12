<template>
  <div>
    <div class="form-floating mb-3 no-outline">
      <select
        v-bind="$attrs"
        id="institute"
        @input="handleInput($event)"
        class="form-select no-outline"
        required
      >
        <option disabled selected>Select</option>
        <option
          class="no-outline"
          :value="option.id"
          :key="index"
          v-for="(option, index) in options"
        >
          {{ option.instituteAbbreviation }}
        </option>
      </select>

      <label for="floatingInput d-flex align-center">
        <img
          src="@/assets/icons/structure 1.svg"
          alt=""
          class="me-2"
          srcset=""
        />
        --Institution--
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    value: String,
  },
  model: {
    prop: "value",
    event: "update",
  },
  methods: {
    handleInput(e) {
      this.$emit("update", e.target.value);
    },
  },
};
</script>

<style></style>
