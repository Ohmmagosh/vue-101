<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Nav",
  data() {
    return {
      msg: "Hello World",
    }
  }
};
</script>
<template>
  <header class=" top-0 h-11 top-0 sticky absolute bg-blue-200">
    <nav class="h-full flex justify-evenly items-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/hello">Hello</RouterLink>
      <RouterLink to="/slot">Slot</RouterLink>
      <RouterLink to="/v-if">Vif</RouterLink>
    </nav>
  </header>
</template>
