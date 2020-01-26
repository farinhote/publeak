<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For the latest public leaks
    </p>
    <h3>List of dumb Things</h3>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        class="article"
      >
        <div>
          <img
            src=""
            alt=""
          >
        </div>
        <div>
          <router-link :to="`/article/${post.id}`">
            {{ post.title }}
          </router-link>
          <p>{{ post.subtitle }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
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
