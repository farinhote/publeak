<template>
  <div class="home">
    <publeak-header />
    <article-list />
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import PubleakHeader from '../components/PubleakHeader.vue';

export default {
  name: 'Home',
  components: {
    ArticleList,
    PubleakHeader,
  },
};
</script>
