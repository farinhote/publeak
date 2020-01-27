<template>
  <router-link
    class="card"
    :to="`/article/${post.id}`"
  >
    <div class="card-container">
      <div
        :style="{ backgroundImage: `url('${post.img}')` }"
        class="card-cover"
      />
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
  </router-link>
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

  created() {
    if (this.$props.post.text.length >= 360) {
      this.$props.post.text = `${this.$props.post.text.substring(0, 360)}...`;
    }
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}

.card{
  text-decoration: none;
}

.card-container {
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 2px -2px;
  font-weight: 100;
  width: 100%;
  margin: 0.8rem auto;
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

.card-title h1 {
  color: #333;
  font-weight: 100;
  line-height: 2.5rem;
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

@media only screen and (max-width: 767px) {
  .card {
    margin: 0 1rem;
  }
}

</style>
