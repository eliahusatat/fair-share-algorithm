<template>
  <v-app>
  <div class="home">
    <img @click="testAddNotification"
           alt="Vue logo"
           src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['openConfirmModal']),
    async onClickLogo () {
      // error with some options
      // this.$store.commit('OPEN_CONFIRM_MODAL', {
      //   message: 'error',
      //   secondDynamicString: 'secondDynamicString',
      //   type: 'error',
      //   title: 'error'
      // }, { root: true })

      // success
      this.$store.commit('SET_SUCCESS_MODAL', { message: 'success' }, { root: true })

      // error
      // this.$store.commit('SET_ERROR_MODAL', 'error', { root: true })

      // warning
      // this.$store.commit('SET_WARNING_MODAL', { message: 'info' }, { root: true })

      // info
      // this.$store.commit('OPEN_CONFIRM_MODAL', {
      //   message: 'error',
      //   secondDynamicString: 'secondDynamicString',
      //   title: 'error'
      // }, { root: true })
    },
    async testConfirmModal () {
      const isUserOpenShortLinkModal = await this.openConfirmModal({
        okButton: { text: 'yes', icon: 'mdi-check', color: 'success' },
        cancelButton: { text: 'cancel', icon: 'mdi-close', color: 'error' },
        message: 'test',
        isActionButtons: true
      })
      if (isUserOpenShortLinkModal) { console.log('true') } else { console.log('false') }
      return isUserOpenShortLinkModal
    },
    async testConfirmModalText () {
      const listName = await this.openConfirmModal({
        message: 'test',
        isInputMode: true,
        inputType: 'addNewContactList'
      })
      console.log(listName)
    },
    async testConfirmModalDate () {
      const selectedDate = await this.openConfirmModal({
        message: 'test',
        title: 'test',
        isDatePickerMode: true,
        isInputMode: true,
        isTextFieldMode: false,
        inputButtonText: 'update',
        inputButtonIcon: 'mdi-calendar-arrow-left'
      })
      console.log(selectedDate)
    },
    async testAddNotification () {
      await this.$store.dispatch('addNotification', { message: 'testWithNum', type: 'error', dynamicString: '1' })
    }
  }
}
</script>
