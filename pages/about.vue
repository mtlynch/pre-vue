<template>
  <div>
    <h1>About this Build</h1>
    <p v-if="buildTime">
      Nuxt pre-rendered this page at <b>{{ buildTime }}</b> (before the browser
      ever saw it).
    </p>
    <template v-else>
      <p>
        Vue generated this page client-side because you navigated here from
        another route on the same site.
      </p>
      <p>
        <a href="/about">Refresh the page</a> to see the pre-rendered version.
      </p>
    </template>
    <p>
      The browser loaded this page at <b>{{ loadTime }}</b
      >.
    </p>
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
