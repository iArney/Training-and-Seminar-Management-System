<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main class="mt-16 light">
      <v-container fluid class="mt-10 mx-5">
        <div class="parent mx-auto">
          <div class="individual">
            <v-card color="#004B8E">
              <div class="mx-8 py-2">
                <h2 class="white--text font-weight-medium">CREATE TRAINING</h2>
              </div>
            </v-card>
          </div>
          <div>
            <v-form class="form">
              <v-card elevation="3">
                <v-row class="mx-5 pt-10">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select :items="item" label="Category"></v-select>
                  </v-col>
                  <v-col cols="" sm="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Venue"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select :items="mode" label="Mode of Delivery"></v-select>
                  </v-col>

                  <v-col cols="" sm="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-textarea
                      name="input-7-1"
                      label="Description"
                      hint="Brief explaination"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="" sm="6">
                    <v-textarea
                      name="input-7-1"
                      label="Topic"
                      hint="Brief explaination"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Cost" single-line></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Participant_Limit"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu2 = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-col cols="12"
                    ><v-btn
                      color="#004B8E"
                      elevation="2"
                      class="white--text float-end mx-2 my-2"
                      >CREATE</v-btn
                    ></v-col
                  >
                </v-row>
              </v-card>
            </v-form>
          </div>
        </div>
      </v-container>
    </v-main>

    <FooterSection class="light" />
  </v-app>
</template>

<script>
import AppBar from "@/components/global_components/AppBar.vue";
import FooterSection from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
export default {
  name: "ApplicationForm",
  components: { AppBar, FooterSection, NavigationDrawer },
  data: () => ({
    item: ["Computer IT", "Finance", "Leadership", "Politics"],
    mode: ["Free", "Paid"],
    category: '',
    venue: '',
    modeOfDelivery: '',
    description: '',
    cost: 0,
    participantLimit: 0,
    startDate: '',
    endDate: '',
    topic: '',
    menu: false,
    menu2: false,
    modal: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    createTraining(){

    }
  }
};
</script>

<style scoped>
.form {
  background-color: white;
}
p {
  color: #fffdca;
}
.parent {
  position: relative;
  max-width: 1000px;
}
.individual {
  width: 95%;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 10;
}
</style>
