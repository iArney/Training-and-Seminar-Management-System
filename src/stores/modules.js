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
export const useModulesStore = defineStore("modules", {
  state: () => {
    return {
      modules: [
        {
          header: "Training and Seminars",
          img: require("@/assets/images/mobile-app-development-1.webp"),
          description:
            "This module allow registration of all types of Schedules (Training/Seminar/Workshop), list all schedule including active and inactive schedule.",
        },
        {
          header: "Institutions",
          img: require("@/assets/images/web-development-1.webp"),
          description:
            "This module provides a platform for keeping information about institution. It facilitates maintenance (adding or editing) of institution information",
        },
        {
          header: "Venue",
          img: require("@/assets/images/Web-Designing-1.webp"),
          description:
            "This module provide a platform by with venue where a specific Schedule is going to be held for users’ information",
        },
        {
          header: "Reports",
          img: require("@/assets/images/mobile-app-development-1.webp"),
          description:
            "This module provides a platform for preparation and generation of various training reports, payment reconciliation, general overview reports and attendance reports",
        },
        {
          header: "User Management",
          img: require("@/assets/images/web-development-1.webp"),
          description:
            "This module provides a platform for keeping information about institution. It facilitates maintenance (adding or editing) of institution information",
        },
        {
          header: "Venue",
          img: require("@/assets/images/Web-Designing-1.webp"),
          description:
            "This module provide a platform by with venue where a specific Schedule is going to be held for users’ information        ",
        },
      ],
    };
  },
});
