<!-- This component is the base Textinput component
--It can be used in form components
-- or extended to obtain other input components
-->
<template>
  <div>
    <div class="form-floating mb-3 no-outline">
      <input
        v-bind="$attrs"
        class="form-control no-outline"
        :value="value"
        @input="handleInput($event)"
        :placeholder="label"
      />
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
    passwordMatch: Boolean,
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

      if (e.target.type === "email") {
        this.validEmail = validateEmail(e.target.value);
        if (validateEmail(e.target.value) === false) {
          this.registerStore.addInvalidField(this.label);
        } else {
          this.registerStore.removeInvalidField(this.label);
        }
        return;
      }

      if (e.target.value.length < this.minText) {
        this.validLength = false;
        this.registerStore.addInvalidField(this.label);

        return;
      }
      this.validLength = true;
      this.registerStore.removeInvalidField(this.label);
      //   this.registerStore.validate(e.target.value);
    },
  },
};

const validateEmail = (email) => {
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    return false;
  }
  return true;
};
</script>

<style></style>
