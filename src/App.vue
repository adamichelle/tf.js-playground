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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0D0D0D;
}

a {
  color: #041D26;
  text-decoration: none;
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
  color: #FFFFFF;
}

.tp-btn-amber:hover {
  background-color: initial;
  border-color: #F2A649;
  color: #F2A649;
}
</style>
