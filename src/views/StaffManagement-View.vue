<template>
  <v-app>
    <v-navigation-drawer app :width="110" color="#F4F5FA">
      <v-img
        src="@/assets/images/official-logo.webp"
        style="margin-top: 12px"
        alt="tsms-logo"
      >
      </v-img>
      <v-icon>
        <font-awesome-icon icon="fa-solid fa-computer" />
      </v-icon>
    </v-navigation-drawer>

    <v-app-bar app> </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row class="mt-14 mx-md-6">
          <v-col cols="12" md="4" lg="3">
            <v-card :height="700" class="align-center pt-12">
              <v-img
                src="@/assets/images/Avatar.png"
                class="mx-auto"
                alt="tsms-logo"
                :width="200"
                :height="200"
              >
              </v-img>
              <div class="mt-5" style="text-align: center">
                <span><strong>Muammar Gadaffi</strong></span>
              </div>
              <v-container>
                <v-row no-gutters>
                  <v-col cols="6">
                    <div class="d-flex">
                    <v-avatar
                      tile
                      color="rgba(38, 132, 255, 0.12)"
                      class="rounded ms-4"
                    >
                      <v-icon color="blue"> mdi-check</v-icon>
                    </v-avatar>
                    <div>
                      <span class="ms-13">10</span> <br>
                    <span class="ms-1">Training Attended</span>
                    </div>
                    </div>      
                  </v-col>
                  <v-col cols="6">
                    <div class="d-flex">
                    <v-avatar
                      tile
                      color="rgba(38, 132, 255, 0.12)"
                      class="rounded ms-4"
                    >
                      <v-icon color="blue"> mdi-star</v-icon>
                    </v-avatar>
                    <div>
                      <span class="ms-13">10</span> <br>
                    <span class="ms-1">Training Attended</span>
                    </div>
                    </div>      
                  </v-col>
                </v-row>
              </v-container>
              <div class="details px-6" style="list-style: none">
                <h3>Details</h3>
                <hr />
                <li><strong>Username:</strong></li>
                <li><strong>E-mail:</strong></li>
                <li><strong>Role:</strong></li>
                <li><strong>ID:</strong></li>
                <li><strong>Contact:</strong></li>
                <li><strong>Location:</strong></li>
                <li><strong>Country:</strong></li>
              </div>
              <div style="text-align: center">
                <v-btn
                  class="btn deep white--text p-4"
                  type="submit"
                  @click="submit"
                >
                  EDIT
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="8" lg="9">
            <v-card class="mb-12">
              <h4 class="pt-10 px-10">Training List Attended</h4>
              <template>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
              </template>
            </v-card>
            <v-card class="mb-12 ps-8">
              <h4 class="pt-10 px-2">User Activity Timeline</h4>
              <div class="py-10">
                <div
                  class="border-start position-relative px-6"
                  style="min-height: 100px"
                >
                  <v-badge
                    bordered
                    overlap
                    color="red"
                    class="position-absolute top-0 start-0 translate-middle"
                  >
                  </v-badge>
                  <span class="d-inline-block" style="max-width: 50%">
                    12 Invoices have been paid <br />
                    <span style="color: rgba(58, 53, 65, 0.68)">
                      Invoices have been paid to the company
                    </span>
                  </span>
                  <span class="float-right">12 min ago</span>
                </div>
                <div
                  class="border-start position-relative px-6"
                  style="min-height: 100px"
                >
                  <v-badge
                    bordered
                    overlap
                    color="blue"
                    class="position-absolute top-0 start-0 translate-middle"
                  >
                  </v-badge>
                  <span class="d-inline-block" style="max-width: 50%">
                    12 Invoices have been paid <br />
                   <span style="color: rgba(58, 53, 65, 0.68)">
                      Invoices have been paid to the company
                    </span>
                  </span>
                  <span class="float-right">12 min ago</span>
                </div>
                <div
                  class="border-start position-relative px-6"
                  style="min-height: 100px"
                >
                  <v-badge
                    bordered
                    overlap
                    color="green"
                    class="position-absolute top-0 start-0 translate-middle"
                  >
                  </v-badge>
                  <span class="d-inline-block" style="max-width: 50%">
                    12 Invoices have been paid <br />
                    <span style="color: rgba(58, 53, 65, 0.68)">
                      Invoices have been paid to the company
                    </span>
                  </span>
                  <span class="float-right">12 min ago</span>
                </div>
              </div>

              <!-- <div class="line"></div>
              <div class="badge">
                <v-badge bordered overlap dot color="blue" class="mt-16">
                </v-badge>
              </div>
              <div class="line-1"></div>
              <div class="badge">
                <v-badge bordered overlap dot color="green" class="mt-16">
                </v-badge>
              </div>
              <div class="line-2"></div> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "staffManagement-View",
  components: { FontAwesomeIcon },
  data: () => ({
    headers: [
      {
        text: "Time (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Trainer", value: "calories" },
      { text: "Session", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
    desserts: [
      {
        name: "Time",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Trainer",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Session",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Status",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Registered Venue",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Pulling",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Institute",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
};
</script>

<style>
main {
  background: #f0f8ff;
  background-attachment: fixed;
  font-family: "Roboto";
}
</style>
