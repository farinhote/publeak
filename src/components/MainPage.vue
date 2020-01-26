<template>
  <div class="hello">
    <h1>{{ $t("thing") }}</h1>
    <p>
      For the latest public leaks
    </p>
    <h3>List of dumb Things</h3>
    <ul>
      <card
        v-for="post in posts"
        :key="post.id"
        class="article"
        :post="post"
      />
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'MainPage',
  components: {
    Card,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
