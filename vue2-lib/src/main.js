import Vue from 'vue'
import App from './App.vue'
import AcUI from '@/packages'

Vue.use(AcUI)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
