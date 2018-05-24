import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'

import ES6promise from 'es6-promise';
ES6promise.polyfill();


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
