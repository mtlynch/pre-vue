<template>
  <div class="app">
    <div class="nav horizontal-align">
      <nuxt-link class="nav-item" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="nav-item" to="/about">
        About
      </nuxt-link>
    </div>
    <nuxt class="container" />
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 20px;
  min-height: 100vh;
}
.nav-item {
  text-decoration: none;
  font-size: 1.2em;
}
</style>
