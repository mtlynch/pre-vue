import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      title: null,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [{hid: 'og:title', property: 'og:title', content: this.title}],
    };
  },
});
