<template>
  <div>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.count++" class="btn btn-success mx-2">
      Increament
    </button>
    <button @click="counter.multiply(2)" class="btn btn-warning mx-2">
      Multiply by 2
    </button>
    <button @click="counter.$reset()" class="btn btn-danger mx-2">Reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();

counter.count++;
</script>

<style></style>
