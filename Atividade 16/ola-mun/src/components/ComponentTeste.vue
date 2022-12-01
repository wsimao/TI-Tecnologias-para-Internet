<template>
    <h1>
      {{ title }}
      <slot></slot>
    </h1>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ComponentTeste',
    props: {
      title: {
        type: String,
      },
    },
  });
  </script>
  
  <style scoped>
  h1 {
    font-size: 25px;
    color: blueviolet;
    padding-left: 15px;
  }
  </style>