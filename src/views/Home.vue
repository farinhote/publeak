<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="PubLeak" 
      v-bind:tasks="[
        { title: 234, subtitle: 'Greatest news in europe' },
        { title: 266, subtitle: 'I love burly man' },
        { title: 273, subtitle: 'I love burly cats' },
        { title: 225, subtitle: 'I love myself' }
      ]"
    />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import "../assets/global.css"

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
