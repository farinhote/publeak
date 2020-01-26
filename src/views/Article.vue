<template>
  <div class="home">
    <img
      id="logo"
      alt="PubLeak logo"
      src="../assets/logo.svg"
    >
    <MainPage msg="Banana" />
  </div>
</template>

<script>
import MainPage from '../components/MainPage.vue';

export default {
  name: 'Home',
  components: {
    MainPage,
  },
};
</script>
