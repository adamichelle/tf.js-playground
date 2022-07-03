<template>
  <div>
    <div class="p-3 tp-playground__header">
      <h1 class="fs-5 mb-0 lh-base">
        <router-link :to="{name : 'Models'}">
          <i title="Go Back">
            <svg class="tp-feather me-1 text-dark">
              <use href="../assets/feather-sprite.svg#arrow-left-circle"></use>
            </svg>
          </i>
        </router-link>
        {{model.name}}
        <a :href="model.url" target="__blank" :aria-label="`${model.name} GitHub link`">
          <i>
            <svg class="tp-feather ms-1">
                <use href="../assets/feather-sprite.svg#link"></use>
            </svg>
          </i>
        </a>
        <i :title="model.description">
          <svg class="tp-feather ms-2 tp-amber">
            <use href="../assets/feather-sprite.svg#info"></use>
          </svg>
        </i>
      </h1>
    </div>
    <div class="tp-playground__body">
      <div class="d-flex flex-row h-full">
        <div id="playground-editor" class="w-full">
          <div class="d-flex flex-column h-full">
          <playground-tabs
           :editor-languages="editorLanguages"
           :current-language="currentLanguage"
            @tabSelected="updateLanguage"
          ></playground-tabs>

          <playground-editor
           :editor-language="currentLanguage"
           :model="model"
           @triggerPreview="getPreview"></playground-editor>
          </div>
        </div>
        <iframe
          title="Playground Preview"
          ref="playgroundPreview"
          sandbox="allow-scripts allow-forms allow-same-origin"
          frameborder="0"
          id="playground-preview"
         class="h-full w-full">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Split from 'split.js';
import PlaygroundTabs from '@/components/PlaygroundTabs.vue';
import PlaygroundEditor from '@/components/PlaygroundEditor.vue';
import { generateHTML, convertAllHexCodesToRGB } from '../utils';

const editorLanguages = [
  { text: 'HTML', value: 'html' },
  { text: 'CSS', value: 'css' },
  { text: 'JavaScript', value: 'javascript' },
];

export default {
  props: {
    modelSlug: {
      type: String,
      required: true,
    },
  },
  components: {
    PlaygroundTabs,
    PlaygroundEditor,
  },
  data() {
    return {
      editorLanguages,
      currentLanguage: '',
      editorValue: {},
      editorLanguage: '',
      isCompliant: false,
    };
  },
  created() {
    this.isCompliant = !!('srcdoc' in document.createElement('iframe'));
    this.$store.commit('setCurrentModelSlug', { modelSlug: this.modelSlug });
    const playground = this.$store.getters.getPlayground;
    this.currentLanguage = playground ? playground.language : editorLanguages[0].value;
  },
  updated() {
    this.$store.commit('setCurrentPlaygroundValues', {
      modelSlug: this.modelSlug,
      language: this.currentLanguage,
      editorValue: this.editorValue,
    });
  },
  mounted() {
    Split(['#playground-editor', '#playground-preview']);
  },
  computed: {
    model() {
      return this.$store.getters.getModelInfo(this.modelSlug);
    },
    isNotCompliant() {
      if ('srcdoc' in document.createElement('iframe')) return false;

      return this.iframeSrc;
    },
  },
  methods: {
    updateLanguage(language) {
      this.currentLanguage = language;
      this.$store.commit('setCurrentPlaygroundValues', {
        modelSlug: this.modelSlug,
        language: this.currentLanguage,
        editorValue: this.editorValue,
      });
    },
    getPreview({ editorValue, isOriginalModelCode }) {
      const generatedHTML = generateHTML(editorValue);
      const checkedHTML = convertAllHexCodesToRGB(generatedHTML);

      if (!this.isCompliant) {
        this.$refs.playgroundPreview.src = `data:text/html;charset=utf-8,${checkedHTML}`;
      } else {
        this.$refs.playgroundPreview.srcdoc = generatedHTML;
      }

      const editorValueToStore = isOriginalModelCode ? {} : editorValue;
      this.editorValue = editorValueToStore;
      this.$store.commit('setCurrentPlaygroundValues', {
        modelSlug: this.modelSlug,
        language: this.currentLanguage,
        editorValue: editorValueToStore,
      });
    },
  },
};
</script>

<style>
.gutter {
  background-color: #F2F2F2;
  background-position: 50%;
  background-repeat: no-repeat;
}
.gutter.gutter-horizontal {
  background-image: url('../assets/vertical.png');
  cursor: col-resize;
}
.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}
</style>

<style scoped>
.tp-playground__body {
  height: 75vh;
  border-top: 2px solid #EEEEEE;
  box-shadow: 2px 2px 1px 1px rgba(232,232,232,0.5);
}
.tp-playground__header {
  border-top: 2px solid #EEEEEE;
  box-shadow: 3px 2px 6px 1px rgba(232,232,232,0.70);
}
</style>
