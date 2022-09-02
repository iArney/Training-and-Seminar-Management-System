<template>
  <v-container id="Banner" class="d-flex justify-between fs-6" fluid>
    <v-row no-gutters>
      <v-col cols="6" md="7" sm="8" xs="12" class="pt-16">
        <div class="mt-10 mx-14">
          <h1 class="lh-base xl-text">
            Training And Seminars Management
            <span class="deep--text">System</span>
          </h1>
          <p class="lh-lg text">
            The Training and Seminar Management System (TSMS) has been developed
            to maintain records, provide training information and monitor the
            information of trainers and instructors regarding training,
            seminars, workshops, annual meetings and sessions of systems and
            services of the Internet Government Authority
          </p>

          <div id="triangle-decorator" class="mt-12 deep"></div>
          <div class="mt-5 ms-16 ps-16">
            <button class="btn btn-lg deep  white--text border rounded-pill py-3 px-10">Read More...</button>
          </div>
          
        </div>
      </v-col>
      <v-col class="overflow-hidden" id="right" cols="6" md="5" sm="4">
        <v-container>
          <v-row no-gutters>
            <v-col cols="11">
              <img
                src="@/assets/images/Hero.webp"
                class="object-cover image-fluid"
                alt=""
                srcset=""
              />
            </v-col>
            <v-col
              cols="1"
              class="d-flex align-center ps-10 pt-16 mt-16 pb-5"
            >
              <font-awesome-icon
                class="deep--text float-right"
                icon="fa-solid fa-star fs-"
                size="2xl"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  box-shadow: 0px 10px 15px rgba(242, 68, 5, 0.18);
}

#Banner {
  background: linear-gradient(
    100.73deg,
    #d5e6fb 1.11%,
    #fffeea 33.86%,
    #fffba1 68.61%,
    #d5e6fb 97.83%
  );
}
.nav {
  width: 0 !important;
}
#right {
  opacity: 1;
}

.text {
  font-family: "Lato", sans-serif;
}
.text {
  font-size: 1.125rem;
}
#triangle-decorator{
  transform: matrix(0.59, -0.81, 0.81, 0.59, 0, 0);
  width: 50.02px;
  height: 53.1px;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
}
.xl-text,
.xl-text {
  font-weight: 900 !important;
  font-size: 3.5rem !important;
}

@media only screen and (max-width: 1144px) {
  .xl-text {
    font-size: 2.8rem !important;
  }
}

@media only screen and (min-width: 1630px) {
  .xl-text {
    font-size: 4.3rem !important;
    line-height: 90px !important;
  }
}
</style>
