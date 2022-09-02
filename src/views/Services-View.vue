<template>
  <v-container class="primary py-16" fluid>
    <v-row class="mx-auto mb-16">
      <v-col md="4" sm="6" cols="12" class="my-5" v-for="n in 6" :key="n">
        <ServiceCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ServiceCard from "@/components/Microcomponents/ServiceCard.vue";

export default {
    components:{
        ServiceCard,
    }
}
</script>

<style>
  
</style>