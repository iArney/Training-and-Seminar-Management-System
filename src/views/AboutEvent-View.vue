<template>
  <div>
    <AppBar />
    <NavigationDrawer />
    <v-container class="content-wrapper py-16 px-md-16 mt-10" fluid>
      <div class="content pt-8 pb-16 mx-auto">
        <router-link to="/events-collection" class="text-decoration-none">
          <v-btn text>
            <v-icon dense left>mdi-arrow-left</v-icon>
            <span class="text-capitalize">More Events</span>
          </v-btn>
        </router-link>

        <v-row no-gutters class="cardtop">
          <v-col cols="6" class="lefttop">
            <div class="lefttop h-100 w-100 d-flex align-end">
              <v-toolbar class="tool-top" flat>
                <span class="white--text font-weight-medium">{{item.topic}}</span>
              </v-toolbar>
            </div>
          </v-col>
          <v-col class="white">
            <div class="px-5">
              <h4 class="caption pt-3">{{new Date(item.startDate)}}</h4>
              <p>
                {{item.theme}}
              </p>
              <v-btn v-if="permissions.includes('edit_data')" @click="applyTraining" color="deep white--text" class="py-6 mt-5" elevation="2">
              APPLY
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
        <v-row class="mt-3">
          <div>
            <h3>About this Event</h3>
            <p>{{item.description}}</p>
          </div>
        </v-row>
      </div>
    </v-container>
    <Footer class="superLight" />
  </div>
</template>

<script>
import AppBar from "@/components/global_components/AppBar.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import Footer from "@/components/global_components/FooterSection.vue";
import { mapStores, mapState } from "pinia";
import { useTrainingStore} from "@/stores/trainingStore";
import {useUserStore } from "@/stores/userStore";

export default {
  components: { AppBar, NavigationDrawer, Footer },
  name: "AboutEvent",
  computed: {
    ...mapState(useUserStore, ["permissions"]),
    ...mapStores(useTrainingStore),
  },
  data() {
    return {
      item: null,
    };
  },
 
 async created() {
    if(this.trainingStore.training != null){
      this.item = this.trainingStore.training;
      return 
    }
   await this.trainingStore.setSingleTraining(this.$route.params.id);
    this.item = this.trainingStore.training;
  },
  method: {
    async applyTrainig(){
      
    }
  }
};
</script>

<style scoped>
.cardtop {
  height: 365px;
}
.content {
  max-width: 1091px;
}
.content-wrapper {
  color: rgb(0, 0, 0);
  background: #f0f8ff;
  font-family: "Lato", sans-serif;
}
.lefttop {
  background: url("@/assets/images/eve.webp") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: rgba(0, 0, 0, 0.51);
}
h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.tool-top {
  background: rgba(0, 0, 0, 0.2) !important;
}
</style>
>
