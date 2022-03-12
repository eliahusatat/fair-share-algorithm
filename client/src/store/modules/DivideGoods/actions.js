
export const addParticipant = ({ state, commit }, body) => {
  const newCounter = state.participantsCounter
  commit('SET', { name: body.name, value: newCounter + body.number })
  commit('ADD_PARTICIPANT', { name: 'Participant number ' + state.participantsArray.length, id: newCounter })
}

export const removeParticipant = ({ state, commit }) => {
  console.log('in removeParticipant')
  commit('REMOVE_PARTICIPANT')
}
export const editParticipant = ({ state, commit }, body) => {
  commit('EDIT_PARTICIPANT', { id: body.id, value: body.val })
}
