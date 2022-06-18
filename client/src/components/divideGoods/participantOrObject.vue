<template>
  <v-text-field
    filled
    rounded
    dense
    v-validate="'required'"
    :value="name"
    :name="componentType + '_' + id"
    @change="edit"
    :rules="[rules.requiredStr(participantOrObjectNname)]"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'
import { requiredStr } from '@/utils/formValidations'
export default {
  name: 'participantOrObject',
  data () {
    return {
      participantOrObjectNname: this.name,
      rules: {
        requiredStr
      }
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    componentType: {
      type: String,
      default: 'participant'
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['editParticipant', 'editObject']),
    edit (val) {
      this.participantOrObjectNname = val
      if (this.componentType === 'participant') {
        this.editParticipant({ val: val, id: this.id })
      } else {
        this.editObject({ val: val, id: this.id, type: 'name' })
      }
    }
  }
}
</script>

<style scoped>

</style>
