<template>
  <v-app>

  <div class="home">
    <v-card class="mx-auto" color="#808080" dark>
      <v-card-title class="justify-center">
        <span class="text-h6 font-weight-light">{{$t('homeTextTitle')}}</span>
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold">
        {{$t('homeText')}}
      </v-card-text>
    </v-card>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title >{{$t(card.title)}}</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      url: '@/assets/Handshake.jpg',
      cards: [
        { title: 'home', src: 'https://www.mailshark.com.au/wp-content/uploads/2014/10/MailShark-Homepage-Button.jpg', flex: 3 },
        { title: 'about', src: 'https://www.flowinstru.com/wp-content/uploads/2021/05/istockphoto-1261597991-170667a.jpg', flex: 3 },
        { title: 'fairShare', src: 'http://static8.depositphotos.com/1026550/951/i/450/depositphotos_9518683-Man-and-woman-business-handshake.jpg', flex: 3 },
        { title: 'explanations', src: 'https://blog.medicalalgorithms.com/wp-content/uploads/2015/03/medical-algorithm-definition.jpg', flex: 3 }
      ]
    }
  },
  methods: {
    ...mapActions(['openConfirmModal']),
    getImgUrl (pet) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet + '.png')
    },
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
