<template>
  <v-container>
    <div class="rounded-lg instruction-card lightGrey py-5 position-relative">
      <div
        class="marker position-absolute top-0 start-0 translate-middle deep rounded-circle"
      >
        <span class="white--text">{{ number }}</span>
      </div>
      <v-container>
        <v-row>
          <v-col cols="8" class="ps-4">
            <h6 class="fw-bold">{{header}}</h6>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="image"
              max-height="68"
              max-width="68"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    image: String,
    header: String,
    number: Number,
  },
};
</script>

<style scoped>
.marker {
  text-align: center;
  width: 50px;
  height: 50px;
}
.marker span {
  position: relative;
  top: 12.5px;
  font-size: 25px;
  line-height: 25px;
}
.instruction-card{
  height: 130px;
}
</style>
