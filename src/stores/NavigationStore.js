import { defineStore } from "pinia";
// import {getAllInstitutions} from "@/graphQLqueries/trainingQueries";

export const useNavigationStore = defineStore("navigation", {
  state: () => {
    return {
      drawerOpen: false,
      activeLink: '',
    };
  },
  actions: {
    setActiveLink(active){
      console.log(active);
      this.activeLink = active
    }
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});
