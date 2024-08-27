<template>
  <li>
    {{ title }} {{ description }} {{ status }}
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoCard",
  props: {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
  },
});
</script>
