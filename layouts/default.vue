<template>
  <div class="app">
    <Navbar />
    <nuxt class="container" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar';

export default {
  components: {
    Navbar,
  },
  head() {
    const canonicalUrl = 'https://pre-vue.web.app' + this.$route.path;
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
</style>
