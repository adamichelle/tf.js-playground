<template>
  <div>
    {{language}}
    {{editorValue}}
  </div>
</template>

<script>
export default {
  name: 'PlaygroundEditor',
  props: {
    'editor-value': {
      type: String,
      required: true,
    },
  },
  computed: {
    language() {
      return this.$store.state.currentLanguage;
    },
  },
};
</script>

<style scoped>

</style>
