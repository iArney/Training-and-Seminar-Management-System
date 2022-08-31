<template>
       <v-navigation-drawer app color="#D5E6FB">
    
    <div class="top-side-bar">
                  <img src="../assets/logo.png" width="95" height="90" style="padding: 9px  12px;" alt="">
                  <span class="txt-header">TSMS</span>

                  

                  <div class="icons">
                    <div class="d-board-card-1 active">
                  <font-awesome-icon icon="fa-solid fa-gauge fa-2xl" class="ind-icon" /> <span class="dash-font">Dashboard</span>    
                    </div> 
                    <div class="d-board-card-2">
                  <font-awesome-icon icon="fa-passport" class="ind-icon" /> <span class="dash-font">My Profile</span>    
                    </div>
                    <div class="d-board-card-3">
                  <font-awesome-icon icon="fa-solid fa-chalkboard-teacher"  class="ind-icon" /> <span class="dash-font">Seminars</span>    
                    </div>
                    <div class="d-board-card-4">
                  <font-awesome-icon icon="fa-solid fa-tools" class="ind-icon" /> <span class="dash-font">Trainings</span>    
                    </div>
                    <div class="d-board-card-5">
                  <font-awesome-icon icon="fa-file-arrow-down" class="ind-icon" /> <span class="dash-font">Education</span>   
                    </div>
                    <div class="d-board-card-6">
                  <font-awesome-icon icon="fa-money-bill-transfer" class="ind-icon" /> <span class="dash-font">Payments</span>  
                    </div>
                    <div class="d-board-card-7">
                  <font-awesome-icon icon="fa-toolbox" class="ind-icon icon-7" /> <span class="dash-font d-7">Settings</span>  
                    </div>
                    <div class="d-board-card-8">
                  <font-awesome-icon icon="fa-list" class="ind-icon icon-8" /> <span class="dash-font d-8">Reports</span>  
                    </div>
                  </div>
                  

                   <!-- the side bar -->
    </div>

    <div class="side-nav">

    </div>
                  
    
    <!-- -->
  </v-navigation-drawer>

</template>

<script>
export default {
    name: 'NavigationDrawer'
}
</script>

<style>

</style>