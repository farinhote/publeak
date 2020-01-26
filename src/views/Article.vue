<template>
  <div class="home">
    <img
      id="logo"
      alt="PubLeak logo"
      src="../assets/logo.svg"
    >
    <HelloWorld msg="Banana" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
