<template>
  <div>
    <participant-or-object
      v-for="(el,index) in this.participantOrObjectArray" :key="index"
      :id="el.id"
      :name="el.name"
      :component-type="componentType"></participant-or-object>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="add()"
      :disabled="!canAdd">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="remove()"
      :disabled="!canRemove"
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
  name: 'ParticipantsOrObjectsNames',
  components: {
    participantOrObject
  },
  props: {
    initialAmount: Number,
    componentType: {
      type: String,
      default: 'participant'
    }
  },
  computed: {
    ...mapState('DivideGoods', ['participantsCounter', 'participantsArray']),
    participantOrObjectArray () {
      if (this.componentType === 'participant') {
        return this.participantsArray
      } else {
        return this.participantsArray[0].objects
      }
    },
    canAdd () {
      if (this.componentType === 'participant') {
        return this.participantsArray.length < 4
      } else {
        return this.participantsArray[0].objects.length < 5
      }
    },
    canRemove () {
      if (this.componentType === 'participant') {
        return this.participantsArray.length > 2
      } else {
        return this.participantsArray[0].objects.length > 1
      }
    }

  },
  methods: {
    ...mapActions('DivideGoods', ['addParticipant', 'removeParticipant', 'addObject', 'removeObject']),
    add () {
      if (this.canAdd) {
        if (this.componentType === 'participant') {
          this.addParticipant()
        } else {
          this.addObject()
        }
      }
    },
    remove () {
      if (this.canRemove) {
        if (this.componentType === 'participant') {
          this.removeParticipant()
        } else {
          this.removeObject()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
