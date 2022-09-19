<template>
  <div>
    <AppBar />
    <NavigationDrawer />
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card class="py-5 px-3">
          <p>
            You have successfully placed a request for {{ item.topic }} training
            to be held on {{ new Date(item.startDate) }}. You when your request
            is approved.
          </p>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep" text @click="dialog = false"> OK </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
                <span class="white--text font-weight-medium">{{
                  item.topic
                }}</span>
              </v-toolbar>
            </div>
          </v-col>
          <v-col class="white">
            <div class="px-5">
              <h4 class="caption pt-3">{{ new Date(item.startDate) }}</h4>
              <p>
                {{ item.theme }}
              </p>
              <v-btn
                :disabled="loading"
                v-if="permissions.includes('edit_data')"
                @click="applyTraining"
                color="deep white--text"
                class="py-6 mt-5"
                elevation="2"
              >
                <div v-if="loading" class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <span v-else> APPLY</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
        <v-row class="mt-3">
          <div>
            <h3>About this Event</h3>
            <p>{{ item.description }}</p>
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
import { applyTraining } from "@/graphQLqueries/trainingQueries";
import { mapStores, mapState } from "pinia";
import { useTrainingStore } from "@/stores/trainingStore";
import { useUserStore } from "@/stores/userStore";

export default {
  components: { AppBar, NavigationDrawer, Footer },
  name: "AboutEvent",
  computed: {
    ...mapState(useUserStore, ["permissions", "user"]),
    ...mapStores(useTrainingStore),
  },
  data() {
    return {
      item: null,
      loading: false,
      dialog: false,
    };
  },

  async created() {
    if (this.trainingStore.training != null) {
      this.item = this.trainingStore.training;
      return;
    }
    await this.trainingStore.setSingleTraining(this.$route.params.id);
    this.item = this.trainingStore.training;
  },
  methods: {
    async applyTraining() {
      const applicationDetails = {
        training: this.item.id,
        institution: this.user.institutionId.id,
        requestType: 0,
        participants: 40,
      };
      this.loading = true;

      const response = await applyTraining(applicationDetails);
      if(response.id){
         this.dialog = true;
      }
      this.loading = false;
     
      console.log(response);
    },
  },
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
