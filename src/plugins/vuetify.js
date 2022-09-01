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
            primary: "#D5E6FB", // #E53935
            warning: "#FFFEEE", // #FFCDD2
            white: "#FFFFFF", // #3F51B5
          },
        },
      },
});
