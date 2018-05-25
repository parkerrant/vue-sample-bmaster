import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'

import ES6promise from 'es6-promise';
ES6promise.polyfill();


require("@/dist/css/materialize.css");
require("@/dist/css/style.css");
require("@/dist/js/materialize.js");

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
