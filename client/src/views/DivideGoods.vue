<template>
  <div class="about">
    <h1>This is an DivideGoods page</h1>
    <AlgoInputModal></AlgoInputModal>
    <ResultModel></ResultModel>
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
