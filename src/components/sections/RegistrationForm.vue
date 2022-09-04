<template>
  <v-card
    id="registration-form"
    class="reg-card py-16 px-10"
    elevation="1"
    outlined
  >
    <div class="register-txt mb-6">
      <h4 class="registration-header fw-bolder border-deep pisition-relative">
        Registration
      </h4>
    </div>
    <!-- form -->
    <template>
      <form action="" novalidate>
        <div class="reg-form">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="firstName"
                    placeholder="Brian Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/info 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    First Name
                  </label>
                </div>
                <p class="danger--text" v-if="!registerStore.validFirstname">
                  This field cannot be empty
                </p>
              </v-col>

              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="lastName"
                    placeholder="Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/info 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    Last Name
                  </label>
                </div>
                <p class="danger--text" v-if="!registerStore.validLastname">
                  This field cannot be empty
                </p></v-col
              >

              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="username"
                    placeholder="Brian Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/info 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    Username
                  </label>
                </div>
                <p class="danger--text" v-if="!registerStore.validUsername">
                  This field cannot be empty
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/mail 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    Email
                  </label>
                </div>
                 <p class="danger--text" v-if="!registerStore.validEmail">
                  Invalid email
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="phone"
                    placeholder="Brian Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/phone.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    Phone Number
                  </label>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <SelectInput :options="[]" />
              </v-col>
              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="designation"
                    placeholder="Brian Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/structure 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    Designation
                  </label>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="form-floating mb-3 no-outline">
                  <input
                    type="Text"
                    class="form-control no-outline"
                    v-model="nida"
                    placeholder="Brian Nkwera"
                  />
                  <label for="floatingInput d-flex align-center">
                    <img
                      src="@/assets/icons/info 1.svg"
                      alt=""
                      class="me-2"
                      srcset=""
                    />
                    NIDA number
                  </label>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <PasswordInput name="Password" bind="password" icon="" />
              </v-col>
              <v-col cols="12" md="6">
                <ConfirmPasswordInput
                  name="Confirm Password"
                  bind="confirm password"
                  icon=""
                />
              </v-col>
              <!-- <v-col cols="12" md="6">
                <v-text-field
                  v-model="password"
                  label="Password"
                  prepend-icon="mdi-lock-outline"
                  type="password"
                  :rules="[required, min6]"
                >
                  <template v-slot:append>
                    <v-icon v-if="successPass" color="green">{{
                      passRule
                    }}</v-icon>
                    <v-icon v-if="!successPass" color="red">{{
                      passRule
                    }}</v-icon>
                  </template>
                </v-text-field>
              </v-col> -->
              <!-- <v-col cols="12" md="6">
                <v-text-field
                  v-model="password1"
                  label="Verify Password"
                  prepend-icon="mdi-lock-outline"
                  type="password"
                  :rules="[required, min6, matchingPasswords]"
                  :counter="6"
                >
                  <template v-slot:append>
                    <v-icon v-if="successPass1" color="green">{{
                      passRule1
                    }}</v-icon>
                    <v-icon v-if="!successPass1" color="red">{{
                      passRule1
                    }}</v-icon>
                  </template>
                </v-text-field>
              </v-col> -->
              <!-- select box starts -->
              <!-- <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="inst_value"
                  :items="inst_items"
                  dense
                  label="-- Institution --"
                ></v-autocomplete>
              </v-col> -->
              <!-- departments below -->
              <!-- <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="dep_value"
                  :items="dep_items"
                  dense
                  label="-- Department --"
                ></v-autocomplete>
              </v-col> -->
              <!-- <button
                class="btn-submit btn mx-auto mt-10 deep white--text"
                type="button"
                @click="submit"
              >
                SUBMIT
              </button> -->
            </v-row>
          </v-container>
        </div>
      </form>
    </template>
    <!-- /form -->
  </v-card>
</template>

<script>
import PasswordInput from "@/components/Microcomponents/PasswordInput.vue";
import ConfirmPasswordInput from "@/components/Microcomponents/ConfirmPasswordInput.vue";
import SelectInput from "@/components/Microcomponents/SelectInput.vue";
import { useRegisterStore } from "@/stores/registerStore";
// import {mapState} from "pinia"
import { mapStores } from "pinia";
export default {
  components: {
    PasswordInput,
    ConfirmPasswordInput,
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
      // password: "",
      // confirmPassword: "",
    };
  },
  watch: {
    firstName: function () {
      this.registerStore.validateFirstname(this.firstName);
    },
    lastName: function () {
      this.registerStore.validateLastname(this.lastName);
    },
    username: function () {
      this.registerStore.validateUsername(this.username);
    },
    email: function () {
      this.registerStore. validateEmail(this.email);
    },
  },
};
</script>

<style>
#registration-form {
  min-height: 780px;
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
