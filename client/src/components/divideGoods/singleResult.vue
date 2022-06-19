<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="singleResult"
      item-key="name"
      class="elevation-1"
      hide-default-footer>
    </v-data-table>
    <p>
      {{$t('explanation')}}
    </p>
    <p
        v-for="(participant,i) in participantsArrayResult"
       :key="i"
    >
      {{$t('hisShare',participant.name,participantsArrayResult[participantIndex].name , getParticipantShare(i,participantIndex), getParticipantShareStr(i,participantIndex))}}
    </p>
    <p v-if="this.algoTypeResult === 'envy-free'">
      {{$t('envyFreeConclusion',participantsArrayResult[participantIndex].name,participantsArrayResult[participantIndex].name)}}
    </p>
    <p v-else>
      {{$t('proportionalConclusion',participantsArrayResult[participantIndex].name,sumEvaluation,participantsArrayResult[participantIndex].name)}}
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
    getParticipantShare (participantIndex, participantEvaluationIndex) {
      let sum = 0
      this.participantsArrayResult[participantEvaluationIndex].objects.forEach((obj, index) => {
        sum += obj.value * this.algoResult[participantIndex][index]
      })
      return sum
    },
    getParticipantShareStr (participantIndex, participantEvaluationIndex) {
      let str = ''
      this.participantsArrayResult[participantEvaluationIndex].objects.forEach((obj, index) => {
        str += '[' + obj.value + '*' + this.algoResult[participantIndex][index] + ']'
        if (index !== this.participantsArrayResult[participantEvaluationIndex].objects.length - 1) {
          str += '+'
        }
      })
      return str
    }
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArrayResult', 'algoResult', 'algoTypeResult']),
    singleResult () {
      const arr = []
      const part = { ...this.fullResult[this.participantIndex] }
      part.name = this.fullResult[this.participantIndex].name + ' part'
      const evaluation = { ...this.fullEvaluation[this.participantIndex] }
      evaluation.name = this.fullResult[this.participantIndex].name + ' evaluation'
      arr.push(part)
      arr.push(evaluation)
      return arr
    },
    sumEvaluation () {
      let sum = 0
      this.participantsArrayResult[this.participantIndex].objects.forEach((obj, index) => {
        sum += obj.value
      })
      return Math.round(sum / this.participantsArrayResult[this.participantIndex].objects.length)
    }
  }
}
</script>

<style scoped>

</style>
