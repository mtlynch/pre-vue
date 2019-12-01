<template>
  <div class="container">
    <div class="page-not-found" v-if="error.statusCode === 404">
      <h1>Page not found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
    <div class="unexpected-error" v-else>
      <h1>An error occurred</h1>
      <p>Whoops, there was an error when loading this page:</p>
      <pre>{{ error.message }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>
