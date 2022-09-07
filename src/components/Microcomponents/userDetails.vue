<template>
  <div class="d-flex align-center user-wrapper">
    <v-menu
      class="d-inline-block mx-3 zoom"
      transition="slide-y-transition"
      offset-y
      elevation="0"
    >
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        > -->
        <v-container
          v-on="on"
          v-bind="attrs"
          :class="[color, 'my-5 pe-10 rounded-xl']"
        >
          <v-row no-gutters>
            <v-col cols="3">
              <img
                src="@/assets/images/lisa.webp"
                alt="userprofile"
                class="object-cover rounded-circle"
                width="40"
                height="40"
              />
            </v-col>
            <v-col cols="8">
              <div class="px-1">
                <span class="d-block username">Lisa Jocktan</span>
                <span class="d-block email">lisajocktan487@gmail.com</span>
              </div>
            </v-col>
            <v-col cols="1" class="ps-2">
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </v-col>
          </v-row>
        </v-container>
      </template>
      <v-list class="light">
        <a href="/services" class="text-decoration-none">
          <v-list-item>
            <v-list-item-title>
              <font-awesome-icon icon="fa-solid fa-user" class="me-1" />
              Profile
            </v-list-item-title>
          </v-list-item>
        </a>
        <a href="/dashboard" class="text-decoration-none">
          <v-list-item>
            <v-list-item-title>
              <font-awesome-icon
                icon="fa-solid fa-gauge"
                class="me-1"
              />Dashboard
            </v-list-item-title>
          </v-list-item>
        </a>
        <a class="text-decoration-none" @click="logout">
          <v-list-item>
            <v-list-item-title>
              <font-awesome-icon
                icon="fa-solid fa-right-from-bracket"
                class="me-1"
              />
              Logout</v-list-item-title
            >
          </v-list-item>
        </a>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useUserStore } from '@/stores/userStore';
export default {
  computed: {
    ...mapStores(useUserStore)
  },
  props: {
    color: {
      type: String,
      default: "light",
    },
  },
  methods: {
    logout (){
      this.userStore.logout();
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.username {
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 0.84rem !important;
}
.email {
  font-weight: 500 !important;
  font-size: 0.67rem !important;
  line-height: 15px !important;
}
.user-wrapper {
  cursor: pointer;
}
</style>
