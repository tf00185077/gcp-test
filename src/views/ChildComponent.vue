<script setup>
import {defineModel} from 'vue'
const model = defineModel()

// function update() {
//   model.value++
// }
</script>

<template>
  <!-- <div>parent bound v-model is: {{ model }}</div> -->
  <div>{{ model }}</div>
</template>