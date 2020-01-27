<template>
  <div class="news">
    <publeak-header />

    <h3> {{ $t("mainPage.listTitle") }} </h3>
    <div class="cards">
      <card
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import PubleakHeader from './PubleakHeader.vue';

export default {
  name: 'MainPage',
  components: {
    Card,
    PubleakHeader,
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
h3 {
  margin: 40px 0 0;
}

.cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding: 0;
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
