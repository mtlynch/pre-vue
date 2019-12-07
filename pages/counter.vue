<template>
  <div>
    <h1>Counter</h1>
    <p>This is an example of a page with dynamic content.</p>
    <p>
      The count is now <strong>{{ count }}</strong
      >.
    </p>
    <button v-on:click="count++">Increment counter</button>
    <button v-on:click="count = 0">Reset</button>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      title: 'Counter',
    };
  },
  data: function() {
    return {
      count: 0,
    };
  },
};
</script>
