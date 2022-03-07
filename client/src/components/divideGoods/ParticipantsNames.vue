<template>
  <div>
    <v-text-field
      filled
      rounded
      dense
      v-for="index in participantsCounter" :key="index"
    ></v-text-field>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="myIncrease"
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
      @click="myDecrease"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'participantsNames',
  computed: {
    ...mapState('DivideGoods', ['participantsCounter'])
  },
  methods: {
    ...mapActions('DivideGoods', ['increaseCounter', 'decreaseCounter']),
    myIncrease () {
      this.increaseCounter()
    },
    myDecrease () {
      this.decreaseCounter()
    }
  },
  created () {
    console.log(this.participantsCounter)
    this.increaseCounter()
    console.log(this.participantsCounter)
  }
}
</script>

<style scoped>

</style>
