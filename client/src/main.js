import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

Vue.config.productionTip = false

Vue.prototype.$t = function (...args) {
  try {
    args[0] = `$vuetify.${args[0]}`
    return this.$vuetify.lang.t(...args)
  } catch (e) {
    return args[0].split('.')[1]
  }
} // translation

export const app = new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
