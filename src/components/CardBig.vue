<template>
  <div
    v-if="post.id"
    class="card-container"
  >
    <div class="card-header">
      <div
        :style="{ backgroundImage: `url('${post.img}')` }"
        class="card-cover"
      />
    </div>
    <div class="card-body">
      <div class="card-title">
        <h1>
          {{ post.title }}
        </h1>
      </div>
      <div class="card-summary">
        <p> {{ post.text }} </p>
      </div>
    </div>

    <div class="card-footer">
      <ul>
        <li class="published-date">
          {{ post.publishedDate }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBig',
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
li {
  display: inline-block;
  margin: 20px 10px;
}
a {
  color: #42b983;
}

.card-container {
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 2px -2px;
  font-weight: 100;
  width: 100%;
  margin: 48px auto;
}

.card-container a {
  text-decoration: none;
  transition: 0.25s ease;
}
.card-container a:hover {
  border-color: #ff4d4d;
  color: #ff4d4d;
}

.card-cover {
  background-size: cover;
  border-radius: 5px 5px 0 0;
  height:8rem;
  box-shadow: inset rgba(0, 0, 0, 0.2) 0 64px 64px 16px;
}

.card-body {
  margin: 0 auto;
  width: 90%;
  position: relative;
}

.card-title h1 a {
  color: #333;
  font-weight: 100;
}

.card-summary p {
  color: #4d4d4d;
}

.card-footer {
  border-top: 1px solid #e6e6e6;
  margin: 0 auto;
  padding-bottom: 0.125rem;
  width: 80%;
}

.card-footer ul {
  list-style: none;
  display: flex;
  flex: row wrap;
  padding-left: 0;
}

.card-footer li {
  color: #999999;
  font-size: 0.75rem;
  height: 1.5rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
  text-transform: uppercase;
  border: 1px solid #999999;
  border-radius: 3px;
  padding: 0 0.5rem;
}
</style>
