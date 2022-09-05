<template>
  <v-card
    id="registration-form"
    class="reg-card px-10 pt-16"
    elevation="1"
    outlined
  >
    <div>
      <div class="register-txt">
        <h4 class="registration-header fw-bolder border-deep pisition-relative">
          Registration
        </h4>
      </div>
      <!-- form -->
      <form action="" novalidate>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <TextInput
                label="First Name"
                v-model="firstName"
                type="text"
                required
                :icon="require('@/assets/icons/info 1.svg')"
              />
            </v-col>

            <v-col cols="12" md="6">
              <TextInput
                label="Last Name"
                v-model="lastName"
                :icon="require('@/assets/icons/info 1.svg')"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <TextInput
                label="Username"
                v-model="username"
                :icon="require('@/assets/icons/info 1.svg')"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput
                label="Email"
                type="email"
                v-model="email"
                :icon="require('@/assets/icons/mail 1.svg')"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput
                label="Phone Number"
                v-model="phone"
                :icon="require('@/assets/icons/phone.svg')"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <SelectInput :options="[]" />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput
                label="Designation"
                v-model="designation"
                required
                :icon="require('@/assets/icons/structure 1.svg')"
              />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput label="NIDA number" v-model="nida" required />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput
                type="password"
                label="Password"
                v-model="password"
                :icon="require('@/assets/icons/key.svg')"
                :minText="8"
              />
            </v-col>
            <v-col cols="12" md="6">
              <TextInput
                type="password"
                label="Confirm Password"
                v-model="confirmPassword"
                :icon="require('@/assets/icons/key.svg')"
                :passwordMatch="true"
              />
              <p class="danger--text" v-if="!registerStore.passwordsMatch">
                Passwords don't match
              </p>
            </v-col>
            <!-- <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="dep_value"
                  :items="dep_items"
                  dense
                  label="-- Department --"
                ></v-autocomplete>
              </v-col> -->
            <button
              class="btn-submit btn mx-auto mt-10 deep white--text"
              @click="submit"
              type="button"
            >
              SUBMIT
            </button>
          </v-row>
        </v-container>
      </form>
    </div>

    <!-- /form -->
  </v-card>
</template>

<script>
import TextInput from "@/components/Microcomponents/TextInput.vue";
import SelectInput from "@/components/Microcomponents/SelectInput.vue";
import { useRegisterStore } from "@/stores/registerStore";
// import {mapState} from "pinia"
import { mapStores } from "pinia";

export default {
  components: {
    TextInput,
    SelectInput,
  },
  computed: {
    ...mapStores(useRegisterStore),
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      institution: "",
      designation: "",
      nida: "",
      password: "",
      confirmPassword: "",
      passwordsMatch: true,
    };
  },
  watch: {
    confirmPassword() {
      this.registerStore.confirmPassword(this.password, this.confirmPassword);
    },
    password() {
      this.registerStore.confirmPassword(this.password, this.confirmPassword);
    },
  },
  methods: {
    checkPassword() {
      if (this.confirmPassword === this.password) {
        this.passwordsMatch = true;
      } else {
        this.passwordsMatch = false;
      }
    },
    submit(e) {
      e.preventDefault();
      if (
        this.registerStore.validated &&
        this.registerStore.invalidFields == []
      ) {
        //post data to back end
        console.log("hello");
      }
    },
  },
};
</script>

<style>
#registration-form {
  min-height: 770px;
}

.registration-header:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  width: 70px; /* Change this to whatever width you want. */
  padding-top: 6px; /* This creates some space between the element and the border. */
  border-bottom: 4px solid #004b8e; /* This creates the border. Replace black with whatever color you want. */
}

input {
  background: #f4f9ff !important;
  border-radius: 0 !important;
  border-top: hidden !important;
  border-right: hidden !important;
  border-left: 3px solid #004b8e !important;
  border-bottom: hidden !important;
  /* background-color: #eee; */
}

.btn-submit {
  max-width: 147px;
}
</style>
