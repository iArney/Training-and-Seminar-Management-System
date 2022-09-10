import { defineStore } from "pinia";
import { getUser, getUserPermissions } from "@/graphQLqueries/userQueries";


//Get auth details from the user's browser
const authString = localStorage.getItem("authDetails") || "null";
const permissionString = localStorage.getItem("permissions") ||'null';
//parse the string to JSON
const authObject = JSON.parse(authString);
const permissionsObject = JSON.parse(permissionString); 

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: authObject?.user || null,
      isAuthenticated: authObject?.success || false,
      token: authObject?.token || '',
      refreshToken: authObject?.refreshToken ||'',
      permissions: permissionsObject || [],
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
      this.user = userDetails;
    },
    async setPermissions(){
      const userDetails = await getUserPermissions(this.token);

      this.permissions = userDetails.map(item => item.permissionCode);

      localStorage.setItem('permissions',JSON.stringify(this.permissions));
    }
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
