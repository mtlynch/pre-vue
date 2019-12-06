<template>
  <div>
    <h1>Hello, world!</h1>
    <p>I'm an example of a pre-rendered Vue webpage.</p>
    <p>
      To learn more, visit my
      <a href="https://github.com/mtlynch/hello-world-vue-static">Github repo</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        name: 'og:title',
        content: 'Home page',
      },
    ],
  },
};
</script>
