import { defineStore } from "pinia";

//Get auth details from the user's browser
const authString = localStorage.getItem("authDetails") || "null";
//parse the string to JSON
const authObject = JSON.parse(authString);

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: authObject?.user || null,
      isAuthenticated: authObject?.success || false,
      token: authObject?.token || '',
      refreshToken: authObject?.refreshToken ||'',
    };
  },
  actions: {},
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
