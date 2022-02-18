import { createStore } from 'vuex';
import data from '../data/models';

const currentLanguage = localStorage.getItem('currentLanguage') || '';
const currentEditorValue = JSON.parse(localStorage.getItem('currentEditorValue')) || {};

export default createStore({
  state: {
    models: data.models,
    showTryItOutButton: true,
    currentLanguage: currentLanguage || '',
    currentEditorValue: currentEditorValue || {},
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
      if (localStorage) {
        localStorage.setItem('currentLanguage', state.currentLanguage);
      }
    },
    setCurrentEditorValue(state, { editorValue }) {
      state.currentEditorValue = editorValue;
      if (localStorage) {
        localStorage.setItem('currentEditorValue', JSON.stringify(editorValue));
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
  },
});
