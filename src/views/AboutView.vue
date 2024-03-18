<script setup>
import { ref, watch, inject,provide } from 'vue'
import { RouterLink } from 'vue-router';
import hi from '../components/HiComponent.vue'
const message = ref("hello world")
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
    <hi myTitle="my-title" title="title" id="123"></hi>
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
</style>../components/hi.vue../components/HiComponent.vue
