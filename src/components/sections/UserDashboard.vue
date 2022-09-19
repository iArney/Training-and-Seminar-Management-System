<template>
  <v-main class="light">
    <v-container class="mt-7">
      <v-row class="card-container" no-gutters>
        <v-col cols="12" sm="6">
          <ActivityCard
            @changeTab="setActiveTab($event)"
            :icon="require('@/assets/images/online-course-1.webp')"
            activityName="Attended Training"
            :activityNumber="6"
        /></v-col>
        <v-col cols="12" sm="6">
          <ActivityCard
            @changeTab="setActiveTab($event)"
            :icon="require('@/assets/images/online-course-2.webp')"
            activityName="Upcoming Training"
            :activityNumber="10"
          />
        </v-col>
        <!-- <v-col cols="12" sm="6" lg="3">
          <ActivityCard
            @changeTab="setActiveTab($event)"
            :icon="require('@/assets/images/online-course-3.webp')"
            activityName="Venues Registered"
            :activityNumber="2"
          />
        </v-col> -->
        <!-- <v-col cols="12" sm="4">
          <ActivityCard
            @changeTab="setActiveTab($event)"
            :icon="require('@/assets/images/online-course-4.webp')"
            activityName="Training Requests"
            :activityNumber="0"
          />
        </v-col> -->
      </v-row>
    </v-container>
    <v-container class="mt-7" fluid>
      <v-row>
        <v-col cols="12" md="7" lg="8">
          <v-banner color="#FFFEEA">
            <span class="h5 deep--text text-header"
              ><img
                src="@/assets/icons/events-decorators.webp"
                width="37"
                height="37"
                class="object-contain me-2"
                alt=""
              />{{ activeTab }}</span
            >
          </v-banner>
          <AppliedTraining
            v-if="activeTab == 'Applied Training'"
            :data="tableContent"
            @queryPage="queryPage($event)"
          />
          <EventsTable
            v-if="activeTab == 'Created Training'"
            :data="tableContent"
            @queryPage="queryPage($event)"
          />
        </v-col>
        <v-col cols="12" md="5" lg="4">
          <v-banner color="bg-warning-gradient">
            <span class="h5 deep--text text-header"> EVENTS UPDATE </span>
          </v-banner>
          <v-container>
            <v-row>
              <v-col
                :key="index"
                v-for="(item, index) in eventsUpdate"
                cols="12"
                md="12"
              >
                <EventCard
                  :id="item.id"
                  :image="require('@/assets/images/eve.webp')"
                  :cost="item.cost"
                  :name="item.topic"
                />
              </v-col>
            </v-row>
            <div class="deep--text mt-4 text-end" style="max-width: 345px">
              <router-link class="deep--text" to="/events-collection">
                More events
              </router-link>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AppliedTraining from "@/components/Microcomponents/AppliedTrainingTable.vue";
import ActivityCard from "@/components/Microcomponents/ActivityCard.vue";
import EventCard from "@/components/Microcomponents/EventCard.vue";
import EventsTable from "@/components/Microcomponents/EventsTable.vue";
import { newTraining } from "@/graphQLqueries/trainingQueries";
import { mapState, mapStores } from "pinia";
import { useTrainingStore } from "@/stores/trainingStore";
import { useUserStore } from "@/stores/userStore";

export default {
  name: "AdminDashboard",
  data() {
    return {
      createdTraining: [],
      eventsUpdate: [],
      activeTab: "Attended Training",
    };
  },
  components: {
    AppliedTraining,
    ActivityCard,
    EventCard,
    EventsTable,
  },
  computed: {
    ...mapStores(useTrainingStore),
    ...mapState(useUserStore, ["user"]),
    tableContent() {
      if (this.activeTab == "Applied Training") {
        return this.trainingStore.appliedTraining;
      }
      if (this.activeTab == "Training Requests") {
        return this.trainingStore.trainingRequests;
      }
      return this.trainingStore.createdTraining;
    },
  },
  methods: {
    async queryPage(n) {
      this.trainingStore.setCreatedTraining(
        this.user.institutionId.id,
        10,
        10 * (n - 1)
      );
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      if (tab === "Applied Training") {
        this.trainingStore.setAppliedTraining(10, 0);
      }
    },
  },
  async created() {
    // eslint-disable-next-line
    const [newTrainings] = await Promise.all([
      newTraining(),
      this.trainingStore.setCreatedTraining(this.user.institutionId.id, 10, 0),
    ]);
    this.eventsUpdate = newTrainings;
  },
};
</script>

<style scoped>
.card-container{
    max-width: 600px
}
</style>
