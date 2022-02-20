import { createStore } from 'vuex';
import data from '../data/models';

const saveToLocalStorage = (key, item) => {
  if (localStorage) {
    const value = typeof item === 'string' || item instanceof String
      ? item : JSON.stringify(item);
    localStorage.setItem(key, value);
  }
};

const getFromLocalStorage = (modelSlug) => {
  const localStorageKey = `${modelSlug}Playground`;
  return JSON.parse(localStorage.getItem(localStorageKey));
};

export default createStore({
  state: {
    models: data.models,
    showTryItOutButton: true,
    currentModelSlug: '',
  },
  mutations: {
    updateNavigationButtonVisibility(state, { buttonName, fullPath }) {
      if (buttonName === 'try-it-out') {
        state.showTryItOutButton = fullPath === '/';
      }
    },
    setCurrentModelSlug(state, { modelSlug }) {
      state.currentModelSlug = modelSlug;
    },
    setCurrentPlaygroundValues(state, { modelSlug, language, editorValue }) {
      const localStorageKey = `${modelSlug}Playground`;
      switch (modelSlug) {
        case 'toxicity':
          saveToLocalStorage(localStorageKey, { language, editorValue });
          break;
        default:
          break;
      }
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
    getPlayground: (state) => getFromLocalStorage(state.currentModelSlug),
  },
});
