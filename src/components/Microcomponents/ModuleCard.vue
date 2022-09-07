<template>
  <div>
    <template>
      <v-card class="pt-5 mx-auto rounded-lg module-card" max-width="389">
        <v-img
          class="white--text object cover mx-auto mt-10"
          height="129px"
          width="175px"
          :src="image"
        >
        </v-img>

        <v-card-text class="text--primary">
          <h4 class="fw-bold mb-3 card-header">{{header}}</h4>
          <p class="fs-6 card-text lh-base">{{description}}</p>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "ModuleCard",
  props: {
    header: String,
    description: String,
    image: String,
  }
};
</script>

<style scoped>
.card-text {
  font-size: 0.875rem;
  line-height: 1.79;
}
.card-header {
  font-family: "Nunito" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
}
.module-card{
  height: 400px;
}
</style>
