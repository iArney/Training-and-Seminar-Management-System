<template>
  <div>
    <v-app-bar flat class="appbr pt-2">
      <v-img
        src="@/assets/images/logo.webp"
        class="logo-img d-inline-block"
        max-width="60"
        max-height="70"
      />
      <h3 class="logo-text d-inline-block deep--text fw-bold">TSMS</h3>
      <v-spacer></v-spacer>
      <span>12:30</span>
      <span class="ms-3">Mon, 21 Feb</span>
      <v-avatar size="45" class="ms-3">
        <img src="@/assets/images/lisa.webp" alt="userprofile" />
      </v-avatar>
    </v-app-bar>
    <v-container class="bg-gradient position-relative pt-10" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="6" sm="8" xs="12" class="pt-16 ps-lg-16">
          <div class="ps-lg-10">
            <h2 class="lh-base">Training Meeting for Everyone</h2>
            <p class="lh-lg text">
              The Training and Seminar Management System (TSMS) has been
              developed to maintain records, provide training information and
              monitor the information of trainers and instructors
            </p>
            <div class="d-flex mt-8">
              <v-btn
                elevation="2"
                large
                color="deep"
                class="zoom white--text text-capitalize py-6 text-right"
                ><v-icon color="white"> mdi-play-network-outline </v-icon>
                New Meeting
              </v-btn>
              <div class="d-inline-block ms-5">
                <!-- <TextInput /> -->
                <v-text-field
                  label="Enter a Code or Link"
                  prepend-inner-icon="mdi-keyboard"
                  outlined
                  color="deep"
                ></v-text-field>
              </div>
            </div>
            <p>Learn more about <span class="">TSMS</span></p>
          </div>
        </v-col>
        <v-col
          class="overflow-hidden d-none d-sm-flex"
          id="right"
          cols="6"
          md="6"
          sm="4"
        >
          <img src="@/assets/images/Group.png" class="hero-image" />
        </v-col>
      </v-row>
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Footer from "@/components/global_components/FooterSection.vue";

export default {
  name: "TrainingPage",
  components: { Footer },
};
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
    100.73deg,
    #d5e6fb 1.11%,
    #fffeea 33.86%,
    #fffba1 68.61%,
    #d5e6fb 97.83%
  ) !important;
  font-family: "Lato", sans-serif;
}
.hero-image {
  width: 100;
}
@media only screen and (max-width: 1144px) {
  .xl-text {
    font-size: 2.6rem !important;
  }
}

@media only screen and (min-width: 1630px) {
  .xl-text {
    font-size: 4.3rem !important;
    line-height: 90px !important;
  }
}
.appbr {
  background: linear-gradient(
    100.73deg,
    #d5e6fb 1.11%,
    #fffeea 33.86%,
    #fffba1 68.61%,
    #d5e6fb 97.83%
  );
}
</style>
