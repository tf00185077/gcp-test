<script setup>
import {ref, inject} from 'vue'
const props = defineProps({myTitle:String,title:String,id:Number})
const emit = defineEmits(['setHellow'])
const fromFather = inject('toHi')
function clickMe(){
    console.log(123)
    emit('setHellow',data.value)
}
const data=ref("InputData")
</script>
<template>
    <div>
        <h1>This is Hi</h1>
        <h1>I'm{{props.myTitle}}{{props.title}}</h1>
        <h1 @click="clickMe">EMIT DATA</h1>
        <input v-model="data">
        <p>{{ fromFather }}</p>
        <h1>This is Hi</h1>
    </div>
</template>