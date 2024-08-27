<script lang="ts">
import { ref } from "vue";
export default {
  // setup() {
  //   const countB = ref<number>(0);
  //   return {
  //     countB,
  //   };
  // },
  data() {
    const countB = ref<number>(0);
    return {
      count: 0,
      countB,
    };
  },
  methods: {
    increment() {
      this.countB++;
    },
  }
};
</script>
<template>
  <div class="bg-red">
    <h1 class="text-4xl">Slot A</h1>
    <h1 class="text-2xl">{{ count }}</h1>
    <h1 class="text-2xl">{{ countB }}</h1>
    <button class="border p-2 rounded-md" @click="++count">
      Click me Ahhhh!! {{ count }}
    </button>
    <button @click="count = 0">Reset with me Ahhh!!</button>
  </div>
</template>
