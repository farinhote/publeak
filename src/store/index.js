import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { title: 234, subtitle: 'Greatest news in europe' },
      { title: 266, subtitle: 'I love burly man' },
      { title: 273, subtitle: 'I love burly cats' },
      { title: 225, subtitle: 'I love myself' },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
