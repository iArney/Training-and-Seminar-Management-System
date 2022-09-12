<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main class="light">
      <v-container class="mt-5">
        <v-toolbar dense flat>
          <router-link to="/dashboard" class="text-decoration-none">
            <v-btn text>
              <v-icon dense left>mdi-arrow-left</v-icon>
              <span class="font-weight-bold text-capitalize">Dashboard</span>
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>
          <v-btn color="deep" class="white--text" elevation="2">
            <v-icon dense left>mdi-filter-variant</v-icon>
            <span class="text-capitalize">filter</span>
          </v-btn></v-toolbar
        >
        <div class="mt-5">
          <v-row
            ><v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="item in trainingStore.allTraining"
              :key="item.id"
            >
              <EventCard
                :id="item.id"
                :image="require('@/assets/images/eve.webp')"
                :name="item.topic"
                :cost="item.cost"
              />
            </v-col>
          </v-row>
        </div>
        <div class="text-center mt-5">
          <v-pagination v-model="page" :length="6" color="deep"></v-pagination>
        </div>
      </v-container>
    </v-main>

    <Footer class="light" />
  </v-app>
</template>

<script>
import AppBar from "@/components/global_components/AppBar.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import Footer from "@/components/global_components/FooterSection.vue";
import EventCard from "@/components/Microcomponents/EventCard.vue";
import { mapStores } from "pinia";
import { useTrainingStore } from "@/stores/trainingStore";
export default {
  components: { AppBar, NavigationDrawer, Footer, EventCard },
  name: "EventCollection",
  computed: {
    ...mapStores(useTrainingStore),
  },
  async created() {
    await this.trainingStore.setAllTraining(12, 0);
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.content {
  background: #f0f8ff;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Poppins";
}

.card-header {
  background: url("@/assets/images/eve.webp") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  height: 200px;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
</style>
>
