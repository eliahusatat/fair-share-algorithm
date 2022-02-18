// import MyApi from '../../../service/MyApi'
import { getDivideGoodsInitState } from '../../../utils/getDefaultData'

export default {
  namespaced: true,
  state: getDivideGoodsInitState(),
  getters: {},
  mutations: {
    SET: (state, { name, value }) => {
      state[name] = value
    }
  },
  actions: {
    // searchOnYoutube: async ({ commit }, body) => {
    //   try {
    //     const { data } = await MyApi().post('youtube/search-on-youtube-new', { str: body.str })
    //     if (data.success) {
    //       commit('SET', { name: 'videos', value: data.videos })
    //     } else {
    //       console.log('fail searchOnYoutube')
    //       console.log(data)
    //       // commit('SET_ERROR_MODAL', 'errorDeleteBlockedContact', {root: true});
    //     }
    //   } catch (e) {
    //     console.error(e)
    //     // commit('SET_ERROR_MODAL', 'errorDeleteBlockedContact', {root: true});
    //   }
    // }
  }
}
