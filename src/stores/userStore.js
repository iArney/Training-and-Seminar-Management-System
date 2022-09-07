import { defineStore } from "pinia";
import { getUser } from "@/graphQLqueries/userQueries";


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
  actions: {
    logout (){
      localStorage.removeItem('authDetails');
      this.user = null;
      this.isAuthenticated = false;
      this.token = '';
      this.refreshToken = '';
    },
    async setUserDetails (){
      const userDetails = await getUser();
      // const userRoles = getUserRoles();
      this.user = userDetails;
    }
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
