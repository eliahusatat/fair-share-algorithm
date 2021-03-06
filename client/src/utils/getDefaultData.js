export const getDivideGoodsInitState = () => {
  return {
    mainLoader: false,
    participantsCounter: 0,
    objectsCounter: 0,
    participantsArray: [],
    algoResult: [],
    participantsArrayResult: [],
    hasResult: false,
    isAlgoInputModalOpen: false,
    isResultModelOpen: false,
    algoType: 'envy-free',
    algoTypeResult: ''
  }
}

export const getDefaultConfirmModalData = () => {
  return {
    isLoading: false,
    isActionButtons: false,
    isSuccessfullyDeleted: false,
    toHideOtherAlerts: false,
    isTextFieldMode: true,
    toShowOkButton: true,
    isDatePickerMode: false,
    inputType: '',
    isInputMode: false,
    isStringTranslated: true,
    maxWidth: '440',
    message: 'supportInfo',
    inputLabel: 'login',
    inputButtonText: 'continue',
    inputFieldPlaceholder: 'contactListName',
    inputButtonIcon: 'mdi-step-backward',
    inputFieldIcon: 'mdi-card-account-mail',
    secondDynamicString: null,
    thirdDynamicString: null,
    fourthDynamicString: null,
    title: 'supportInfo',
    type: 'info',
    initialDateValue: '',
    initialInputValue: '',
    okButton: {
      text: 'yes',
      icon: 'delete',
      color: 'success'
    },
    cancelButton: {
      text: 'no',
      icon: 'close',
      color: 'secondary'
    }
  }
}

export const getAppMainInitState = () => {
  return {
    isConfirmModalVisible: false,
    confirmModalData: getDefaultConfirmModalData(),
    notifications: [],
    selected_app_language: 'en',
    snackbarOn: false,
    counter: 0,
    snackbarText: '',
    snackbarType: 'error',
    messageModalOn: false,
    messageModalText: 'test',
    messageModalType: 'error',
    messageModalAction: false
  }
}
