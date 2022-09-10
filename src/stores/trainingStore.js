import { defineStore } from "pinia";
import { allTraining, appliedTraining } from "@/graphQLqueries/trainingQueries";
// import { getUser, getUserPermissions } from "@/graphQLqueries/userQueries";

export const useTrainingStore = defineStore("training", {
  state: () => {
    return {
      appliedTraining: [],
      createdTraining: [],
      trainingRequests: [],
    };
  },
  actions: {
    async setCreatedTraining(limit, skip) {
      if (this.appliedTraining.length === 0) {
        this.createdTraining = await allTraining(limit, skip);
      }
    },
    async setAppliedTraining(limit, skip) {
      if (this.appliedTraining.length === 0) {
        this.appliedTraining = await appliedTraining();
        console.log(this.appliedTraining, limit, skip);
      }
    },
  },
  getters: {
    getCreatedTraining: (state) => {
      if (state.createdTraining.length === 0) {
        return "hello";
      }
      return this.appliedTraining;
    },
  },
});
