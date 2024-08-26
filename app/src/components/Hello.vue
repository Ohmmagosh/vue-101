<script setup lang="ts">
import Test from './Test.vue'
</script>
<template>
    <div>
        <h1>Hello props</h1>
        <h1>{{ msg }}</h1>
        <Test msg="Hello World" />
    </div>
</template>
<script lang="ts">
export default {
    name: 'Hello',
    setup() {
        console.log('Hello World')
    },
    props: {
        msg: String
    }
    
}
</script>