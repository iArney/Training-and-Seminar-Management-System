import { defineStore } from "pinia";

export const useFormValidationStore = defineStore("formValidation", {
  state: () => {
    return {
        formFields: [],
    //   validFirstname: true,
    //   validLastname: true,
    //   validUsername: true,
    //   validEmail: true,
    //   validateDesignation: true,
    //   validPhone: true,
    //   validPassword: true,
    //   confirmedPassword: true,
    };
  },
  actions: {
    // validate (value="", name){
    //     if(this.formFields.includes())
    //     this.formFields.push({name: name, valid: true});
    // }
    validateFirstname(value = "") {
    //   this.validFirstname = true;
      if (value == "") {
        this.validFirstname = false;
        return;
      }
      this.validFirstname = true;
    },
    validateLastname(value = "") {
      if (value == "") {
        this.validLastname = false;
        return;
      }
      this.validLastname = true;
    },
    validateUsername(value = "") {
      if (value == "") {
        this.validUsername = false;
        return;
      }
      this.validUsername = true;
    },
    validateDesignation(value = "") {
      if (value == "") {
        this.validUsername = false;
        return;
      }
      this.validUsername = true;
    },
    validateEmail(value = "") {
      if (value == "") {
        this.validEmail = false;
        return;
      }
      if (!validEmailString(value)) {
        this.validEmail = false;
        return;
      }
      this.validEmail = true;
    },
  },
  //   getters: {
  //     validateEmail() {
  //       return this.validEmail;
  //     },
  //     validatePhone() {
  //       return this.validPhone;
  //     },

  //     validatePassword() {
  //       return this.validPassword;
  //     },
  //     confirmPassword() {
  //       return this.confirmedPassword;
  //     },
  //   },
});

const validEmailString = (email) => {
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

