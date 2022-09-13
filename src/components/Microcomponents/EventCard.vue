<template>
  <v-card class="event-card mt-5 mx-auto" max-width="344">
    <div
      class="card-header"
      :style="{
        backgroundImage: `url('${image}') !important`,
      }"
    >
      <v-avatar tile color="white" class="float-end ps-2 py-3 mt-2 me-2">
        <caption class="text-center date">
          Feb 22
        </caption>
      </v-avatar>
    </div>

    <v-card-subtitle class="green--text font-weight-bold">
      {{ cost=== 0  ? "Free" : `Tsh ${cost}` }}
    </v-card-subtitle>
    <v-card-actions>
      <v-card-title class="fs-6">
        {{ name }}
      </v-card-title>

      <v-spacer></v-spacer>
      <router-link class="text-decoration-none" :to="`/about-event/${id}`">
        <v-btn color="deep" class="white--text me-2 zoom"> Attend </v-btn>
      </router-link>
    </v-card-actions>
    <!-- <v-card-text class="grey--text caption">{{
              item.state
            }}</v-card-text> -->
  </v-card>
</template>

<script>
import { mapState } from 'pinia';
import { useTrainingStore } from '@/stores/trainingStore';
export default {
  name: "EventCard",
  props: {
    id:String,
    image: String,
    cost: Number,
    name: String,
  },
  computed: {
    ...mapState(useTrainingStore, ['trainingDetails'])
  }
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
  background-size: cover !important;
  background-repeat: no-repeat !important;
  height: 200px;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.event-card{
  height: 370px;

}
</style>
