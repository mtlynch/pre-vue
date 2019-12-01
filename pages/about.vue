<template>
  <div>
    <h1>About</h1>
    <p>Hi from {{ name }}</p>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.static ? "static" : process.server ? "server" : "client"
    };
  },
  head: {
    title: "About"
  }
};
</script>
