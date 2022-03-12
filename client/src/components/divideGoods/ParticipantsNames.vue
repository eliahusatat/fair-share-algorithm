<template>
  <div>
    <participant-or-object
      v-for="(participant,index) in this.participantsArray" :key="index"
      :id="participant.id"
      :name="participant.name"
    ></participant-or-object>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addParticipant1( 'participantsCounter')"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="removeParticipant1( 'participantsCounter')"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import participantOrObject from './participantOrObject'

export default {
  name: 'participantsNames',
  components: {
    participantOrObject
  },
  props: {
    initialAmount: Number
  },
  computed: {
    ...mapState('DivideGoods', ['participantsCounter', 'participantsArray'])
  },
  methods: {
    ...mapActions('DivideGoods', ['addParticipant', 'removeParticipant']),
    addParticipant1 (name) {
      const newCounter = this.addParticipant({ name: 'participantsCounter', number: 1 })
      console.log(newCounter)
      console.log(this.participantsArray)
    },
    removeParticipant1 () {
      console.log('in removeParticipant1')
      this.removeParticipant()
      console.log(this.participantsArray)
    }
  },
  created () {
    console.log('in created')
    console.log(this.initialAmount)
    for (let i = 0; i < this.initialAmount; i++) {
      this.addParticipant({ name: 'participantsCounter', number: 1 })
    }
  }
}
</script>

<style scoped>

</style>
