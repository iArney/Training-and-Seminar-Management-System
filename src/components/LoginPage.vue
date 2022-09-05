<template>
  <v-main>
    <v-card class="login-card" elevation="1" outlined>
      <!-- logo starts -->
      <div class="logo-icon" style="padding: 20px; margin-left: 21rem">
        <img src="@/assets/images/official-logo.webp" width="200" alt="tsms-logo" />
      </div>
      <!-- logo ends -->

      <!-- login amico image -->
      <div class="image-icon">
        <img
          src="@/assets/images/Login-amico.webp"
          width="430"
          height="430"
          alt=""
        />
      </div>
      <!-- login amico image ends -->

      <!-- form inputs starts -->
      <div class="form-inputs">
        <form action="">
          <v-row>
            <v-col cols="12" md="4" class="inputs">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                style="background-color: #fffeea"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
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
          </v-row>

          <v-btn class="mr-4" type="submit" style="background-color:#004B8E;color:#fff;margin-top:50px;" @click="submit"> LOGIN </v-btn>
        </form>
      </div>
      <!-- form inputs ends -->
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

    show1: false,
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>

<style>
/* main starts */
.v-main {
    height: 100vh;
  background: url("@/assets/images/flag-tanzania.webp"),
    linear-gradient(
      100.73deg,
      rgba(190, 238, 245, 0.5) 1.11%,
      rgba(209, 209, 209, 0.5) 33.86%,
      rgba(92, 205, 250, 0.5) 68.61%,
     #FFFEEA
    );
  background-attachment: fixed;
}
/* main ends */
/* login card starts */
.login-card {
  margin: 10rem auto;
  height: 36rem;
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
  top: 115px;
  left: 225px;
  color: #004B8E;
  
}
/* /login card ends */

/* form-inputs starts */
.inputs {
  position: relative;
  left: 37rem;
  top: 3rem;
}
/* form inputs ends */
/* image-icon starts */
.image-icon {
  position: absolute;
  top: 22px;
  left: 53px;
}
/* image-icon ends */
/* button */
.mr-4 {
  position: relative;
  left: 17rem;
  top: 2rem;
}

/* rensponsiveness */
@media(min-width: 800px and 900px){
  .v-main {
    height: 100vh;
    max-width: 1700px;
  background-attachment: fixed;
}


  .login-card {
    margin: 10rem auto;
    height: 36rem;
    width: 60rem;
    text-align: center;
}
}
</style>
