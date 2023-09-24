<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>

  <main>
    <p>Home!</p>
  </main>
</template>
