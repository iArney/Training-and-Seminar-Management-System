import { getAllInstitutions } from "@/graphQLqueries/trainingQueries";
import { defineStore } from "pinia";
// import {getAllInstitutions} from "@/graphQLqueries/trainingQueries";


export const useInstituionStore = defineStore("institution", {
  state: () => {
    return { institutions: [] };
  },
  actions: {
    async getInstitutions() {
      const result = await getAllInstitutions();
      this.institutions = result
    },
  },
  // getters: {
  //     doubleCount: state => state.count*2,
  // }
});


