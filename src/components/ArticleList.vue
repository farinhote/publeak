<template>
  <div class="news">
    <div
      v-if="posts.length"
      class="cards"
    >
      <card
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
    <spinner v-else />
  </div>
</template>

<script>
import Card from './Card.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'ArticleList',
  components: {
    Card,
    Spinner,
  },
  props: {
    msg: {
      type: String,
      default: 'PubLeak',
    },
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },

  created() {
    this.$store.dispatch('fetchPosts');
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
}

@media only screen and (max-width: 767px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

</style>
