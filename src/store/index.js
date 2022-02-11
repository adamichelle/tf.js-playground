import { createStore } from 'vuex';
import data from '../data/models';

export default createStore({
  state: {
    models: data.models,
    showTryItOutButton: true,
  },
  mutations: {
    updateNavigationButtonVisibility(state, { buttonName, fullPath }) {
      if (buttonName === 'try-it-out') {
        state.showTryItOutButton = fullPath === '/';
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
