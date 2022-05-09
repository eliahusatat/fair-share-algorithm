<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="singleResult"
      item-key="name"
      class="elevation-1">
    </v-data-table>
    <v-btn
      color="red"
      @click="myConsole">
    </v-btn>
    <p>
      {{$t('explanation')}}
    </p>
    <p
        v-for="(participant,i) in participantsArray"
       :key="i"
    >
      {{$t('hisShare',participant.name,participantsArray[participantIndex].name , getParticipantShare(i,participantIndex), getParticipantShareStr(i,participantIndex))}}
    </p>
    <p>
      {{$t('conclusion',participantsArray[participantIndex].name,participantsArray[participantIndex].name)}}
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'singleResult',
  data () {
    return {
      loader: false
    }
  },
  props: {
    headers: [],
    fullResult: [],
    fullEvaluation: [],
    // eslint-disable-next-line vue/require-prop-type-constructor
    participantIndex: {
      type: Number
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    myConsole () {
      console.log(this.singleResult)
      console.log(this.fullResult)
      console.log(this.fullEvaluation)
    },
    getParticipantShare (participantIndex, participantEvaluationIndex) {
      let sum = 0
      this.participantsArray[participantEvaluationIndex].objects.forEach((obj, index) => {
        sum += obj.value * this.algoResult[participantIndex][index]
      })
      return sum
    },
    getParticipantShareStr (participantIndex, participantEvaluationIndex) {
      let str = ''
      this.participantsArray[participantEvaluationIndex].objects.forEach((obj, index) => {
        str += '+' + obj.value + '*' + this.algoResult[participantIndex][index]
      })
      return str
    }
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArray', 'algoResult']),
    singleResult () {
      const arr = []
      const part = { ...this.fullResult[this.participantIndex] }
      part.name = this.fullResult[this.participantIndex].name + ' part'
      const evaluation = { ...this.fullEvaluation[this.participantIndex] }
      evaluation.name = this.fullResult[this.participantIndex].name + ' evaluation'
      arr.push(part)
      arr.push(evaluation)
      return arr
    }
  }
}
</script>

<style scoped>

</style>
