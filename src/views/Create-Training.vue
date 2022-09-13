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
            <v-form class="form" ref="form" lazy-validation>
              <v-card elevation="3">
                <v-row class="mx-5 pt-10">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="category"
                      placeholder="Eg. Internet Security"
                      label="Category"
                      required
                    />
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="mode"
                      v-model="delivery"
                      label="Mode of Delivery"
                    />
                  </v-col>
                  <v-col v-if="delivery != 'Online'" cols="12" sm="6">
                    <v-text-field
                      v-model="venue"
                      placeholder="E.g COICT DSM"
                      label="Venue"
                    />
                  </v-col>
                  <v-col cols="" sm="6">
                    <v-text-field
                      v-model="topic"
                      label="Topic"
                      placeholder="E.g Internet security"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="cost"
                      label="Cost"
                      type="number"
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="participantLimit"
                      label="Participant_Limit"
                      type="Number"
                      min="1"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="startDate"
                      type="datetime-local"
                      label="start Date"
                      :min="`${today}T00:00`"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="endDate"
                      type="datetime-local"
                      label="End Date"
                      :min="startDate"
                      required
                    />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="theme"
                      name="input-7-1"
                      label="Theme"
                      placeholder="E.g Internet security awareness for civil servants"
                      hint="What is the training about"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="description"
                      label="Description"
                      hint="Description of the training"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12"
                    ><v-btn
                      :disabled="loading"
                      @click="createTraining"
                      color="#004B8E"
                      elevation="2"
                      class="white--text float-end mx-2 my-2"
                    >
                      <div v-if="loading" class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <span v-else>CREATE</span>
                    </v-btn>
                  </v-col>
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
import { createTraining } from "@/graphQLqueries/trainingQueries";
import AppBar from "@/components/global_components/AppBar.vue";
import FooterSection from "@/components/global_components/FooterSection.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import { useUserStore } from "@/stores/userStore";
import { mapState } from "pinia";

const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .substr(0, 10);

export default {
  name: "ApplicationForm",
  components: { AppBar, FooterSection, NavigationDrawer },
  data: () => ({
    item: ["Computer IT", "Finance", "Leadership", "Politics"],
    mode: ["Online", "Physical"],
    category: "",
    venue: "",
    delivery: "",
    description: "",
    cost: 0,
    participantLimit: 50,
    today: today,
    theme: "",
    startDate: `${today}T00:00:00`,
    endDate: `${today}T00:00:00`,
    startTime: "",
    menu: false,
    menu2: false,
    modal: false,
    topic: "",
    loading: false,
  }),
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    async createTraining() {
      try {
        //validate this form before submit;
        const trainingDetails = {
          instituteId: this.user.institutionId.id,
          category: this.category,
          modeOfDelivery: this.delivery == "Online" ? 1 : 0,
          venue: this.venue,
          topic: this.topic,
          cost: this.cost,
          participantLimit: this.participantLimit,
          theme: this.theme,
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        this.loading == true;
        await createTraining(trainingDetails);
        this.loading = false;
        this.$router.push("/dashboard");
      } catch (error) {
        this.loading = false;
      }
    },
  },
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
