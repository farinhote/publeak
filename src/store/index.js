import Vue from 'vue';
import Vuex from 'vuex';
import client from '../api/mock';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      // eslint-disable-next-line no-param-reassign
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      return client
        .fetchPosts()
        .then((posts) => commit('setPosts', posts));
    },
  },
  modules: {
  },
});
