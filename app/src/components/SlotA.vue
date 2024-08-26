<template>
    <div class="bg-red">
        <h1 class="bg-blue-200">Slot A</h1>
        <h1 class="text-2xl">{{ count }}</h1>
        <button @click="++count">Click me Ahhhh!! {{ count }}</button>
        <button @click="count = 0">Reset with me Ahhh!!</button>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return  {
            count: 0
        }
    }

}
</script>