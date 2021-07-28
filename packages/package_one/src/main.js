import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import * as pkgTwoStore from '@vue-workspace-test/package-two/src/store'

Vue.config.productionTip = false

// store.registerModule('pkgTwoStore', pkgTwoStore)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
