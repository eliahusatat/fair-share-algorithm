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
    <div class="card-row">
      <router-link :to="card.to"  v-for="(card, index) in cards" :key="index">
      <div
        :ref="`card_${index}`"
        @mouseover="hoverCard(index)"
        @mouseout="hoverCard(-1)"
        class="card">

        <img class="card-image" :class="{'selected': isSelected(index)}"
             :src="require('@/assets/' + card.image)">

        <div class="card-footer">
          <h3 class="card-title">{{$t(card.title)}}</h3>
        </div>
      </div>
      </router-link>
    </div>
  </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      cards: [
        { title: 'about', to: '/about', image: 'About.jpg' },
        { title: 'divideGoods', to: '/divideGoods', image: 'Handshake.jpg' },
        { title: 'explanations', to: '/explanations', image: 'Explanations.jpg' }
      ],
      selectedCard: -1
    }
  },
  methods: {
    ...mapActions(['openConfirmModal']),
    hoverCard (selectedIndex) {
      this.selectedCard = selectedIndex
      this.animateCards()
    },
    animateCards () {
      this.cards.forEach((card, index) => {
        const direction = this.calculateCardDirection(index, this.selectedCard)
        gsap.to(
          this.$refs[`card_${index}`],
          0.3,
          { x: direction * 50 }
        )
      })
    },
    calculateCardDirection (cardIndex, selectedIndex) {
      if (selectedIndex === -1) {
        return 0
      }
      const diff = cardIndex - selectedIndex
      return diff === 0 ? 0 : diff / Math.abs(diff)
    },
    isSelected (cardIndex) {
      return this.selectedCard === cardIndex
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
<style>
body {
  background-color: #E1E7E7;
}

.card-row {
  background-color: #E1E7E7;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 780px;
  width: 100%;
  height: 500px;
}

.card {
  position: relative;
  background-color: #FFFFFF;
  height: 350px;
  width: 240px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
  transition: height 0.3s, box-shadow 0.3s;
}

.card:hover {
  height: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0,0,0,0.5);
}

.card-image {
  /* center horizontally overflown image */
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;

  height: 220px;
  min-width: 100%;
  transition: height 0.3s, opacity 0.3s;
}
.card-image.selected {
  height: 410px;
  opacity: 0.3;
}
.card-footer {
  position: absolute;
  bottom: 0;
  height: 130px;
  padding: 10px 15px;
  font-family: Helvetica;
}

.card-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}
.card-title {
  font-family: Serif;
}
.card-author {
  font-size: 14px;
  color: #BAB096;
  transition: color 0.3s;
}
.card-author.selected {
  color: #6a6456;
}
</style>
