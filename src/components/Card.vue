<template>
  <li class="card">
    <div>
      <img
        src=""
        alt=""
      >
      <router-link :to="`/article/${post.id}`">
        {{ post.title }}
      </router-link>
    </div>
    <p>{{ post.subtitle }}</p>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
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
a {
  color: #42b983;
}
</style>
