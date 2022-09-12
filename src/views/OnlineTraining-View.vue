<template>
  <div>
    <TraingNav />
    <div class="deep">
      <v-container class="video-container px-10" fluid>
        <v-row class="mt-10">
          <v-col col="12" lg="8">
            <div class="deep p-10 text-center">
              <img
                src="@/assets/images/muezza 1.png"
                class="object-contain mx-auto w-100 large-image"
                alt=""
                srcset=""
              />
            </div>
          </v-col>
          <v-col cols="12" class="text-center" lg="4">
            <v-container fluid>
              <v-row>
                <v-col :key="n" v-for="n in 8" cols="2" lg="6">
                  <AttendantsCard />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <div class="d-flex justify-space-between py-7 px-10">
          <div>
            <h4 class="white--text">IT TRAINING</h4>
          </div>
          <div>
            <div
              class="mx-2 d-inline-block rounded-circle yellow p-3 dark white--text"
            >
              <v-icon color="white">mdi-microphone</v-icon>
            </div>
            <div
              class="mx-2 d-inline-block rounded-circle yellow p-3 dark white--text"
            >
              <v-icon color="white">mdi-video</v-icon>
            </div>
            <div
              class="mx-2 d-inline-block rounded-circle p-3 dark white--text"
            >
              <v-icon color="white">mdi-closed-caption</v-icon>
            </div>
            <div
              class="mx-2 d-inline-block rounded-circle p-3 dark white--text"
            >
              <v-icon color="white"> mdi-hand-back-left </v-icon>
            </div>
            <div
              class="mx-2 d-inline-block rounded-circle p-3 dark white--text"
            >
              <v-icon color="white"> mdi-dots-vertical </v-icon>
            </div>
            <div
              class="mx-2 d-inline-block rounded-pill p-3 danger white--text"
            >
              <v-icon color="white"> mdi-phone-hangup </v-icon>
            </div>
          </div>
          <div class="d-flex align-center">
            <v-icon color="white" class="mx-2" x-large>
              mdi-information-outline
            </v-icon>
            <v-icon color="white" class="mx-2" x-large>
              mdi-account-group-outline
            </v-icon>
            <v-icon color="white" class="mx-2" x-large>
              mdi-message-outline
            </v-icon>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import TraingNav from "@/components/global_components/TrainingNav.vue";
import AttendantsCard from "@/components/Microcomponents/AttendantsCard.vue";

export default {
  components: {
    TraingNav,
    AttendantsCard,
  },
};
</script>

<style scoped>
.video-container{
  max-width: 1300px;
}
.large-image {
  max-height: 750px;
}
</style>
