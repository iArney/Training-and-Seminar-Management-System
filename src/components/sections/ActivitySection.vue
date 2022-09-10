<template>
  <v-container class="mt-7">
        <v-row>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-1.webp')"
              activityName="Created Training"
              :activityNumber="6"
          /></v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-2.webp')"
              activityName="Applied Training"
              :activityNumber="10"
            />
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-3.webp')"
              activityName="Venues Registered"
              :activityNumber="2"
            />
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <ActivityCard
              :icon="require('@/assets/images/online-course-4.webp')"
              activityName="Training Requests"
              :activityNumber="0"
            />
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>