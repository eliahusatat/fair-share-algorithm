
export const SET = (state, { name, value }) => {
  state[name] = value
}

export const ADD_PARTICIPANT = (state, { name, id }) => {
  state.participantsArray.push({ name: name, id: id, objects: [] })
}
export const REMOVE_PARTICIPANT = (state) => {
  console.log('in removeParticipant')
  // state.participantsArray.filter(participant => participant.id === id)
  state.participantsArray = state.participantsArray.slice(0, -1)
}
export const EDIT_PARTICIPANT = (state, { id, value }) => {
  state.participantsArray = state.participantsArray.map(participant => {
    if (participant.id === id) {
      return { ...participant, name: value }
    }

    return participant
  })
}

// App confirm modal
// export const OPEN_CONFIRM_MODAL = (state, modalData) => {
//   state.confirmModalData = getDefaultConfirmModalData()
//   state.isConfirmModalVisible = true
//   // eslint-disable-next-line no-return-assign
//   Object.entries(modalData).forEach(el => state.confirmModalData[el[0]] = el[1])
// }
