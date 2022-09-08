<template>
  <div>
    <NavBar />
    <v-container class="bg-tanzania" fluid>
      <v-row class="mx-auto my-16 form-container" no-gutters>
        <v-col cols="5" class="d-sm-flex d-none align-center">
          <div
            class="bg-register card-content pt-16 pb-16 ps-10 text-white position-relative"
          >
            <div class="pb-10 overflow-auto">
              <h5>Tafadhali zingatia yafuatayo wakati unajisajili.</h5>
              <ol>
                <li>
                  Ingiza taarifa zako kwa usahihi, ikiwemo majina yako, Taasisi
                  na Nafasi yako.
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
              <div
                class="text-center position-absolute bottom-0 start-50 translate-middle-x pb-5"
              >
                <p class="caption">Have an account?</p>
                <router-link class="text-decoration-none" to="/login">
                  <v-btn outlined color="warning" class="zoom">Login</v-btn>
                </router-link>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7" md="6">
          <RegistrationForm />
        </v-col>
        <v-col class="d-sm-flex align-center d-none" md="1">
          <div class="right-decoration bg-register w-100"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/global_components/NavBar.vue";
import RegistrationForm from "@/components/sections/RegistrationForm.vue";
export default {
  name: "LoginPage",
  components: {
    RegistrationForm,
    NavBar,
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

.right-decoration {
  height: 511px;
}

@media only screen and (max-width: 960px) {
  .card-content {
    height: 680px;
  }
  .right-decoration {
    height: 680px;
  }
}

.form-container {
  max-width: 1336px;
}
</style>
