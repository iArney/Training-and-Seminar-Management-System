<template>
  <div>
    <NavBar />
    <v-container class="bg-tanzania" fluid>
      <v-row elevation="1" class="mx-auto my-16 white px-sm-5 form-container">
        <v-col md="6" sm="12">
          <div>
            <h1>Welcome to</h1>
            <h1 class="fw-bolder deep--text logo">TSMS</h1>
          </div>
          <!-- <div class="logo-icon" style="padding: 20px; margin-left: 21rem">
              <img src="@/assets/images/logo.webp" alt="tsms-logo" />
            </div> -->
          <!-- logo ends -->

          <!-- login amico image -->
          <div class="image-icon text-center">
            <img
              class="mx-auto object-container login-image"
              src="@/assets/images/Login-amico.webp"
              width="430"
              height="430"
              alt=""
            />
          </div>
        </v-col>
        <v-col md="6" sm="12" class="mt-5 ps-7">
          <!-- form inputs starts -->
          <div class="text-center py-6">
            <img
              src="@/assets/images/logo.webp"
              class="logo-img d-md-inline-block d-none object-contain"
              width="200"
              height="150"
            />
            <p class="deep--text">Login with your provided credentials</p>
            <p v-if="errors !== null" class="danger--text">
              Please enter valid credentials
            </p>
          </div>
          <form action="" class="w-100 text-center">
            <!-- <v-row>
            <v-col cols="12" md="4" class="inputs">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                style="background-color: #fffeea"
              ></v-text-field>
            </v-col>
          </v-row> -->

            <TextInput
              label="Email"
              v-model="email"
              type="email"
              class="text-start mb-5 input"
              :icon="require('@/assets/icons/mail 1.svg')"
            />
            <TextInput
              type="password"
              v-model="password"
              label="Password"
              class="mb-5 text-start input"
              :icon="require('@/assets/icons/key.svg')"
            />
            <!-- <v-row>
            <v-col cols="12" sm="4" class="inputs">
              <v-text-field
                style="background-color: #fffeea"
                required
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Enter Correct Password"
                hint="Satisfactory!"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row> -->
            <v-btn
              :disabled="loading"
              class="btn deep white--text p-4 mx-auto"
              type="submit"
              @click="submit"
            >
              <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span v-else>LOGIN</span>
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useLoginStore } from "@/stores/loginStore";
// import {mapState} from "pinia"
import { mapStores } from "pinia";
import TextInput from "@/components/Microcomponents/TextInput.vue";
import NavBar from "@/components/global_components/NavBar.vue";

export default {
  name: "LoginPage",
  components: {
    TextInput,
    NavBar,
  },
  computed: {
    ...mapStores(useLoginStore),
  },
  data: () => ({
    email: "",
    show1: false,
    loading: false,
    password: "",
    errors: null,
  }),
  methods: {
    async submit(e) {
      e.preventDefault();
      const loginDetails = {
        email: this.email,
        password: this.password,
      };

      this.loading = true;
      await this.loginStore.userLogin(loginDetails);
      this.loading = false;
      if (this.loginStore.success) {
        this.$router.push("/services");
        return;
      }
      this.errors = this.loginStore.errors;
    },
  },
};
</script>

<style scoped>
.logo {
  font-size: 3.3rem !important;
  font-weight: 900 !important;
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
.form-container {
  max-width: 1336px;
}
@media only screen and (max-width: 470px) {
  .login-image {
    width: 270px !important;
    height: 270px !important;
  }
}
/* .login-card {
  margin: 10rem auto;
  height: 32rem;
  width: 62rem;
  text-align: center;
}
.logo-icon {
  position: relative;
  left: -2.5rem;
}
.logo-icon::before {
  position: relative;
  content: "Login with your provided credentials";
  top: 48px;
  left: 175px;
  color: #0081c2;
}

.inputs {
  position: relative;
  left: 37rem;
}

.image-icon {
  position: absolute;
  top: 22px;
  left: 53px;
}

.mr-4 {
  position: relative;
  left: 17rem;
  top: 2rem;
} */
</style>
