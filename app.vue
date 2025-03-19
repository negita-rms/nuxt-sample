<script setup lang="ts">
import { Dropdown, Tooltip, Menu, vTooltip } from 'floating-vue'


</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <ParentComponent />
    <Form />
    <div>
      <div v-tooltip="'Hello world'">Hover me</div>
    </div>
  </div>
</template>