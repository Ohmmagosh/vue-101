<script lang="ts">
export default {
  data() {
    return {
      show: true,
      items: ["item1", "item2", "item3"],
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
<template>
  <div class="flex justify-center items-center flex-col">
    <div v-if="show">
        <h1 class="text-2xl">V-if</h1>
        <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
    </div>
    <div v-else>
        <h1 class="text-2xl">V-else</h1>
    </div>
    <button class="text-xl bg-yellow-200 p-2 rounded-md" @click="toggle">Click</button>
  </div>
</template>
