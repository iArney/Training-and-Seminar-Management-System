<template>
  <v-container class="bg-golden pt-16" fluid>
    <v-row>
      <v-col lg="6" md="8" class="order-sm-last order-xs-last" cols="12">
        <h1 class="deep--text fw-bolder text-center">How do I use TSMS?</h1>
        <v-container>
          <v-row>
            <v-col
              sm="6"
              cols="12"
              class="mx-auto"
              v-for="(instruction, index) in store.instructions"
              :key="index + 1"
            >
              <instructionCard
                :number="index + 1"
                :header="instruction.header"
                :image="instruction.img"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col lg="6" md="4">
        <v-img
          class="object-contain img-fluid mx-auto"
          max-width="631"
          src="@/assets/images/question.webp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import InstructionCard from "@/components/Microcomponents/InstructionCard.vue";
import { useInstructionsStore } from "@/stores/usageInstructions";

const store = useInstructionsStore();
</script>

<style>
.bg-golden {
  background-color: #f5f1a4;
  opacity: 0.9;
}
</style>
