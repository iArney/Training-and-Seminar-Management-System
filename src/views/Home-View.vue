<template>
 <div>

   <NavBar />
  <div>
    <HeadBanner />
    <ModulesSection />
    <UsageHelp />
  </div>
  <Footer class="primary"/>
 </div>
  
</template>

<script setup>
import Footer from "@/components/global_components/FooterSection.vue"
import HeadBanner from "@/components/sections/HeadBanner";
import ModulesSection from "@/components/sections/ModulesSection";
import UsageHelp from "@/components/sections/UsageHelp";
import NavBar from "@/components/global_components/NavBar.vue";

</script>

<style></style>
