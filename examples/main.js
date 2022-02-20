import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/index.scss'

import ZgysUi from '../packages/index'

Vue.use(ZgysUi)

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
