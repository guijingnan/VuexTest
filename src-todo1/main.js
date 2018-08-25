import Vue from 'vue'
import App from './components/app.vue'
import store from './store'

import './base.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components:{App},
  template:'<App/>',
  store
})
