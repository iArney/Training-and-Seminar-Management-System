<template>
  <v-container class="bg-tanzania" fluid>
    <v-row class="mx-auto my-16 form-container" no-gutters>
      <v-col cols="5" class="d-sm-flex d-none align-center">
        <div class="bg-register card-content pt-16 pb-16 ps-10 text-white">
          <div class="pb-10 overflow-auto">
            <h5>Tafadhali zingatia yafuatayo wakati unajisajili.</h5>
            <ol>
              <li>
                Ingiza taarifa zako kwa usahihi, ikiwemo majina yako, Taasisi na
                Nafasi yako.
              </li>
              <li>
                Tumia email rasmi ambayo unatumia mara kwa mara kwa shughuli
                rasmi (i.e email ya serikali au ya kiofisi)
              </li>
              <li>
                Weka namba ya simu kwa usahihi, hakiki Taarifa zako kabla ya
                kuwasilisha.
              </li>
              <li>
                Kama umewahi kujisajili katika mfumo huu, usijaribu kujisajili
                tena hata kwa email nyingine tumia email uliyotumia awali
                kuingia kwenye mfumo.
              </li>
              <li>Kwa msaada piga +255 764 292 299 au +255 763 292 299</li>
            </ol>
          </div>
          <!-- <span class="content-qn"> Have an account?</span>
          <v-btn
            class="mr-btn"
            type="button"
            style="background-color: #fff573; color: #004b8e; font-weight: 600"
            @click="submit"
          >
            LOGIN
          </v-btn> -->
        </div>
        <!-- <img src="@/assets/images/back-card.webp" alt="" /> -->
      </v-col>
      <v-col cols="12" sm="7" md="6">
        <RegistrationForm />
      </v-col>
      <v-col class="d-sm-flex align-center d-none" md="1">
        <div class="right-decoration bg-register w-100"></div>
      </v-col>
    </v-row>

    <!-- registraion form component --->
  </v-container>
</template>

<script>
import RegistrationForm from "@/components/sections/RegistrationForm.vue";
export default {
  name: "LoginPage",
  components: {
    RegistrationForm,
  },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

    //select box scripting
    inst_items: ["e-Government Authority", "tcra", "nmb-bank", "unyamwezi"],
    inst_value: null,
    dep_items: [
      "Information Communication Technology",
      "Law",
      "Human Resource",
      "Sports & Entertainment",
    ],
    depp_value: null,
    //select box scripting ends

    // password matching
    password: "",
    password1: "",
    successPass: false,
    successPass1: false,
  }),
  methods: {
    required: function (value) {
      if (value) {
        return true;
      } else {
        return "This field is required.";
      }
    },
    min6: function (value) {
      if (value.length >= 6) {
        return true;
      } else {
        return "Password should have more than 6 characters.";
      }
    },
    matchingPasswords: function () {
      if (this.password === this.password1) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },
  },
  // computed: {
  //   passRule: function() {
  //     if (this.password === '') {
  //       // field is empty
  //       this.successPass = false;
  //       return '';
  //     } else if (this.min6(this.password) === true) {
  //       // password ok
  //       this.successPass = true;
  //       return 'mdi-check';
  //     } else {
  //       // password wrong
  //       this.successPass = false;
  //       return 'mdi-close';
  //     }
  //   },
  // passRule1: function() {
  //   if (this.password1 === '') {
  //     // field is empty
  //     this.successPass1 = false;
  //     return '';
  //   } else if (this.min6(this.password1) === true && this.matchingPasswords() === true) {
  //     // password ok
  //     this.successPass1 = true;
  //     return 'mdi-check';
  //   } else {
  //     // password wrong
  //     this.successPass1 = false;
  //     return 'mdi-close';
  //   }
  // password matching ends

  //   data: () => ({
  //     email: "",
  //     emailRules: [
  //       (v) => !!v || "E-mail is required",
  //       (v) => /.+@.+/.test(v) || "E-mail must be valid",
  //     ],

  //     show1: false,
  //     password: "Password",
  //     rules: {
  //       required: (value) => !!value || "Required.",
  //       min: (v) => v.length >= 8 || "Min 8 characters",
  //       emailMatch: () => `The email and password you entered don't match`,
  //     },
  //   }),
  //   methods: {
  //     submit() {
  //       this.$v.$touch();
  //     },
  //   },
};
</script>

<style>
.bg-register {
  background: url("@/assets/images/back-card.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.card-content {
  height: 511px;
  font-size: 0.9375rem !important;
  line-height: 1.4rem !important;
  letter-spacing: 0.02em;
}

  @media only screen and (max-width: 960px) {
.card-content{
  height: 700px;
}
}

.form-container {
  max-width: 1336px;
}
.right-decoration{
  height: 511px;
}
/* main ends */
/* login card starts */
/* .reg-card {
  margin: -25rem auto;
  height: 42rem;
  width: 42rem;
  text-align: center;
  position: relative;
  left: 6rem;
} */
/* .logo-icon {
  position: relative;
  left: -2.5rem;
}
.logo-icon::before {
  position: relative;
  content: "login with your provided credentials";
  top: 48px;
  left: 175px;
  color: #0054c2;
} */

/* image-card */
/* .image-card {
  position: relative;
  top: 12rem;
  left: 17rem;
} */
/* image-card ends */

/* card-contents starts */
/* .card-content {
  position: absolute;
  color: #fffeea;
  width: 24rem;
  line-height: 30px;
} */
/* .card-content .v-btn {
  position: relative;
  top: 100px;
  left: 56%;
} */
/* .card-content .v-btn:hover {
  padding: 20px auto;
} */
/* .content {
  position: relative;
  left: 10%;
  top: 40px;
} */

/* .content-qn {
  position: absolute;
  top: 400px;
  left: 185px;
} */
/* .mr-btn {
  margin-top: 2rem;
}
/* card-contents ends */

/* Registration card */
/* .register {
  color: #000;
  position: relative;
  top: 20px;
  left: -12rem;
  font-weight: 800;
  font-size: 140%;
} */
/* .register::after {
  display: block;
  content: "";
  border: 2px;
  border-radius: 8px;
  width: 50%;
  height: 3px;
  background: #004b8e;
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
}

.fields-register::after {
  display: block;
  content: "";
  border: 2px;
  border-radius: 8px;
  width: 2%;
  height: 56px;
  background: #004b8e;
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
} */
/* Registration card ends */

/* .reg-form {
  padding: auto;
  margin-top: 30px;
}  */

/* /login card ends */

/* form-inputs starts */
/* .inputs {
  position: relative;
  left: 37rem;
} */
/* form inputs ends */
/* image-icon starts */
/* .image-icon {
  position: absolute;
  top: 22px;
  left: 53px;
} */
/* image-icon ends */
/* button */
/* .mr-4 {
  position: relative;
  left: 17rem;
  top: 2rem;
} */
</style>
