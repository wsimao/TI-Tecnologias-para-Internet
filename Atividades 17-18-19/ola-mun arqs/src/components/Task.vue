<template>
    <article>
      <ul id="example-1">
        <li v-for="(value, key) in values" :key="key">{{ value }}</li>
      </ul>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'TaskS',
    props: ['values'],
  });
  </script>
  
  <style scoped>
  li {
    user-select: none;
  }
  </style>