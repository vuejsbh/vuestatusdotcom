import Vue from 'vue'
import Firebase from './plugins/firebase'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

Vue.use(Firebase)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
