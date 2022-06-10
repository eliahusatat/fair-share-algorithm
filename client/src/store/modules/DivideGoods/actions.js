import MyApi from '@/service/MyApi'
import { algoResultToArray } from '@/utils/helper'

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
  const newCounter = state.objectsCounter
  commit('SET', { name: 'objectsCounter', value: newCounter - 1 })
  commit('REMOVE_OBJECT')
}

export const editObject = ({ state, commit }, body) => {
  if (body.type === 'name') {
    commit('EDIT_OBJECT_NAME', { id: body.id, value: body.val })
  } else {
    commit('EDIT_OBJECT_VALUE', { participantId: body.participantId, objectId: body.objectId, value: body.val })
  }
}

export const resetInputModal = ({ state, commit }) => {
  commit('SET', { name: 'participantsCounter', value: 2 })
  commit('SET', { name: 'objectsCounter', value: 0 })
  commit('SET', { name: 'participantsArray', value: [{ name: 'Participant number ' + 0, id: 0, objects: [] }, { name: 'Participant number ' + 1, id: 1, objects: [] }] })
}

export const sendAlgo = async ({ commit, dispatch }, body) => {
  try {
    console.log('in sendAlgo')
    const { data } = await MyApi().post('algo/test-algo', body)
    console.log(data)
    if (data.success) {
      const resultArray = algoResultToArray(data.data)
      console.log(resultArray)
      commit('SET', { name: 'algoResult', value: resultArray })
      commit('SET', { name: 'hasResult', value: true })
    } else {
      dispatch('openMessageModal', { text: 'algoError', type: 'error' }, { root: true })
    }
  } catch (e) {
    dispatch('openMessageModal', { text: 'algoError', type: 'error' }, { root: true })
  }
}
