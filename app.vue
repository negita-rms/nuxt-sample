<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <tippy content="Hi!" theme="tomato">
      <button>hoge</button>
    </tippy>
    <!-- <AppAlert>
      This is an auto-imported component.
    </AppAlert> -->
    <ParentComponent />
    <Form />
  </div>
</template>
<script setup lang="ts">
</script>
<style>
  .tippy-box[data-theme~='tomato'] {
    background-color: tomato;
    color: yellow;
  }
</style>
