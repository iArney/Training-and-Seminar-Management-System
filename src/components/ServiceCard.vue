<template>
  <v-container>
    <v-card
      height="178"
      width="388"
      class="rounded-lg lightGrey pt-5 pb-8 px-4 position-relative mx-auto"
    >
      <div
        class="marker position-absolute top-0 start-25 translate-middle orange text-center"
      >
        <v-img
          src="@/assets/images/trainingIcon.png"
          class="object-contain mx-auto"
          max-width="85"
          height="85"
        />
      </div>

      <h4 class="fw-bold deep--text text-center pt-13">SEMINARS</h4>
      <hr />
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.marker {
  width: 100px;
  height: 99px;
}
.start-25 {
  left: 24% !important;
}
</style>
