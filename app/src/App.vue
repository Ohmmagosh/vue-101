<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="bg-green-200 m-0 p-0 h-screen">
    <header class="top-0 h-11">
      <nav class="h-full flex items-center justify-evenly">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/hello">Hello</RouterLink>
        <RouterLink to="/slot">Slot</RouterLink>
      </nav>
    </header>
    <div class="bg-red-200 h-full">

    </div>
    <section id="body" class="h-full bg-red-200">
      <RouterView />
    </section>
  </main>
</template>
