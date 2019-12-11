<template>
  <div>
    <h1>Hello, world!</h1>
    <p>I'm an example of a pre-rendered Vue webpage.</p>
    <p>
      I automatically generate a <a href="/robots.txt">robots.txt file</a> and
      <a href="/sitemap.xml">sitemap</a> on every build.
    </p>
    <p>
      To learn more, visit my
      <a href="https://github.com/mtlynch/pre-vue">Github repo</a>.
    </p>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      title: 'Home page',
    };
  },
};
</script>
