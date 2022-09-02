<template>
  <v-main>
    <div class="image-card">
         <div class="card-content">
      <span class="content">
        Tafadhali zingatia yafuatayo wakati unajisajili. Ingiza taarifa zako kwa
        usahihi, ikiwemo majina yako, Taasisi na Nafasi yako. Tumia email rasmi
        ambayo unatumia mara kwa mara kwa shughuli rasmi (i.e email ya serikali
        au ya kiofisi) Weka namba ya simu kwa usahihi, hakiki Taarifa zako kabla
        ya kuwasilisha. Kama umewahi kujisajili katika mfumo huu, usijaribu
        kujisajili tena hata kwa email nyingine tumia email uliyotumia awali
        kuingia kwenye mfumo. Kwa msaada piga <strong> +255 764 292 299 </strong>au <strong>  +255 763 292
        299 </strong> 
      </span>
    </div>
      <img src="@/assets/images/back-card.webp" alt="" />
    </div>
   
    <v-card class="reg-card" elevation="1" outlined>
        <div class="register-txt">
            <span class="register">
            Registration
        </span>
        </div>
        <!-- form -->
                       <template>
  <v-form v-model="valid">
    <div class="reg-form">
  <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    </div>
  
  </v-form>
</template>
        <!-- /form -->
        
      <!-- logo starts -->
      <!-- <div class="logo-icon" style="padding: 20px; margin-left: 21rem">
        <img src="@/assets/images/logo.webp" alt="tsms-logo" />
       </div> -->
      <!-- logo ends -->

      <!-- login amico image -->
      <!-- <div class="image-icon">
        <img
          src="@/assets/images/Login-amico.webp"
          width="430"
          height="430"
          alt=""
        />
      </div> -->
      <!-- login amico image ends -->

      <!-- form inputs starts -->
      <div class="form-inputs">
        <form action="">
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
                label="Normal with hint text"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn class="mr-4" type="submit" @click="submit"> LOGIN </v-btn> -->
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
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),




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
/* main starts */
.v-main {
  height: 100vh;
  background: url("@/assets/images/flag-tanzania.webp"),
    linear-gradient(
      100.73deg,
      rgba(190, 238, 245, 0.5) 1.11%,
      rgba(209, 209, 209, 0.5) 33.86%,
      rgba(92, 205, 250, 0.5) 68.61%,
      #fffeea
    );
  background-attachment: fixed;
}
/* main ends */
/* login card starts */
.reg-card {
  margin: -25rem auto;
  height: 42rem;
  width: 42rem;
  text-align: center;
  position: relative;
  left: 6rem;
}
.logo-icon {
  position: relative;
  left: -2.5rem;
}
.logo-icon::before {
  position: relative;
  content: "login with your provided credentials";
  top: 48px;
  left: 175px;
  color: #0081c2;
}

/* image-card */
.image-card {

  position: relative;
  top: 12rem;
  left: 17rem;
}
/* image-card ends */

/* card-contents starts */
.card-content{
    position: absolute;
    color: #fffeea;
    width: 24rem;
    line-height: 30px;
}
.content{
    position: relative;
    left: 10%;
    top: 40px;
}
/* card-contents ends */

/* Registration card */
.register{
    color: #000;
    position: relative;
    top: 20px;
    left: -12rem;
    font-weight: 800;
    font-size: 140%;
}
.register::after {
   display: block;
   content: '';
   border: 2px;
   border-radius: 8px;
   width: 50%;
   height: 3px;
   background: #004B8E;
   position: absolute;
   top: 30px;
   bottom: 0;
   left: 0;
}
/* Registration card ends */

.reg-form{
    padding: auto;
    margin-top: 30px;
}



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
