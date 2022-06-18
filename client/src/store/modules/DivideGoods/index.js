import { getDivideGoodsInitState } from '../../../utils/getDefaultData'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state: getDivideGoodsInitState(),
  getters: {},
  mutations,
  actions
}
