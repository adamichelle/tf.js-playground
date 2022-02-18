<template>
  <v-ace-editor
    v-model:value="editorValue[editorLanguage]"
    @init="editorInit"
    :lang="editorLanguage"
    theme="chrome"
    :options="{ useWorker: true }"
    style="height: 100%"
    @change="debouncedChangeHandler" />
</template>

<script>
import ace from 'ace-builds';
import { VAceEditor } from 'vue3-ace-editor';
import debounce from 'lodash.debounce';
import { deepClone } from '../utils';

const { version } = require('ace-builds');

ace.config.set(
  'basePath',
  `https://cdn.jsdelivr.net/npm/ace-builds@${version}/src-noconflict/`,
);

export default {
  name: 'PlaygroundEditor',
  props: {
    'editor-language': {
      type: String,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
  },
  components: {
    VAceEditor,
  },
  data() {
    return {
      editor: null,
      editorValue: {},
    };
  },
  computed: {},
  methods: {
    editorInit(editor) {
      this.editor = editor;
      editor.setShowPrintMargin(false);
    },
  },
  created() {
    const editorValueFromStore = this.$store.state.currentEditorValue;
    const originalEditorValue = JSON.stringify(editorValueFromStore)
     !== '{}' ? deepClone(editorValueFromStore) : deepClone(this.model.code);

    this.editorValue = JSON.stringify(editorValueFromStore) !== '{}' ? editorValueFromStore : this.model.code;
    this.debouncedChangeHandler = debounce(() => {
      if (this.editorValue[this.editorLanguage] !== originalEditorValue[this.editorLanguage]) {
        this.$store.commit('setCurrentEditorValue', { editorValue: this.editorValue });
        this.$emit('triggerPreview', this.editorValue);
      }
    }, 1000);
  },
  mounted() {
    this.$emit('triggerPreview', this.editorValue);
  },
  beforeUnmount() {
    this.debouncedChangeHandler.cancel();
  },
  watch: {},
};
</script>

<style>
.ace-chrome .ace_gutter {
  background-color: transparent;
}
</style>
