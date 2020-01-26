<template>
  <div class="home">
    <img
      id="logo"
      alt="Vue logo"
      src="../assets/logo.svg"
    >
    <MainPage msg="PubLeak" />
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
