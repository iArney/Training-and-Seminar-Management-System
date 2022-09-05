<template>
  <div>
    <NavBar />
    <div>
      <v-container
        class="services-container primary py-16 position-relative overflow-hidden"
        fluid
      >
        <CirclesDecoration class="top-0 start-100 translate-middle" />
        <v-row class="mx-auto mb-16 pb-16">
          <v-col
            md="4"
            sm="6"
            cols="12"
            class="my-5"
            v-for="(service, index) in store.services"
            :key="index"
          >
            <div>
              <ServiceCard
                :image="service.img"
                :header="service.header"
                :background="service.background"
                :linkTo="service.link"
              />
            </div>
          </v-col>
        </v-row>
        <CirclesDecoration class="bottom-0 start-0" />
      </v-container>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/global_components/NavBar.vue";
import ServiceCard from "@/components/Microcomponents/ServiceCard.vue";
import CirclesDecoration from "@/components/decorations/CirclesDecoration";
import { useServicesStore } from "@/stores/servicesStore";

const store = useServicesStore();
</script>

<style scoped>
.services-container {
  min-height: 100vh;
}
.outercircle {
  width: 226px;
  height: 232.73px;
  background: rgba(255, 255, 255, 0.2);
  /* border: 45px solid rgba(255, 255, 255, 0.2); */
}
.innercircle {
  width: 50%;
  height: 50%;
  background: rgba(255, 255, 255, 0.4);
  /* border: 50px solid rgba(255, 255, 255, 0.4); */
}
</style>
