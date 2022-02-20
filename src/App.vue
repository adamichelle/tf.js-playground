<template>
  <the-navigation></the-navigation>
  <main>
    <router-view/>
  </main>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
#app {
  font-family: Roboto Slab, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0D0D0D;
}

a {
  color: #F2A649;
  text-decoration: none;
}

a:hover {
  color: #041D26;
}

.navbar-light .navbar-nav .nav-link {
  font-weight: bold;
  color: inherit;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #F2B749;
}

.navbar .router-link-exact-active.nav-link {
  color: #F2A649;
}

.tp-btn-amber {
  background-color: #F2A649;
  color: #0D0D0D;
  font-weight: bold;
}

.tp-btn-amber:hover {
  background-color: initial;
  border-color: #F2A649;
  color: #F2A649;
}

.tp-divider {
  color: #F7F3F0;
}

.tp-feather {
  width: 30px;
  height: 30px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.tp-feather-lg {
  width: 60px;
  height: 60px;
}

.tp-feather-sm {
  width: 20px;
  height: 20px;
}

.tp-amber {
  color: #F2A649;
}

.tp-grey-green {
  color: #041D26;
}

.tp-liliac {
  color: #BABDBF;
}
</style>
