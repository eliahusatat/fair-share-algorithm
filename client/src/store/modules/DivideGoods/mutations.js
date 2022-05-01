import Vue from 'vue'

export const SET = (state, { name, value }) => {
  state[name] = value
}

export const ADD_PARTICIPANT = (state, { name, id }) => {
  let objects = []
  if (state.participantsArray.length > 0) {
    objects = state.participantsArray[0].objects.map(obj => {
      return { name: obj.name, id: obj.id, value: 0 }
    })
  }
  state.participantsArray.push({ name: name, id: id, objects: objects })
}
export const REMOVE_PARTICIPANT = (state) => {
  state.participantsArray = state.participantsArray.slice(0, -1)
}
// edit the participant name
export const EDIT_PARTICIPANT = (state, { id, value }) => {
  state.participantsArray = state.participantsArray.map(participant => {
    if (participant.id === id) {
      return { ...participant, name: value }
    }
    return participant
  })
}

// remove the object from  each participant
export const REMOVE_OBJECT = (state) => {
  state.participantsArray.forEach((participant, index, participantsArray) => {
    const newParticipant = { name: participant.name, id: participant.id, objects: participant.objects.slice(0, -1) }
    Vue.set(state.participantsArray, index, newParticipant)
  })
}

// add the new object to each participant
export const ADD_OBJECT = (state, { name, id }) => {
  state.participantsArray.forEach((participant, index, participantsArray) => {
    const newObjects = participant.objects
    newObjects.push({ name: name, id: id, value: 0 })
    const newParticipant = { name: participant.name, id: participant.id, objects: newObjects }
    Vue.set(state.participantsArray, index, newParticipant)
  })
}

// edit the object name in each participant
export const EDIT_OBJECT_NAME = (state, { id, value }) => {
  state.participantsArray.forEach((participant, index, participantsArray) => {
    const newObjects = participant.objects.map(obj => {
      if (obj.id === id) {
        return { ...obj, name: value }
      }
      return obj
    })
    const newParticipant = { name: participant.name, id: participant.id, objects: newObjects }
    Vue.set(state.participantsArray, index, newParticipant)
  })
}

// edit the object value for specific participant
export const EDIT_OBJECT_VALUE = (state, { participantId, objectId, value }) => {
  state.participantsArray.forEach((participant, index, participantsArray) => {
    if (participant.id === participantId) {
      const newObjects = participant.objects.map(obj => {
        if (obj.id === objectId) {
          return { ...obj, value: value }
        }
        return obj
      })
      const newParticipant = { name: participant.name, id: participant.id, objects: newObjects }
      Vue.set(state.participantsArray, index, newParticipant)
    }
  })
}

// App confirm modal
// export const OPEN_CONFIRM_MODAL = (state, modalData) => {
//   state.confirmModalData = getDefaultConfirmModalData()
//   state.isConfirmModalVisible = true
//   // eslint-disable-next-line no-return-assign
//   Object.entries(modalData).forEach(el => state.confirmModalData[el[0]] = el[1])
// }
