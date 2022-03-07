
export const SET = (state, { name, value }) => {
  state[name] = value
}

// App confirm modal
// export const OPEN_CONFIRM_MODAL = (state, modalData) => {
//   state.confirmModalData = getDefaultConfirmModalData()
//   state.isConfirmModalVisible = true
//   // eslint-disable-next-line no-return-assign
//   Object.entries(modalData).forEach(el => state.confirmModalData[el[0]] = el[1])
// }
