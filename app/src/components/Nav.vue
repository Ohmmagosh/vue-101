<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Nav",
  data() {
    return {
      msg: "Hello World",
    };
  },
};
</script>
<template>
  <header class="top-0 h-11 top-0 sticky absolute bg-blue-200">
    <nav class="h-full flex justify-evenly items-center">
      <RouterLink
        v-for="route in $router.getRoutes()"
        :key="route.path"
        :to="route.path"
        >{{ route.name }}</RouterLink
      >
    </nav>
  </header>
</template>
