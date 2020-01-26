<template>
  <div class="home">
    <img
      id="logo"
      alt="Vue logo"
      src="../assets/logo.svg"
    >
    <HelloWorld msg="PubLeak" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import '../assets/global.css';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
