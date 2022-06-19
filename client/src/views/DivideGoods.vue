<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-card class="mx-auto" color="#808080" dark>
          <v-card-title class="justify-center">
            <span class="text-h6 font-weight-light">{{$t('homeTextTitle')}}</span>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
            {{$t('howDoesTheAlgoWork')}}
          </v-card-text>
        </v-card>
      </v-row>
      <v-row justify="center" class="ma-10">
        <v-btn
          depressed
          x-large
          color="primary"
          @click="this.openInputModal">
          {{$t('startAlgo')}}
        </v-btn>
      </v-row>
    <v-row justify="center" class="ma-10">
        <v-btn
          depressed
          x-large
          :disabled="!hasResult"
          color="primary"
          @click="this.openResultModal">
          {{$t('viewResult')}}
        </v-btn>
      </v-row>
      <v-row>
          <AlgoInputModal></AlgoInputModal>
          <ResultModel></ResultModel>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AlgoInputModal from '../components/divideGoods/AlgoInputModal'
import ResultModel from '../components/divideGoods/ResultModel'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DivideGoods',
  components: {
    AlgoInputModal,
    ResultModel
  },
  methods: {
    ...mapActions('DivideGoods', ['openInputModal', 'openResultModal'])
  },
  computed: {
    ...mapState('DivideGoods', ['hasResult'])
  }
}
</script>

<style scoped>

</style>
