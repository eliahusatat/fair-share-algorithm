
export const increaseCounter = async ({ state, commit }, body) => {
  commit('SET', { name: 'participantsCounter', value: state.participantsCounter + 1 })
}
export const decreaseCounter = async ({ state, commit }, body) => {
  commit('SET', { name: 'participantsCounter', value: state.participantsCounter - 1 })
}
