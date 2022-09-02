<template>
  <div>
    <NavBar />
    <HeadBanner />
    <ModulesSection />
    <UsageHelp />
  </div>
</template>

<script setup>
import HeadBanner from  "@/components/sections/HeadBanner";
import ModulesSection from "@/components/sections/ModulesSection";
import UsageHelp from "@/components/sections/UsageHelp";
import NavBar from "@/components/global_components/NavBar.vue";
</script>

<style>
</style>