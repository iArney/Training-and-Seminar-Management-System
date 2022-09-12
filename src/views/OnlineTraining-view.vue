<template>
  <div>
    <TraingNav />
    <div class="deep py-5">
      <v-container class="video-container px-10" fluid>
        <v-row class="mt-10" no-gutters>
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
          <v-col cols="12" class="text-center d-none d-lg-flex" lg="4">
            <v-container fluid>
              <v-row>
                <v-col :key="i" v-for="(item, i) in attendants" cols="2" lg="6">
                  <AttendantsCard :thumbnail="item.image" :name="item.name" />
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
    <Footer class="deep white--text"/>
  </div>
</template>

<script>
import TraingNav from "@/components/global_components/TrainingNav.vue";
import AttendantsCard from "@/components/Microcomponents/AttendantsCard.vue";
import Footer from "@/components/global_components/FooterSection.vue";

export default {
   components: {
    TraingNav,
    AttendantsCard,
    Footer
  },
  data: () => ({
    attendants: [
      {
        image: require('@/assets/images/1 1.png'),
        name: "Brian Nkwera"
      },
      {
        image: require('@/assets/images/2 1.png'),
        name: "Lisa Jocktan",
      },
      {
        image: require('@/assets/images/3 1.png'),
         name: "Frank Maduka",
      },
      {
        image: require('@/assets/images/7 2.png'),
        name: "Maseil Musa",  
      },
      {
        image: require('@/assets/images/4 1 (1).png'),
        name: "Robinson",
      },
      {
        image: require('@/assets/images/5 1.png'),
        name: "Arnold",
      },
      {
        image: require('@/assets/images/6 1.png'),
        name: "Hamala Gaya",
      },
      {
        image: require('@/assets/images/8 1.png'),
        name: "Jackson Ndege",
      }
    ]
  }),
 
};
</script>


<style>

</style>