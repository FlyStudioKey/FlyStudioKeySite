<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
document.title = "Homepage";
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
