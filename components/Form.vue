<template>
  <input type="date" v-model="date" min="2024-10-27" />
</template>
<script setup lang="ts">
import {ref} from 'vue'
const date = ref('')
</script>