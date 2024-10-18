<template>
  <div>
    <h2>Child Component</h2>
    <p>child counter: {{ counter }}</p>
    <button @click="countUp">count up</button>
  </div>
</template>
<script setup lang="ts">
defineProps(['counter'])

const emit = defineEmits(['countUp'])

const countUp = () => {
  emit('countUp')
}
</script>