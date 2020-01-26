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
        :key="post.title"
        class="article"
      >
        <div>
          <router-link :to="`/article/${post.id}`">
            {{ post.title }}
          </router-link>
          <p>{{ post.subtitle }}</p>
        </div>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router</a>
      </li>
      <li>
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
        >vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
