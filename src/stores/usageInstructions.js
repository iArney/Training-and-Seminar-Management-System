import { defineStore } from "pinia";
/**
 * This pinia state store stores the details of 
 * TSMS modules
 */
/**
 * define the counter store
 * @args store name
 * @args object with state, getter, actions properties
 * Options are defined similarly to the options api
 */
export const useInstructionsStore = defineStore("instructions", {
  state: () => {
    return {
      instructions: [
        {
          header: 'Type https://tsms.ega.go.tz',
          img: require("@/assets/images/type.webp"),
        },
        {
          header: "Log in or register if you don’t have an account",
          img: require("@/assets/images/login.webp"),
        },
        {
          header: "Select training schedule",
          img: require("@/assets/images/select.webp"),
        },
        {
          header: "Subscribe by applying the scheduled session",
          img: require("@/assets/images/select-2.webp"),
        },
        {
          header: "Attend training as scheduled",
          img: require("@/assets/images/userCheck.webp"),
          
        },
      ],
    };
  },
});
