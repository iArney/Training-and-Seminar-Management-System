<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />
    <v-main class="light">
      <v-container fluid>
        <v-row class="mt-14 mx-md-6">
          <v-col cols="12" md="5" class="pb-12 " lg="4">
            <v-card height="750" max-width="450" class="align-center py-12 mx-auto">
              <v-img
                src="@/assets/images/cute-girl.jpg"
                class="mx-auto object-contain"
                alt="tsms-logo"
                :width="190"
                :height="190"
              >
              </v-img>
              <div class="mt-5" style="text-align: center">
                <span><strong>Lisa Jocktan</strong></span>
              </div>
              <v-container>
                <v-row no-gutters>
                  <v-col cols="6">
                    <div class="d-flex flex-row">
                      <v-avatar
                        tile
                        color="rgba(38, 132, 255, 0.12)"
                        class="rounded"
                        size="47"
                      >
                        <v-icon color="blue"> mdi-check </v-icon>
                      </v-avatar>
                      <span class="ms-2 h5">10  Training attended</span>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="d-flex flex-row">
                      <v-avatar
                        tile
                        color="rgba(38, 132, 255, 0.12)"
                        class="rounded"
                        size="47"
                      >
                        <v-icon color="blue"> mdi-star</v-icon>
                      </v-avatar>
                      <span class="ms-2 h5">0 Training Requested</span>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <div class="details px-6 mt-2" style="list-style: none">
                <h5>Details</h5>
                <hr />
                <li class="mb-3"><strong>Username: </strong>Lisa Jocktan</li>
                <li class="mb-3"><strong>E-mail: </strong>lisajocktan@gmail.com</li>
                <li class="mb-3"><strong>Role: </strong>Trainer</li>
                <li class="mb-3"><strong>ID: </strong>2022-04-00098</li>
                <li class="mb-3"><strong>Contact: </strong> 0752186174</li>
                <li class="mb-3"><strong>Location: </strong>Dodoma</li>
                <li class="mb-3"><strong>Country: </strong>Tanzanina</li>
              </div>
              <div style="text-align: center">
                <v-btn
                  class="btn deep white--text mt-3"
                  type="submit"
                  @click="submit"
                >
                  EDIT
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="7" lg="8">
            <v-card class="mb-12">
              <h4 class="pt-10 px-10">Training List Attended</h4>
              <EventsTable />
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
    <FooterSection class="light" />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import AppBar from "@/components/global_components/AppBar.vue";
import FooterSection from "@/components/global_components/FooterSection.vue";
import EventsTable from "@/components/Microcomponents/EventsTable.vue";

export default {
  name: "staffManagement-View",
  components: { NavigationDrawer, AppBar, FooterSection, EventsTable },
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

<style></style>
