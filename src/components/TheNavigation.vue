<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container">
      <router-link class="navbar-brand"
       :to="{ name: 'Landing' }"
       aria-current="page">
        <img src="../assets/logo.png" alt="tf.js Playground" class="tp-logo">
      </router-link>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#toggleableNavItems"
        aria-controls="toggleableNavItems" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggleableNavItems">
        <ul :class="[{ 'me-auto': showTryItOutButton }, 'navbar-nav ms-auto mb-2 mb-lg-0']">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Demo' }">Demo</router-link>
          </li>
          <li class="nav-item">
            <a target="__blank" class="nav-link" href="https://github.com/adamichelle/tf.js-playground">GitHub</a>
          </li>
        </ul>
      </div>
      <router-link
       class="btn tp-btn-amber"
       :to="{ name: 'Models' }"
       v-if="showTryItOutButton">Try it out</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    showTryItOutButton() {
      return this.$store.state.showTryItOutButton;
    },
  },
};
</script>

<style scoped>
.tp-logo {
  height: auto;
  width: auto;
  max-height: 60px;
}
</style>
