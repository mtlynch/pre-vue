<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="page-not-found">
      <h1>Page not found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
    <div v-else class="unexpected-error">
      <h1>An error occurred</h1>
      <p>Whoops, there was an error when loading this page:</p>
      <pre>{{ error.message }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
