<template>
  <v-container class="bg-golden pt-16" fluid>
    <v-row>
      <v-col lg="6">
        <h1 class="deep--text fw-bolder text-center">How do I use TSMS?</h1>
        <v-container>
          <v-row>
            <v-col sm="6" cols="12" class="mx-auto" v-for="n in 5" :key="n">
              <instructionCard :number="n"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col lg="6">
        <v-img
          class="object-contain img-fluid"
          max-width="631"
          src="@/assets/images/question.webp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InstructionCard from "@/components/InstructionCard";

export default {
  components: {
    InstructionCard,
  },
};
</script>

<style>
.bg-golden {
  background-color: #f5f1a4;
  opacity: 0.9;
}
</style>
