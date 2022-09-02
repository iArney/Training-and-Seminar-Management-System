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
export const useServicesStore = defineStore("services", {
  state: () => {
    return {
      services: [
        {
          header: "TRAINING",
          img: require("@/assets/images/trainingIcon.png"),
          background: "orange",
        },
        {
          header: "SEMINAR",
          img: require("@/assets/images/seminar.webp"),
          background: "pink",
        },
        {
          header: "EXAM",
          img: require("@/assets/images/exam.webp"),
          background: "blue",
        },
        {
          header: "SELF-ASSESSMENT",
          img: require("@/assets/images/certification.webp"),
          background: "success",
        },
        {
          header: "CERTIFICATION",
          img: require("@/assets/images/self-assessment.webp"),
          background: "danger",
        },
        {
          header: "CLIENT MANAGEMENT",
          img: require("@/assets/images/userCheck.webp"),
          background: "warning",
        },
      ],
    };
  },
});
