<template>
  <div>
    <h1>About this Build</h1>
    <p>
      Nuxt pre-rendered this page at <b>{{ buildTime }}</b> (before the browser
      ever saw it).
    </p>
    <p>
      The browser loaded this page at <b>{{ loadTime }}</b
      >.
    </p>
    <p><nuxt-link to="/">Home</nuxt-link></p>
  </div>
</template>

<script>
export default {
  asyncData() {
    // Don't re-evaluate ayncData when the client loads this page in the
    // browser.
    if (!process.client) {
      return {
        title: 'About this Build',
        buildTime: new Date().toUTCString(),
      };
    }
  },
  // Vue evaluates data variables at page render time and again every time the
  // browser loads this page.
  data: function() {
    return {
      loadTime: new Date().toUTCString(),
    };
  },
};
</script>
