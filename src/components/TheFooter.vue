<template>
  <footer class="tp-footer">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-6">
          <div class="tp-footer__logo">
            <img src="../assets/logo-dark.png" alt="Tf.js Playground">
          </div>
        </div>
        <div class="col-md-6">
          <div class="tp-footer__cta float-md-end">
            <router-link
              class="btn btn-md tp-btn-amber"
              :to="{ name: 'Models' }"
              v-if="showTryItOutButton">
              Get Started
            </router-link>
          </div>
        </div>
      </div>

      <hr class="tp-divider" />

      <div class="tp-footer__details text-center mt-4 mb-1">
        <p>Made by <a href="https://github.com/adamichelle" target="__blank">Adaobi Aniuchi</a> - tf.js Playground {{copyrightYear}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    copyrightYear() {
      return (new Date()).getFullYear();
    },
    showTryItOutButton() {
      return this.$store.state.showTryItOutButton;
    },
  },
};
</script>

<style scoped>
.tp-footer {
  background-color: #041D26;
  min-height: 200px;
  color: #FFFFFF;
  text-align: center;
}

.tp-footer__cta {
  color: #FFFFFF;
  margin-top: 1.1em;
}

@media only screen and (min-width: 769px) {
  .tp-footer {
    text-align: left;
  }

  .tp-footer__cta {
    margin-top: 0;
  }
}
</style>
