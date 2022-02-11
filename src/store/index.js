import { createStore } from 'vuex';
import data from '../data/models';

export default createStore({
  state: {
    models: data.models,
    onPlayground: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
