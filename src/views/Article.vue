<template>
  <div class="home">
    <publeak-header />
    <card-big :post="article" />
  </div>
</template>

<script>
import PubleakHeader from '../components/PubleakHeader.vue';
import CardBig from '../components/CardBig.vue';

export default {
  name: 'Article',
  components: {
    PubleakHeader,
    CardBig,
  },

  computed: {
    article() {
      return this.$store.state.article;
    },
  },

  created() {
    // If the last article is still in store we clean it up before fetching a new one
    if (this.$store.state.article.id) this.$store.commit('setArticle', {});

    this.$store.dispatch('fetchArticle', this.$route.params.id);
  },
};
</script>
