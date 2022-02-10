<template>
  <div id="nav">
    <router-link :to="{ name: 'Landing' }">Landing</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0D0D0D;
}

a {
  color: #041D26;
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #F2A649;
}
</style>
