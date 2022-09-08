import { defineStore } from "pinia";
// import {getAllInstitutions} from "@/graphQLqueries/trainingQueries";

export const useNavigationStore = defineStore("navigation", {
  state: () => {
    return {
      drawerOpen: false,
    };
  },
  actions: {
    // toggleDrawer(){
    //     return 
    // }
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
