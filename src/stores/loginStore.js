import { login } from "@/graphQLqueries/uaaQueries";
import { defineStore } from "pinia";
// import {getAllInstitutions} from "@/graphQLqueries/trainingQueries";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      user: null,
      token: "",
      refreshToken: "",
      success: false,
      errors: null,
    };
  },
  actions: {
    async userLogin(loginDetails) {
      const result = await login(loginDetails);
      this.user = result.user;
      this.token = result.token;
      this.refreshToken = result.refreshToken;
      this.success = result.success;
      this.errors = result.errors;

      if(result.success){
        //store user details to local storage
        localStorage.setItem('authDetails', JSON.stringify(result));
      }
    },
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
