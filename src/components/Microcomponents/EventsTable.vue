<template>
  <div>
    <template>
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        show-select
        class="elevation-1"
      >
        <template v-slot:top>
          <v-switch
            label="Single select"
            class="pa-3"
          ></v-switch>
        </template>
      </v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "EventsTable",
  data: () => ({
    show: false,
    headers: [
      {
        text: "Date",
        align: "start",
        sortable: true,
        value: "date",
      },
      { text: "Session", value: "session" },
      { text: "Trainer", value: "trainer" },
      { text: "Status", value: "status" },
    ],
    desserts: [
      {
        date: "22 Feb 2022",
        session: "IT training",
        trainer: "Brian Nkwera",
        status: "Completed",
      },
      {
        date: "22 May 2022",
        session: "Mafunzo ya mapokezi",
        trainer: "Arnold Nkwera",
        status: "Completed",
      },
      {
        date: "22 July 2022",
        session: "E-mrejesho",
        trainer: "Lisa Jocktan",
        status: "Postponded",
      },
      {
        date: "22 September 2022",
        session: "GMS short course",
        trainer: "Maseil Musa",
        status: "Upcoming",
      },
      {
        date: "25 September 2022",
        session: "Mafunzo ya ukarani",
        trainer: "Robinson Emmanuel",
        status: "Upcoming",
      },
      {
        date: "27 September 2022",
        session: "Data entry seminar",
        trainer: "Maduka PCM",
        status: "Upcoming",
      },
      {
        date: "02 October 2022",
        session: "Data entry seminar",
        trainer: "Jackson Bakari",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
      {
        date: "22 September 2022",
        session: "Data entry seminar",
        trainer: "Dr. Jaha Mvula",
        status: "Upcoming",
      },
    ],
  }),
  methods: {
    pop() {
      console.log("clicked");
    },
  },
};
</script>

<style></style>
