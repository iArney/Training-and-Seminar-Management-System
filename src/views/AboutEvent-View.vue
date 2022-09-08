<template>
  <div>
    <AppBar />
    <NavigationDrawer />
    <v-container class="content-wrapper py-16 px-md-16 mt-10" fluid>
      <div class="content pt-8 pb-16 mx-auto">
        <router-link to="/events-collection" class="text-decoration-none">
          <v-btn text>
            <v-icon dense left>mdi-arrow-left</v-icon>
            <span class="text-capitalize">Event</span>
          </v-btn>
        </router-link>

        <v-row no-gutters class="cardtop">
          <v-col cols="6" class="lefttop">
            <div class="lefttop h-100 w-100 d-flex align-end">
              <v-toolbar class="tool-top" flat>
                <span class="white--text font-weight-medium">IT Training</span>
              </v-toolbar>
            </div>
            <!-- <v-img contain src="@/assets/images/eve.webp" class="h-100"></v-img> -->
          </v-col>
          <v-col class="white">
            <div class="px-5">
              <h4 class="caption pt-3">Feb 22</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus ea vel vero at exercitationem odit modi cumque fugiat
                obcaecati asperiores, assumenda aliquid, fuga iusto mollitia
                unde praesentium sint ab. Ab.
              </p>
              <v-btn color="deep white--text" class="py-6 mt-5" elevation="2">
                ATTEND</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
        <v-row class="mt-3">
          <div>
            <h3>About this Event</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur aut maiores sunt dolorum adipisci alias vitae? Nobis
              id, mollitia tenetur atque porro alias, expedita, soluta omnis
              recusandae deleniti ipsum possimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quo consequuntur vero autem quidem
              placeat illum expedita tenetur totam delectus corrupti similique
              et reiciendis nulla, quae molestiae quas nobis rerum modi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequuntur vero autem quidem placeat illum expedita tenetur
              totam delectus corrupti similique et reiciendis nulla, quae
              molestiae quas nobis rerum modi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quo consequuntur vero autem quidem
              placeat illum expedita tenetur totam delectus corrupti similique
              et reiciendis nulla, quae molestiae quas nobis rerum modi.
            </p>
          </div>
        </v-row>
      </div>
    </v-container>
    <Footer class="superLight" />
  </div>
</template>

<script>
import AppBar from "@/components/global_components/AppBar.vue";
import NavigationDrawer from "@/components/global_components/NavigationDrawer.vue";
import Footer from "@/components/global_components/FooterSection.vue";

export default {
  components: { AppBar, NavigationDrawer, Footer },
  name: "AboutEvent",
};
</script>

<style scoped>
.cardtop {
  height: 365px;
}
.content {
  max-width: 1091px;
}
.content-wrapper {
  color: rgb(0, 0, 0);
  background: #f0f8ff;
  font-family: "Lato", sans-serif;
}
.lefttop {
  background: url("@/assets/images/eve.webp") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: rgba(0, 0, 0, 0.51);
}
h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.tool-top {
  background: rgba(0, 0, 0, 0.2) !important;
}
</style>
>
