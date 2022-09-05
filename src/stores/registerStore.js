import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => {
    return {
      invalidFields: [],
      passwordsMatch: true,
      validated: false,
    };
  },
  actions: {
    confirmPassword(password, confirmPassword) {
      if (password !== confirmPassword) {
        this.passwordsMatch = false;
        return;
      }
      this.passwordsMatch = true;
    },
    addInvalidField(fieldName) {
      if (!this.invalidFields.includes(fieldName)) {
        this.invalidFields.push(fieldName);
      }
    },
    removeInvalidField(fieldName) {
      const index = this.invalidFields.indexOf(fieldName);
      if (index !== -1) {
        this.invalidFields.splice(index, 1);
      }
    },
    // validateLastname(value = "") {
    //   if (value == "") {
    //     this.validLastname = false;
    //     return;
    //   }
    //   this.validLastname = true;
    // },
    // validateUsername(value = "") {
    //   if (value == "") {
    //     this.validUsername = false;
    //     return;
    //   }
    //   this.validUsername = true;
    // },
    // validateDesignation(value = "") {
    //     if (value == "") {
    //       this.validUsername = false;
    //       return;
    //     }
    //     this.validUsername = true;
    //   },
    // validateEmail(value = "") {
    //   if (value == "") {
    //     this.validEmail = false;
    //     return;
    //   }
    //   if (!validEmailString(value)) {
    //     this.validEmail = false;
    //     return;
    //   }
    //   this.validEmail = true;
    // },
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

// const validEmailString = (email) => {
//   var atposition = email.indexOf("@");
//   var dotposition = email.lastIndexOf(".");
//   if (
//     atposition < 1 ||
//     dotposition < atposition + 2 ||
//     dotposition + 2 >= email.length
//   ) {
//     return false;
//   }
//   return true;
// };
