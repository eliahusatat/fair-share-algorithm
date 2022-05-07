<template>
  <div class="about">
    <h1>This is an DivideGoods page</h1>
    <v-container>
      <v-row>
        <v-col>
          <AlgoInputModal></AlgoInputModal>
        </v-col>
        <v-col>
          <ResultModel></ResultModel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AlgoInputModal from '../components/divideGoods/AlgoInputModal'
import ResultModel from '../components/divideGoods/ResultModel'

export default {
  name: 'DivideGoods',
  components: {
    AlgoInputModal,
    ResultModel
  }
}
</script>

<style scoped>

</style>
