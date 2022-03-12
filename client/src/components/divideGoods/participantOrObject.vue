<template>
  <v-text-field
    filled
    rounded
    dense
    :value="this.name"
    @change="editParticipant1"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'participantOrObject',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['editParticipant']),
    editParticipant1 (val) {
      this.editParticipant({ val: val, id: this.id })
    }
  }
}
</script>

<style scoped>

</style>
