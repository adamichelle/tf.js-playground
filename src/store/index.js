import { createStore } from 'vuex';
import data from '../data/models';

export default createStore({
  state: {
    models: data.models,
    showTryItOutButton: true,
    currentLanguage: '',
  },
  mutations: {
    updateNavigationButtonVisibility(state, { buttonName, fullPath }) {
      if (buttonName === 'try-it-out') {
        state.showTryItOutButton = fullPath === '/';
      }
    },
    setCurrentLanguage(state, { language }) {
      state.currentLanguage = language;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getModelInfo: (state) => (modelSlug) => state.models.find(
      (model) => model.slug === modelSlug,
    ),
  },
});
