import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            dark: "#2D2D2D",
            deep: "#004B6E",
            light: "#F5F9FF",
            link: "#2E36FF",
            lightGrey: "#FCFBFB",
            primary: "#D5E6FB",
            warning: "#FFFEEE", 
            warningLight: "#FFFEEE", 
            white: "#FFFFFF",
            orange: "FFB526" 
          },
        },
      },
});
