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
    <!--  -->
    <h1>改動會自動上線部署，可以省很多時間</h1>
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
