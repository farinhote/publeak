<template>
  <div class="news">
    <publeak-header />

    <h3> {{ $t("mainPage.listTitle") }} </h3>
    <ul class="cards">
      <card
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </ul>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 20px 10px;
}
.cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
}
@media only screen and (max-width: 767px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>
