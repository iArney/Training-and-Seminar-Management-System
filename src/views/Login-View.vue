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
              src="@/assets/images/official-logo.webp"
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
            <v-btn
              :disabled="loading"
              class="btn deep white--text p-4 mx-auto no-outline"
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
    <Footer class="primary" />
  </div>
</template>

<script>
import { useLoginStore } from "@/stores/loginStore";
// import {mapState} from "pinia"
import { mapStores } from "pinia";
import Footer from "@/components/global_components/FooterSection.vue";
import TextInput from "@/components/Microcomponents/TextInput.vue";
import NavBar from "@/components/global_components/NavBar.vue";
import { useUserStore } from "@/stores/userStore";

export default {
  name: "LoginPage",
  components: {
    Footer,
    TextInput,
    NavBar,
  },
  computed: {
    ...mapStores(useLoginStore, useUserStore),
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
      try {
        await this.loginStore.userLogin(loginDetails);

        if (this.loginStore.success) {
          this.userStore.isAuthenticated = true;
          this.userStore.user = this.loginStore.user;
          this.userStore.token = this.loginStore.token;
          this.userStore.refreshToken = this.loginStore.refreshToken;
          await this.userStore.setPermissions();

          this.$router.push("/services");
          return;
        }
        this.errors = this.loginStore.errors;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
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

</style>
