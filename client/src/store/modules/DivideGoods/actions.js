
export const addParticipant = ({ state, commit }) => {
  const newCounter = state.participantsCounter
  commit('SET', { name: 'participantsCounter', value: newCounter + 1 })
  commit('ADD_PARTICIPANT', { name: 'Participant number ' + state.participantsArray.length, id: newCounter })
}

export const removeParticipant = ({ state, commit }) => {
  commit('REMOVE_PARTICIPANT')
}

export const editParticipant = ({ state, commit }, body) => {
  commit('EDIT_PARTICIPANT', { id: body.id, value: body.val })
}

export const addObject = ({ state, commit }) => {
  const newCounter = state.objectsCounter
  commit('SET', { name: 'objectsCounter', value: newCounter + 1 })
  commit('ADD_OBJECT', { name: 'Object number ' + state.participantsArray[0].objects.length, id: newCounter })
}

export const removeObject = ({ state, commit }) => {
  commit('REMOVE_OBJECT')
}

export const editObject = ({ state, commit }, body) => {
  if (body.type === 'name') {
    commit('EDIT_OBJECT_NAME', { id: body.id, value: body.val })
  } else {
    commit('EDIT_OBJECT_VALUE', { participantId: body.participantId, objectId: body.objectId, value: body.val })
  }
}
