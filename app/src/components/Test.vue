<template>
    <h1>Hello test</h1>
    <h1>{{ msg }}</h1>
</template>
<script setup lang="ts" >
defineProps<{
    msg: string
}>()
</script>