import { app } from '../main'

export const openConfirmModal = async (state, modalData) => await app.$confirm.openModal(modalData)

export const addNotification = ({ commit }, notification) => commit('PUSH_NOTIFICATION', notification)

export const removeNotification = ({ commit }, notification) => commit('REMOVE_NOTIFICATION', notification)

export const openSnackbar = ({ commit }, snackbar) => commit('OPEN_SNACKBAR', snackbar)

export const closeSnackbar = ({ commit }) => commit('CLOSE_SNACKBAR')

export const openMessageModal = ({ commit }, messageModalOption) => commit('OPEN_MESSAGE_MODAL', messageModalOption)

export const closeMessageModal = ({ commit }) => commit('CLOSE_MESSAGE_MODAL')

export const setStoreData = ({ commit }, name, data) => commit('SET', { name: name, value: data })
