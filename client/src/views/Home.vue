<template>
  <div class="home">
    <v-card class="mx-auto" color="#808080" dark>
      <v-card-title class="justify-center">
        <span class="text-h6 font-weight-light">{{$t('homeTextTitle')}}</span>
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold">
        {{$t('homeText')}}
      </v-card-text>
    </v-card>
    <div class="card-row" v-if="$vuetify.breakpoint.mdAndUp">
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
    <div v-else>
      <v-container>
      <v-row justify="center"  class="ma-6" v-for="(card, index) in cards" :key="index">
      <router-link :to="card.to">
        <v-btn x-large color="#1d3557" :min-width="btnSize+'px'" dark>
          {{$t(card.title)}}
        </v-btn>
      </router-link>
      </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

export default {
  name: 'Home',
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
  computed: {
    btnSize () {
      return (this.$vuetify.breakpoint.width) / 2
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
        const directionFix = this.$vuetify.rtl ? -1 : 1
        gsap.to(
          this.$refs[`card_${index}`],
          0.3,
          { x: direction * 50 * directionFix }
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
    }
  }
}
</script>
<style>
body {
  background-color: #848888;
}
.home{
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
  background-color: #e9f3f7;
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
