<template>
  <div>
    <div class="tp-hero">
      <div class="tp-hero-background"></div>
      <div class="tp-hero-content container">
        <div class="row">
          <div class="col-md-6 pt-5">
            <h1 class="tp-hero-content__headline">
              Explore Tf.js models right here in your browser!
            </h1>
            <p class="mt-3 tp-hero-content__copy">
              Say goodbye to endless repo cloning just to try out tf.js models.
              Try out a model right here in your browser and see if it is what you want!.
            </p>
            <router-link
              class="btn btn-lg tp-btn-amber"
              :to="{ name: 'Models' }"
            >
                Try it now!
            </router-link>
          </div>
          <div class="col-md-6">
            <div class="tp-hero-content__image">
              <img src="../assets/hero-image.png" alt="Man on computer">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tp-about py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="d-block mb-3 tp-grey-green">
                  <svg class="tp-feather tp-feather-lg">
                    <use href="../assets/feather-sprite.svg#tool"></use>
                  </svg>
                </i>
                <h5>#MadeWithTFJS</h5>
                <p>
                  Built using <a href="https://www.tensorflow.org/js/" target="__blank" class="fw-bold">Tensorflow.js</a>
                   <br />
                   The open-source hardware-accelerated JavaScript library for
                   training and deploying machine learning models.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="d-block mb-3 tp-amber">
                  <svg class="tp-feather tp-feather-lg">
                    <use href="../assets/feather-sprite.svg#zap"></use>
                  </svg>
                </i>
                <h5>Get started quickly</h5>
                <p>
                  Scroll through the list of models, pick one and get started immediately
                   without any configurations!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="d-block mb-3 tp-grey-green">
                  <svg class="tp-feather tp-feather-lg">
                    <use href="../assets/feather-sprite.svg#codesandbox"></use>
                  </svg>
                </i>
                <h5>Prefilled Examples</h5>
                <p>
                  Tweak the examples or clear it up and use the model alone! Sign up not required!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'Landing',
  components: {
    TheFooter,
  },
};
</script>

<style scoped>
.tp-hero {
  position: relative;
  min-height: 450px;
}

.tp-hero-background {
  min-height: 400px;
  background-color: #F7F3F0;
  position: absolute;
  top: -60%;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

.tp-hero-content__headline {
  font-family: Berkshire Swash, Avenir, Helvetica, cursive;
  min-width: 50%;
  max-width: 90%;
}

.tp-hero-content__copy {
  font-size: 1.1em;
  min-width: 50%;
  max-width: 90%;
}

.tp-hero-content__image img {
 max-width: 100%;
 height: auto;
}

.tp-about {
  min-height: 400px;
}

.card {
  border: none;
}

@media only screen and (min-width: 769px) {
  .tp-hero {
    min-height: 450px;
  }

  .tp-hero-background {
    min-height: 400px;
  }
}
</style>
