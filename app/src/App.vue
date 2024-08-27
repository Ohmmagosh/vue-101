<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
</script>

<template>
  <main class="bg-green-200 m-0 p-0 h-screen">
    <Nav />
    <section id="body" class="h-full bg-red-200">
      <RouterView />
    </section>
  </main>
</template>
