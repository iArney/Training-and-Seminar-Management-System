<template>
  <v-container id="Banner" class="position-relative" fluid>
    <v-row no-gutters>
      <v-col cols="12" md="7" sm="8" xs="12" class="pt-16">
        <v-container fluid>
          <v-row no-gutters>
            <v-col lg="11" cols="12">
              <div class="mt-10 me-5">
                <h1 class="lh-base xl-text">
                  Training And Seminars Management
                  <span class="deep--text">System</span>
                </h1>
                <p class="lh-lg text">
                  The Training and Seminar Management System (TSMS) has been
                  developed to maintain records, provide training information
                  and monitor the information of trainers and instructors
                  regarding training, seminars, workshops, annual meetings and
                  sessions of systems and services of the Internet Government
                  Authority
                </p>
                <TriangleDecoration />
                <div class="mt-5 ms-16 ps-16">
                  <button
                    class="btn btn-lg deep white--text border rounded-pill py-3 px-10"
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </v-col>
            <v-col cols="1" class="d-lg-flex align-center d-none">
              <div id="circle-decoration" class="rounded-circle"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col
        class="overflow-hidden d-none d-sm-flex"
        id="right"
        cols="6"
        md="5"
        sm="4"
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="11">
              <HeroImage />
            </v-col>
            <v-col
              cols="1"
              class="d-lg-flex d-none align-center ps-10 pt-16 mt-16 pb-5"
            >
            <!-- Star deocration stays here -->
             <StarDecoration class="float-right"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <BubbleDecoration
      class="d-none d-sm-block position-absolute top-100 start-50"
      :size="123"
    />
  </v-container>
</template>

<script>
import BubbleDecoration from "@/components/decorations/BubbleDecoration";
import HeroImage from "@/components/decorations/HeroImage";
import TriangleDecoration from "@/components/decorations/TriangleDecoration";
import StarDecoration from "@/components/decorations/StarDecoration";

export default {
  components: {
    BubbleDecoration,
    HeroImage,
    TriangleDecoration,
    StarDecoration,
  },
};
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
#circle-decoration {
  width: 67px;
  height: 67px;
  border: 7px solid #004b8e;
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

.xl-text,
.xl-text {
  font-weight: 900 !important;
  font-size: 3.5rem !important;
}

@media only screen and (max-width: 1144px) {
  .xl-text {
    font-size: 2.6rem !important;
  }
}

@media only screen and (min-width: 1630px) {
  .xl-text {
    font-size: 4.3rem !important;
    line-height: 90px !important;
  }
}
</style>
