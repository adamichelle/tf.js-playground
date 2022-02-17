import { createStore } from 'vuex';
import data from '../data/models';

export default createStore({
  state: {
    models: data.models,
    showTryItOutButton: true,
    currentLanguage: '',
    currentEditorValue: '',
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
    setCurrentLanguage(state, { language }) {
      state.currentLanguage = language;
    },
    setCurrentEditorValue(state, { editorValue }) {
      state.currentEditorValue = editorValue;
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
