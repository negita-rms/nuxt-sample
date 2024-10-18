<template>
  <div>
    <h2>Parent Component</h2>
    <p>parent counter: {{ counter }}</p>
    <ChildComponent :counter="counter" @count-up="increment" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const increment = () => counter.value++
</script>