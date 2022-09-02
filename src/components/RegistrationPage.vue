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
      <span class="content-qn"> Have an account?</span>
  <v-btn class="mr-btn" type="button" style="background-color: #FFF573;color:#004B8E;font-weight:600;" @click="submit"> LOGIN </v-btn>

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
                        <form action="">
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
            filled
            class="fields-register"
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
            filled
            class="fields-register"
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
            filled
            required
            class="fields-register"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    </div>

    <!-- password matching -->

    <!-- <v-app id="inspire"> -->
    <v-container>
      <v-row justify="center" >
        
        <v-col cols="6" >
          <!-- password -->
          <v-text-field
             v-model="password"
             label="Password"
             prepend-icon="mdi-lock-outline"
             type="password"
             filled
             :rules="[required, min6]"
             :counter="6"
            >
            <template v-slot:append>
              <v-icon
                 v-if="successPass"
                 color="green"
                 >{{ passRule }}</v-icon
                >
              <v-icon
                 v-if="!successPass"
                 color="red"
                 >{{ passRule }}</v-icon
                >
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <!-- password1 -->
          <v-text-field
             v-model="password1"
             label="Verify Password"
             prepend-icon="mdi-lock-outline"
             type="password"
             filled
             :rules="[required, min6, matchingPasswords ]"
             :counter="6"
            >
            <template v-slot:append>
              <v-icon
                v-if="successPass1"
                color="green"
                >{{ passRule1 }}</v-icon
              >
              <v-icon
                 v-if="!successPass1"
                 color="red"
                 >{{ passRule1 }}</v-icon
              >
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-app> -->
  <!-- password matching ends -->

  <!-- select box starts -->
                 <v-col cols="12">
          <v-autocomplete
            v-model="inst_value"
            :items="inst_items"
            dense
            filled
            label="-- Institution --"
          ></v-autocomplete>
        </v-col>
        <!-- departments below -->
           <v-col cols="12">
          <v-autocomplete
            v-model="dep_value"
            :items="dep_items"
            dense
            filled
            label="-- Department --"
          ></v-autocomplete>
        </v-col>
        
  <!-- /select box ends -->
  <v-btn class="mr-4" type="submit" style="background-color: #0081c2;color:white;font-weight:600;" @click="submit"> SUBMIT </v-btn>
  </form>
</template>
        <!-- /form -->
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

      //select box scripting
        inst_items: ['e-Government Authority', 'tcra', 'nmb-bank', 'unyamwezi'],
        inst_value: null,
        dep_items: ['Information Communication Technology', 'Law', 'Human Resource', 'Sports & Entertainment'],
        depp_value: null,
      //select box scripting ends
      


      // password matching
      password: '',
      password1: '',
      successPass: false,
      successPass1: false
    
  }),
  methods: {
    required: function(value) {
      if (value) {
        return true;
      } else {
        return 'This field is required.';
      }
    },
    min6: function(value) {
      if (value.length >= 6) {
        return true;
      } else {
        return 'Password should have more than 6 characters.';
      }
    },
    matchingPasswords: function() {
      if (this.password === this.password1) {
        return true;
      } else {
        return 'Passwords does not match.';
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
}
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
  color: #0054c2;
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
.card-content .v-btn{
  position: relative;
  top: 100px;
  left: 56%;
}
.card-content .v-btn:hover{
  padding: 20px auto;
}
.content{
    position: relative;
    left: 10%;
    top: 40px;
}

.content-qn{
  position: absolute;
  top: 400px;
  left: 185px;
}
.mr-btn{
  margin-top: 2rem;
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

.fields-register::after {
   display: block;
   content: '';
   border: 2px;
   border-radius: 8px;
   width: 2%;
   height: 56px;
   background: #004B8E;
   position: absolute;
   top: 1px;
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
