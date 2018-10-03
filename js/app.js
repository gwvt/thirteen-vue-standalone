/* eslint-disable */

Vue.config.productionTip = true;
Vue.config.devtools = true;

new Vue({
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
    fadedIsActive: false,
  },
  computed: {
    imgColor() {
      const classes = {
        faded: this.fadedIsActive,
      };
      classes[`has-background-${this.activeColorName}`] = true;
      return classes;
    },
    fadedButtonDisplay() {
      return this.fadedIsActive ? 'Evening' : 'Afternoon';
    },
  },
  methods: {
    changeColor(name) {
      this.activeColorName = name;
    },
    toggleFaded() {
      this.fadedIsActive = !this.fadedIsActive;
    },
  },
});
