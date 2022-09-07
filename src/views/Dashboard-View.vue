<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

import SideBanners from "@/components/SideBanners.vue";

export default {
  name: "Dashboard-View",
  components: { FontAwesomeIcon, NavigationDrawer, SideBanners },

  data: () => ({
    //
    show: false,
    headers: [
      {
        text: "Time (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Trainer", value: "calories" },
      { text: "Session", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
    desserts: [
      {
        name: "Time",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Trainer",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Session",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Status",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Registered Venue",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Pulling",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Institute",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
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

<template>
  <!-- App.vue -->

  <v-app>
    <NavigationDrawer />

    <v-app-bar app>
      <div class="top-nav">
        <div class="nav">
          <!-- <RouterLink class = "text-lg-h6 txt" to="/">Home</RouterLink>
                                        <RouterLink class = "text-lg-h6 txt ab" to="/about">About</RouterLink> -->

          <!-- user profile -->
          <v-banner color="#D5E6FB">
            <span class="txt-header user">
              iArnold Raphael <br />
              <span class="user-address">iarnoldraphael@gmail.com</span>
            </span>
          </v-banner>
        </div>

        <!-- new notification {an event handler is required to switch notification status to read} -->
        <div class="notification-container" @click="pop">
          <v-badge bordered overlap dot color="red">
            <font-awesome-icon icon="fa-bell" class="notification-icon" />
          </v-badge>
        </div>

        <!-- </notifcation ends> -->
        <div class="user-profile">
          <v-avatar size="45">
            <img src="@/assets/images/logo.webp" alt="userprofile" />
          </v-avatar>
          <v-badge
            bordered
            bottom
            color="green"
            dot
            offset-x="90"
            offset-y="-10"
          ></v-badge>
        </div>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="background: #f6f6f6">
      <div class="card-col">
        <v-card elevation="2">
          <img src="@/assets/images/online-course-1.webp" alt="eee" />
          <span class="card-col"> Trainings </span>
          <span class="sub-head"><p>&#40;scheduled&#41;</p></span>
          <v-avatar color="#FFFEEA" size="60">
            <span class="counter">6</span>
          </v-avatar>
        </v-card>
        <v-card elevation="2">
          <img src="@/assets/images/online-course-2.webp" alt="" />
          <span class="card-col"> Seminar </span>
          <span class="sub-head"><p>&#40;scheduled&#41;</p></span>
          <v-avatar color="#FFFEEA" size="60"
            ><span class="counter">5</span></v-avatar
          >
        </v-card>
        <v-card elevation="2">
          <img src="@/assets/images/online-course-3.webp" alt="" />
          <span class="card-col"> Exams </span>
          <span class="sub-head"><p>&#40;scheduled&#41;</p></span>
          <v-avatar color="#FFFEEA" size="60"
            ><span class="counter">2</span></v-avatar
          >
        </v-card>
        <v-card elevation="2">
          <img src="@/assets/images/online-course-4.webp" alt="" />
          <span class="card-col"> Certificates </span>
          <span class="sub-head"><p>&#40;scheduled&#41;</p></span>
          <v-avatar color="#FFFEEA" size="60"
            ><span class="counter">12</span></v-avatar
          >
        </v-card>
      </div>

      <SideBanners />

      <template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </template>

      <!-- selectors check box table -->

      <template>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :single-select="singleSelect"
          item-key="name"
          show-select

          class="elevation-1"
        >
          <template v-slot:top>
            <v-switch
              v-model="singleSelect"
              label="Single select"
              class="pa-3"
            ></v-switch>
          </template>
        </v-data-table>
      </template>
      <!--/ selectors check box table -->

      <div class="home-container">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="@/assets/images/educating-technologies.webp"
            height="200px"
            width="800"
          ></v-img>

          <v-card-title> @TSMS User Script </v-card-title>

          <v-card-subtitle> enhanced trainings and seminars </v-card-subtitle>

          <v-card-actions>
            <v-btn color="#004b8e" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Mfumo wa Usimamizi wa Mafunzo na Semina &#40;TSMS&#41;
                umetengenezwa kwa ajili ya utunzaji kumbukumbu, kutoa taarifa za
                mafunzo na kufuatilia taarifa za wakurufunzi na wakufunzi
                zinazohusu mafunzo, semina, warsha,mikutano ya mwaka na vikao
                vya mifumo na huduma za Mamlaka ya Serikali Mtandao
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->

        <!-- </router-view> -->
      </v-container>
    </v-main>
  </v-app>

</template>

<style>
.drop-menu {
  width: 230px;
  position: relative;
  left: 2.2em;
  top: -1rem;
  height: 5rem;
}
.drop-menu:hover {
  background: #fffeea;
  color: #000;
  margin: auto 50px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
/* dash-board */
.d-board-card-1,
.d-board-card-2,
.d-board-card-3,
.d-board-card-4,
.d-board-card-5,
.d-board-card-6,
.d-board-card-7,
.d-board-card-8 {
  height: 5rem;
  width: 23rem;
  /* background:#FFFBA1; */
  text-align: center;
  position: relative;
}
/* dashboard arrangement */
/* .d-board-card-7,
.ind-icon .dash-font {
  position: relative;
  left: -9px;
}
.d-board-card-8,
.ind-icon .dash-font {
  position: relative;
  left: -9px;
} */

.icons {
  position: absolute;
  display: block;
  top: 6em;
  left: -3.6em;
  font-size: 1.5em;
  line-height: 4em;
  padding: auto;
}

.d-board-card-1:hover,
.d-board-card-2:hover,
.d-board-card-3:hover,
.d-board-card-4:hover,
.d-board-card-5:hover,
.d-board-card-6:hover,
.d-board-card-7:hover,
.d-board-card-8:hover {
  background: #fffeea;
  color: #000;
  margin: auto 50px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  width: 80%;
}

.active {
  background: #004b8e;
  color: #d5e6fb;
  margin: auto 32px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  width: 80%;
}

.dash-font {
  font-size: 80%;
  margin-left: 20px;
}

.ind-icon,
.dash-font {
  padding: auto;
  position: relative;
  left: 0.2px;
  top: -9px;
}
.side-nav {
  display: flex;
  position: relative;
}
/* dash-board ends */

.v-footer {
  position: relative;
}
.footer-txt {
  position: absolute;
  right: 60px;
}
.v-data-table {
  width: 63rem;
  position: absolute;
  top: 20rem;
  left: 8rem;
}
.mx-auto {
  width: 800px;
}
.home-container {
  position: relative;
  right: -38rem;
  top: 1.2rem;
}

.v-main {
  position: relative;
  height: 130vh;
}

/* navigation */

/* user profile */
.notification-container {
  margin-left: 210%;
  cursor: pointer;
}
.notification-icon {
  font-size: 200%;
}

.nav .v-banner {
  width: 20rem;
  position: relative;
  top: 12px;
  left: 47.5rem;
  height: 4.5rem;
}
.nav {
  margin-left: 70%;
  position: relative;
}

.top-nav {
  position: relative;
}
.user-profile {
  position: absolute;
  left: 78rem;
  top: 6px;
}

/* .ab {
                        margin-left: 2rem;
                      } */
/* .text-lg-h6text-lg-h6 {
                    } */
/* .txt {
                      text-decoration: none;
                    }
                    .txt:hover {
                      color: rgb(4, 28, 65);
                      transition: 0.5s all ease;
                    } */
.top-side-bar {
  position: relative;
  display: flex;
  color: #004b8e;
  margin-left: 32px;
}
.txt-header {
  margin-top: 40px;
  margin-left: -5px;
  font-weight: 800;
  font-size: 150%;
  color: #004b8e;
}
/* user profile */
.user {
  margin-top: 29px;
  margin-left: 60px;
  font-weight: 500;
  font-size: 100%;
  color: rgba(73, 73, 73, 0.63);
}
.user-address {
  margin-top: 29px;
  margin-left: 60px;
  font-weight: 300;
  font-size: 100%;
  color: rgba(73, 73, 73, 0.63);
}

/* top cards for services */
.v-card {
  text-align: center;
  font-weight: 600;
  margin: 4.5rem 0rem;
  width: 15rem;
  height: 7rem;
  align-items: center;
  justify-content: center;
  color: #004b8e;
  position: relative;
  top: -10px;
}
/* card icons */
.v-card img {
  position: absolute;
  left: 15px;
  top: 5px;
}
/* card icons ends! */
.card-col {
  /* color: #004b8e; */
  display: flex;
  /* margin-left: 2rem; */
  justify-content: space-evenly;
}

.v-avatar {
  margin: -15px 75px;
}
.v-card:hover {
  background: #d5e6fb;
  cursor: pointer;
  padding: auto 20px auto;
  /* color: #fff; */
}
.counter {
  font-size: 200%;
}
.sub-head {
  color: rgba(73, 73, 73, 0.63);
  font-size: smaller;
}
/* ends */

/* upcoming events banner begins */
.v-banner {
  width: 1006px;
  height: 51px;
  margin: -30px 130px;
}
.side-banner {
  position: relative;
  top: -5px;
}
.right-banner {
  position: absolute;
  left: 70rem;
  top: 30px;
}
.left-b {
  width: 345px;
  height: 44px;
  background: linear-gradient(180deg, #fffba1 0%, #ffffff 100%);
}
/* ends */

/* responsive screens  --- media queries */
@media (max-width: 1280px) {
  .v-data-table {
    width: 42rem;
    left: 1rem;
    top: 280px;
  }
  .right-banner {
    position: absolute;
    left: 37rem;
    top: 30px;
  }
  .left-b {
    width: 285px;
  }
  .left-banner {
    position: relative;
    left: -7.2em;
  }
  .v-banner {
    width: 673px;
  }
  .home-container {
    right: -23rem;
    top: -30px;
  }
  .user-profile {
    left: 39.5rem;
  }

  .nav .v-banner {
    left: 9.4rem;
  }
  .notification-container {
    margin-left: 105%;
    cursor: pointer;
  }
  .side-banner {
    top: -29px;
  }
}
</style>
