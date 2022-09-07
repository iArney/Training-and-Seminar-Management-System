import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        danger: "#C24600",
        dark: "#2D2D2D",
        deep: "#004B8E",
        light: "#F5F9FF",
        link: "#2E36FF",
        lightGrey: "#FCFBFB",
        pink: "#FFA8A7",
        primary: "#D5E6FB",
        orange: "FFB526",
        superLight: "#f0f8ff",
        warning: "#FFFCB6",
        warningLight: "#FFFEEE",
        white: "#FFFFFF",
      },
    },
  },
});
