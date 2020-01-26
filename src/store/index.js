import Vue from 'vue';
import Vuex from 'vuex';
import client from '../api/mock';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    article: {},
  },
  mutations: {
    setPosts(state, posts) {
      // eslint-disable-next-line no-param-reassign
      state.posts = posts;
    },
    setArticle(state, article) {
      // eslint-disable-next-line no-param-reassign
      state.article = article;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      return client
        .fetchPosts()
        .then((posts) => commit('setPosts', posts));
    },

    fetchArticle({ commit }) {
      return client
        .fetchArticle(this.$route.params.id)
        .then((article) => commit('setArticle', article));
    },
  },
  modules: {
  },
});
