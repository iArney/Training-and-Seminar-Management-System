<template>
  <div>
    <!-- <div class="warningLight d-flex justify-end py-5 px-3">
      <input
        v-model="search"
        class="no-outline form-control search-form"
        placeholder="Search User"
      />
      <v-btn color="deep" class="white--text ms-4 no-outline">SEARCH</v-btn>
    </div> -->
    <div v-if="data.length !== 0">
      <v-simple-table class="pb-5 mt-3">
        <template v-slot:default>
          <thead class="primary">
            <tr>
              <th class="text-left deep--text">Date</th>
              <th class="text-left deep--text">Topic</th>
              <th class="text-left deep--text">Delivery</th>
              <th class="text-left deep--text">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="$router.push('/staff-management')"
              v-for="(item, index) in data"
              :key="index"
              class="py-3"
            >
              <td>{{ new Date(item.startDate) }}</td>
              <td>{{ item.topic }}</td>
              <td>
                {{ item.modeOfDelivery === "A_0" ? "Physical" : "Online" }}
              </td>
              <td v-if="item.status === 'A_0'">Upcoming</td>
              <td v-if="item.status === 'A_1'">OnGoing</td>
              <td v-if="item.status === 'A_2'">Cancelled</td>
              <td v-if="item.status === 'A_3'">Postponded</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="white pb-5 text-center">
        <v-btn
          @click="queryPage(n)"
          :key="n"
          v-for="n in 2"
          x-small
          :class="[
            activePage === n && 'active',
            'mx-1 deep white--text no outline',
          ]"
          >{{ n }}</v-btn
        >
      </div>
    </div>
    <div v-else class="white ">
      <h4 class="py-16 text-center">No data is available</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsTable",
  props: {
    data: Array,
  },
  data: () => ({
    show: false,
    activePage: 1,
    search: "",
  }),
  methods: {
    queryPage(n) {
      this.activePage = n;
      this.$emit("queryPage", n);
    },
  },
};
</script>

<style scoped>
.search-form {
  max-width: 350px !important;
}
.active {
  background: #f5f9ff !important;
  color: #004b8e !important;
}
</style>
