<template>
  <div>
    <section>
      <div class="tp-playground-banner pt-5">
      <div class="tp-playground-banner-content text-center">
        <h1>Tensorflow.js Models</h1>
        <p>Pick a pre-trained Tensorflow.js model below to get started.</p>
        <div class="icons">
          <a href="https://www.tensorflow.org/js/models" target="__blank" aria-label="Tensorflow Website">
            <i class="me-3">
              <svg class="tp-feather">
                <use href="../assets/feather-sprite.svg#link"></use>
              </svg>
            </i>
          </a>
          <a href="https://github.com/tensorflow/tfjs-models" target="__blank" aria-label="Tensorflow GitHub Repo">
            <i class="me-3">
              <svg class="tp-feather">
                <use href="../assets/feather-sprite.svg#github"></use>
              </svg>
            </i>
          </a>
          <a href="https://twitter.com/hashtag/madewithtfjs" target="__blank" aria-label="Made with TFJS on Twitter">
            <i class="me-3">
              <svg class="tp-feather">
                <use href="../assets/feather-sprite.svg#twitter"></use>
              </svg>
            </i>
          </a>
          <a href="https://www.npmjs.com/package/@tensorflow/tfjs" target="__blank" aria-label="Tensorflow on NPM">
            <i class="me-3">
              <svg class="tp-feather">
                <use href="../assets/feather-sprite.svg#link-2"></use>
              </svg>
            </i>
          </a>
        </div>
      </div>
      </div>
    </section>

    <section class="container tp-models-section py-5">
      <div class="row">
        <div
          v-for="(model, index) in models"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <model-card :model="model"></model-card>
        </div>
      </div>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<script>
import ModelCard from '../components/ModelCard.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'ModelsPage',
  data() {
    return {
      models: this.$store.state.models,
    };
  },
  components: {
    ModelCard,
    TheFooter,
  },
};
</script>

<style scoped>
.tp-playground-banner {
  background: url(../assets/playground-bg.png) no-repeat center center;
  height: 250px;
}
.tp-playground-banner-content,
.icons a {
  color: #F7F3F0;
}
.tp-models-section {
  min-height: 500px;
}
</style>
