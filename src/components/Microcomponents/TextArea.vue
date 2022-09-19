<!-- This component is the base Textinput component
--It can be used in form components
-- or extended to obtain other input components
-->
<template>
  <div>
    <div class="form-floating mb-3 no-outline">
      <textarea
        v-bind="$attrs"
        row="3"
        class="form-control no-outline"
        :value="value"
        @input="handleInput($event)"
        :placeholder="label"
      >
      </textarea>
      <label for="floatingInput d-flex align-center">
        <img :src="icon" alt="" class="me-2" srcset="" />
        {{ label }}
      </label>
    </div>
    <p class="danger--text" v-if="isEmpty && required">
      This field cannot be empty
    </p>
    <p class="danger--text" v-if="!validEmail">Email is invalid</p>
    <p class="danger--text" v-if="!validLength">
      Must be at least {{ minText }} long
    </p>
  </div>
</template>

<script>
import { useRegisterStore } from "@/stores/registerStore";
import { mapStores } from "pinia";

export default {
  computed: {
    ...mapStores(useRegisterStore),
  },
  data() {
    return {
      isEmpty: false,
      validEmail: true,
      validLength: true,
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    icon: {
      type: String,
      defaul: "",
    },
    label: String,
    required: {
      type: [Boolean],
      default: false,
    },
    minText: Number,
  },
  model: {
    prop: "value",
    event: "update",
  },
  methods: {
    handleInput(e) {
      //handle method in validation stor
      this.registerStore.validated = true;
      this.$emit("update", e.target.value);
      if (e.target.value === "") {
        this.isEmpty = true;
        this.registerStore.addInvalidField(this.label);
        return;
      }
      this.isEmpty = false;
    },
  },
};
</script>

<style scoped>
textarea {
  background: #f4f9ff !important;
  border-radius: 0 !important;
  border-top: hidden !important;
  border-right: hidden !important;
  border-left: 3px solid #004b8e !important;
  border-bottom: hidden !important;
}
</style>
