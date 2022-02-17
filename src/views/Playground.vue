<template>
  <div>
    <div class="p-3 tp-playground__header">
      <h1 class="fs-5 mb-0">
        {{model.name}}
        <a :href="model.url" target="__blank">
          <i>
            <svg class="tp-feather ms-1">
                <use href="../assets/feather-sprite.svg#link"></use>
            </svg>
          </i>
        </a>
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
           :model="model"></playground-editor>
          </div>
        </div>
        <iframe src="" frameborder="0" id="playground-preview" class="h-full w-full"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Split from 'split.js';
import PlaygroundTabs from '@/components/PlaygroundTabs.vue';
import PlaygroundEditor from '@/components/PlaygroundEditor.vue';

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
  created() {
    this.$store.commit('setCurrentLanguage', { language: this.currentLanguage });
    this.$store.commit('setCurrentModelSlug', { language: this.modelSlug });
  },
  updated() {
    this.$store.commit('setCurrentLanguage', { language: this.currentLanguage });
  },
  mounted() {
    Split(['#playground-editor', '#playground-preview']);
  },
  data() {
    return {
      editorLanguages,
      currentLanguage: editorLanguages[0].value,
      editorValue: '',
      editorLanguage: '',
    };
  },
  components: {
    PlaygroundTabs,
    PlaygroundEditor,
  },
  computed: {
    model() {
      return this.$store.getters.getModelInfo(this.modelSlug);
    },
  },
  methods: {
    updateLanguage(language) {
      this.currentLanguage = language;
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
