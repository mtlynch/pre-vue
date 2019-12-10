<template>
  <div class="app">
    <div class="nav horizontal-align">
      <nuxt-link class="nav-item" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="nav-item" to="/counter">
        Counter
      </nuxt-link>
    </div>
    <nuxt class="container" />
  </div>
</template>

<script>
export default {
  head() {
    const canonicalUrl =
      'https://pre-vue.web.app' + this.$route.path;
    return {
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ],
      meta: [{property: 'og:url', content: canonicalUrl}],
    };
  },
};
</script>

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
