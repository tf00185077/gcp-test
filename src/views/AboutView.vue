<script setup>
import { ref, nextTick, reactive, computed, watch, inject,provide } from 'vue'
import { RouterLink } from 'vue-router';
import Hi from '../components/Hi.vue'
const message = ref("")
const provideSome = inject('imProvider')
watch(provide,()=>{
  console.log(provideSome.value)
})
provide("toHi","HI IM FROM ABOUT")
</script>
<template>
  <div class="about">
    <h1 class="green">This is an about page</h1>
    <a href="/">TEST GREEN OR NOT</a>
    <p>Message is: {{ message }}</p>
    <button @click="provide++">Click Me</button>
    <Hi></Hi>
    <RouterLink to="/">TO HOME</RouterLink>
  </div>
</template>

<style>
.red{
  color:red
}
.green{
  color:green
}
.yellow{
  color:yellow
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
