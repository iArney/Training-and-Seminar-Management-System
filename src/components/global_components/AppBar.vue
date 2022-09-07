<template>
  <div>
    <v-app-bar class="px-lg-16" color="white" elevation="0" height="90" app>
      <!-- <div class="">
          <v-banner color="#D5E6FB">
            <span class="txt-header user">
              iArnold Raphael <br />
              <span class="user-address">iarnoldraphael@gmail.com</span>
            </span>
          </v-banner>
        </div> -->
      <div>
        <div class="input-group search-bar border rounded-pill ps-6 pe-3">
          <input
            type="text"
            class="form-control border-0"
            id="inputMobileSearch"
            name="query"
            placeholder="Search ..."
          />
          <button type="submit" class="input-group-text white">
            <i class="fa fa-fw fa-search"></i>
          </button>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div>
        <div class="d-inline-block mx-3" @click="pop">
          <v-badge bordered overlap dot color="red">
            <font-awesome-icon icon="fa-bell" class="notification-icon" />
          </v-badge>
        </div>
        <div class="d-inline-block mx-3" @click="pop">
          <v-container class="my-5 light pe-4">
            <v-row no-gutters>
              <v-col cols="4">
                <img
                  src="@/assets/images/lisa.webp"
                  alt="userprofile"
                  class="object-cover rounded-circle"
                  width="45"
                  height="45"
                />
              </v-col>
              <v-col cols="8">
                <div>
                  <span class="d-block username">Lisa Jocktan</span>
                  <span class="d-block email">lisajocktan@gmail.com</span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- </notifcation ends> -->
        <!-- <div class="user-profile">
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
        </div> -->
      </div>
      <!-- new notification {an event handler is required to switch notification status to read} -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  components: {},
};
</script>

<style scoped>
.search-bar {
  border: 1.3px solid rgba(196, 202, 205, 0.4);
  border-radius: 57px;
  width: 430px;
}
.username {
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 13.4683px !important;
}
.email {
  font-weight: 500 !important;
  font-size: 0.6875rem !important;
  line-height: 28px !important;
}
</style>
