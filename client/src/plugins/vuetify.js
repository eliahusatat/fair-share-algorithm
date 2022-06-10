import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// Languages
import en from '../locale/en'
import he from '../locale/he'

Vue.use(Vuetify)

export default new Vuetify({
  iconfont: 'mdi',
  lang: {
    locales: { en, he },
    current: 'he' // hebrew id the default lang
  },
  theme: {
    accent: '#ffeb3b',
    error: '#f44336',
    warning: '#ffc107',
    info: '#009688',
    success: '#8bc34a'
  }
})
