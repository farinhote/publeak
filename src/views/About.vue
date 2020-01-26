<template>
  <div class="about">
    <publeak-header />
    <about-text />
  </div>
</template>

<script>
import AboutText from '../components/AboutText.vue';
import PubleakHeader from '../components/PubleakHeader.vue';

export default {
  name: 'About',
  components: {
    PubleakHeader,
    AboutText,
  },
};
</script>
