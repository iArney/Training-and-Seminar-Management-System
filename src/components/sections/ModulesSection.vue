<template>
  <div id="modules" class="text-center py-16 position-relative">
    <v-container class="position-relative mx-auto">
      <BubbleDecoration
        class="d-none d-sm-block position-absolute top-0 start-0"
        :size="48"
      />
    </v-container>
    <h1 class="mt-16 fw-bold border-deep pisition-relative">TSMS Modules</h1>
    <v-container fluid class="modules-container">
      <v-row class="text-center" no-gutters>
        <v-col
          v-for="(module, index) in modules.modules"
          :key="index"
          md="4"
          sm="6"
          cols="12"
          class="my-5 px-3"
        >
          <ModuleCard
            :description="module.description"
            :header="module.header"
            :image="module.img"
          />
        </v-col>
      </v-row>
    </v-container>
    <div class="ms-5 ps-5">
      <StarDecoration class="float-start" />
      <!-- <font-awesome-icon
        class="deep--text float-start position-absolute"
        icon="fa-solid fa-star"
        size="2xl"
      /> -->
    </div>
  </div>
</template>

<script setup>
import ModuleCard from "@/components/Microcomponents/ModuleCard";
import BubbleDecoration from "@/components/decorations/BubbleDecoration";
import StarDecoration from "@/components/decorations/StarDecoration";
import { useModulesStore } from "@/stores/modules";

const modules = useModulesStore();

</script>

<style scoped>
.modules-container{
 max-width: 1300px;
}
#modules {
  background: url(@/assets/images/flag-tanzania.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Lato", sans-serif;
 
}

h1:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0 auto; /* This will center the border. */
  width: 70px; /* Change this to whatever width you want. */
  padding-top: 20px; /* This creates some space between the element and the border. */
  border-bottom: 5px solid #004b8e; /* This creates the border. Replace black with whatever color you want. */
}

.fa-star {
  left: 100px;
}
</style>
