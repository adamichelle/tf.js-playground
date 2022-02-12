<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(language, index) in editorLanguages" :key="index">
        <a
          :class="['nav-link', { active: currentTab === language.value }]"
          aria-current="page"
          href="#"
          @click="changeTab(language.value)"
        >
          {{ language.text }}
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
  },
  computed: {
    currentTab() {
      return this.$store.state.currentLanguage;
    },
  },
  methods: {
    changeTab(selectedLanguage) {
      if (selectedLanguage !== this.$store.state.currentLanguage) {
        this.$store.commit('setCurrentLanguage', { language: selectedLanguage });
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
