/* eslint-disable */

Vue.config.productionTip = true;
Vue.config.devtools = true;

new Vue({ // ∆1
  el: '#app',
  data: {
    colors: [
      {
        name: 'success',
        display: 'green',
      },
      {
        name: 'info',
        display: 'blue',
      },
      {
        name: 'danger',
        display: 'red',
      },
      {
        name: 'warning',
        display: 'golden',
      },
    ],
    activeColorName: 'success',
    faded: false,
  },
  computed: {
    imgColor() {
      const classes = {
        faded: this.faded,
      };
      classes[`has-background-${this.activeColorName}`] = true;
      return classes;
    },
  },
  methods: {
    changeColor(name) {
      this.activeColorName = name;
    },
    toggleFaded() {
      this.faded = !this.faded;
    },
  },
});
