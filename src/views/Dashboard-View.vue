<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main class="light">
      <v-container class="mt-7">
        <v-row>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-1.webp')"
              activityName="Created Training"
              :activityNumber="6"
          /></v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-2.webp')"
              activityName="Applied Training"
              :activityNumber="10"
            />
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-3.webp')"
              activityName="Venues Registered"
              :activityNumber="2"
            />
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-4.webp')"
              activityName="Training Requests"
              :activityNumber="0"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-7" fluid>
        <v-row>
          <v-col cols="12" md="8">
            <v-banner color="#FFFEEA">
              <span class="h5 deep--text text-header"
                ><img
                  src="@/assets/icons/events-decorators.webp"
                  width="37"
                  height="37"
                  class="object-contain me-2"
                  alt=""
                />CREATED TRAINING</span
              >
            </v-banner>
            <EventsTable />
          </v-col>
          <v-col cols="12" md="4">
            <v-banner color="bg-warning-gradient">
              <span class="h5 deep--text text-header"> EVENTS UPDATE </span>
            </v-banner>
            <v-container>
              <v-row>
                <v-col cols="6" md="12">
                  <EventCard
                    :image="require('@/assets/images/eve.webp')"
                    mode="Free"
                    name="IT training"
                  />
                </v-col>
                <v-col cols="6" md="12">
                  <EventCard
                    :image="require('@/assets/images/eve.webp')"
                    mode="Tsh 50,000"
                    name="Business audit"
                  />
                </v-col>
              </v-row>
              <div class="deep--text mt-4 text-end" style="max-width: 345px">
                <router-link class="deep--text" to="/events-collection"> More events </router-link>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer class="light" />
  </v-app>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppBar from "@/components/global_components/AppBar.vue";
import ActivityCard from "@/components/Microcomponents/ActivityCard.vue";
import EventCard from "@/components/Microcomponents/EventCard.vue";
import Footer from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import EventsTable from "@/components/Microcomponents/EventsTable.vue";
// import SideBanners from "@/components/SideBanners.vue";

export default {
  name: "Dashboard-View",
  components: {
    // FontAwesomeIcon,
    ActivityCard,
    AppBar,
    EventCard,
    Footer,
    NavigationDrawer,
    EventsTable,
    // SideBanners,
  },
};
</script>
<style scoped>
.text-header {
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
}
.bg-warning-gradient {
  background: linear-gradient(180deg, #fffba1 0%, #ffffff 100%);
}
</style>
