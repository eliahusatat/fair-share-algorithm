<template>
  <div>
    <v-card
      flat
      color="transparent"
    >
      <v-subheader>{{ object.name }}</v-subheader>

      <v-card-text>
        <v-row>
          <v-slider
            color="#d7dcdf"
            track-color="#d7dcdf"
            :value="object.value"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
            loader-height="0"
            @change="edit"
          >
            <template v-slot:append>
              <v-text-field
                :value="object.value"
                outlined
                class="text--white text-white"
                color="#2c3e50"
                type="number"
                @input="edit"
              ></v-text-field>
            </template>
          </v-slider>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'objectEvaluation',
  data () {
    return {
      min: 0,
      max: 1000,
      slider1: 40
    }
  },
  props: {
    object: {},
    participantId: Number,
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['editObject']),
    edit (val) {
      this.editObject({ val: val, participantId: this.participantId, objectId: this.object.id, type: 'value' })
    }
  }
}
</script>

<style scoped>
>>>.v-slider__track-container{
  height: 20px !important;
  background-color:  #2c3e50 !important;
  border-radius: 30% !important;
}
.v-text-field{
  width: 75px;
  height: 56px;
  background-color: #2c3e50;
}
.v-text-field__slot input {
  color: #d7dcdf !important;
}
>>>.v-slider__thumb{
  width: 20px;
  height: 20px;
  background-color:  #2c3e50 !important;
}
.text-green input {
  color: white !important;
}
</style>
