<template>
  <div ref="editor"></div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import debounce from 'lodash.debounce';

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
  data() {
    return {
      editor: null,
      editorState: {},
    };
  },
  created() {
    this.$store.commit('setCurrentEditorValue', { language: this.model[this.editorLanguage] });
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      language: this.editorLanguage,
      automaticLayout: true,
    });

    this.editor.onDidChangeModelContent(
      debounce(() => {
        if (this.editorValue[this.editorLanguage] !== this.editor.getValue()) {
          this.editorValue[this.editorLanguage] = this.editor.getValue();
          this.$emit('editorValueChange', this.editorValue);
        }
      }, 500),
    );

    if (this.editorValue[this.editorLanguage]) {
      this.editor.setValue(this.editorValue[this.editorLanguage]);
      this.editor.restoreViewState(this.editorState[this.editorLanguage]);
      this.$emit('editorValueChange', this.editorValue);
    }
  },
  updated() {
  },
  unmounted() {
    this.editor.dispose();
  },
  computed: {
    editorValue() {
      return this.model.code;
    },
  },
  methods: {},
  watch: {
    editorLanguage(currentEditorLanguage, previousEditorLanguage) {
      monaco.editor.setModelLanguage(this.editor.getModel(), currentEditorLanguage);

      this.editorState[previousEditorLanguage] = this.editor.saveViewState();

      if (this.editorValue[currentEditorLanguage]) {
        this.editor.setValue(this.editorValue[currentEditorLanguage]);
      } else {
        this.editor.setValue('');
      }

      if (this.editorState[currentEditorLanguage]) {
        this.editor.restoreViewState(this.editorState[currentEditorLanguage]);
        this.editor.focus();
      }
    },
  },
};
</script>

<style scoped>

</style>
