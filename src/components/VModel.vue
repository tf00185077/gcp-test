<script setup>
import {defineModel} from 'vue'
// const props = defineProps(['modelValue'])
const emit = defineEmits(['update:sendPlus'])
const model = defineModel()
// const test = ref(0)
const plus = () =>{
    emit("update:sendPlus",123)
}
</script>
<template>
    <h1>{{ model }}</h1>
    <button @click="plus">+</button>
    <!-- <h1>123</h1> -->
</template>