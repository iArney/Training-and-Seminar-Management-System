<template>
  <div>
    <div class="warningLight d-flex justify-end py-5 px-3">
      <input
        v-model="search"
        class="no-outline form-control"
        placeholder="Search User"
      />
      <v-btn color="deep" class="white--text ms-4 no-outline">SEARCH</v-btn>
    </div>
    <v-simple-table class="pt-5 px-2 mt-3">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Email</th>
            <th class="text-left">Name</th>
            <th class="text-left">Role</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="$router.push('/staff-management')"
            v-for="(item, index) in values"
            :key="index"
            class="py-3"
          >
            <td>{{ item.email }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.role }}</td>
            <td>
              <v-btn color="white" elevation="0">
                <v-icon dark>mdi-dots-vertical</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>

  <!-- <div>
   
    <div>
      <v-data-table
        :headers="headers"
        :items="values"
        item-key="name"
        :search="search"
        show-select
        class="elevation-1"
      >
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn
            :loading="item.loading"
            elevation="0"
            icon
            v-on:click="tblchallenges_edit(item)"
          >
            <v-icon dark>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "EventsTable",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    show: false,
    search: "",
    headers: [
      {
        text: "Email",
        align: "start",
        sortable: true,
        value: "email",
      },
      { text: "Name", value: "name" },
      { text: "Role", value: "role" },
      { text: "", value: "edit" },
    ],
    values: [
      {
        email: "briansimon487@yahoo.com",
        name: "Brian Nkwera",
        role: "user",
      },
      {
        email: "lisajocktan@gmail.com",
        name: "Mafunzo ya mapokezi",
        role: "user",
      },
      {
        email: "iarnoldngoi@gmail.com",
        name: "Arnold Ngoi",
        role: "user",
      },
      {
        email: "maseilmusa@gmail.com",
        name: "Maseil Musa",
        role: "user",
      },
      {
        email: "madukapcm@gmail.com",
        name: "Frank Maduka",
        role: "user",
      },
      {
        email: "robinson01@gmail.com",
        name: "Robinson Emanuel",
        role: "user",
      },
    ],
  }),

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
input {
  max-width: 300px !important;
}
tr:hover {
  cursor: pointer;
}
</style>
