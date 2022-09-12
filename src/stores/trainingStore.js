import { defineStore } from "pinia";
import { allTraining, appliedTraining, getCreatedTraining, getSingleTraining } from "@/graphQLqueries/trainingQueries";
// import { getUser, getUserPermissions } from "@/graphQLqueries/userQueries";

export const useTrainingStore = defineStore("training", {
  state: () => {
    return {
      appliedTraining: [],
      createdTraining: [],
      trainingRequests: [],
      allTraining: [],
      training: null,
    };
  },
  actions: {
    async setCreatedTraining(id, limit, skip) {
      if (this.appliedTraining.length === 0) {
        this.createdTraining = await getCreatedTraining(id,limit, skip);
      }
    },
    async setAppliedTraining(limit, skip) {
      if (this.appliedTraining.length === 0) {
        this.appliedTraining = await appliedTraining();
        console.log(this.appliedTraining, limit, skip);
      }
    },
    async setAllTraining(limit, skip) {
      if (this.allTraining.length === 0) {
        this.allTraining = await allTraining(limit, skip);
      }
    },
    async setSingleTraining(id) {
        this.training = await getSingleTraining(id);
        console.log(this.training);
    },
  },
  getters: {
    getSpecificTraining(state) {
      // console.log(state)
      return (id) => state.allTraining.filter(item => item.id === id);
      //   if (state.createdTraining.length === 0) {
      //     return "hello";
      //   }
      //   return this.appliedTraining;
    },
  },
});
