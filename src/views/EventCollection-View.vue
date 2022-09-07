<template>
  <v-container class="content" fluid>
    <v-toolbar dense flat>
      <v-btn text>
        <v-icon dense left>mdi-arrow-left</v-icon>
        <span class="font-weight-bold text-capitalize">Event Collection</span>
      </v-btn>
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
          lg="4"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card class="mx-auto mt-5" max-width="344">
            <div class="card-header">
              <v-avatar
                tile
                color="white"
                class="float-end ps-2 py-3 mt-2 me-2"
              >
                <caption class="text-center date">
                  Feb 22
                </caption>
              </v-avatar>
            </div>

            <v-card-subtitle class="green--text font-weight-bold">
              {{ item.mode }}
            </v-card-subtitle>
            <v-card-actions>
              <v-card-title class="fs-6">
                {{ item.name }}
              </v-card-title>

              <v-spacer></v-spacer>
              <v-btn color="deep" class="white--text me-2"> Attend </v-btn>
            </v-card-actions>
            <!-- <v-card-text class="grey--text caption">{{
              item.state
            }}</v-card-text> -->
          </v-card>
        </v-col></v-row
      >
    </div>
    <div class="text-center mt-5">
      <v-pagination v-model="page" :length="6" color="deep"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "EventCollection",
  data() {
    return {
      page: 1,
      items: [
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
        {
          image: require("@/assets/images/eve.webp"),
          mode: "Free",
          name: "IT Training",
          state: "Scheduled",
        },
      ],
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
