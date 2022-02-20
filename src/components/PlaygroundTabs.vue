<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(languageItem, index) in editorLanguages" :key="index">
        <a
          :class="['nav-link', { active: currentLanguage === languageItem.value }]"
          aria-current="page"
          href="#"
          @click="changeTab(languageItem.value)"
        >
          {{ languageItem.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlaygroundTabs',
  props: {
    'editor-languages': {
      type: Array,
      required: true,
    },
    'current-language': {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    changeTab(selectedLanguage) {
      if (selectedLanguage !== this.currentLanguage) {
        this.$emit('tabSelected', selectedLanguage);
      }
    },
  },
};
</script>

<style scoped>
.nav .nav-link {
  color: #0D0D0D;
}

.nav .nav-link.active {
  color: #041D26;
  font-weight: bold;
}
</style>
