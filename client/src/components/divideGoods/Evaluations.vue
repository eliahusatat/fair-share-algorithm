<template>
  <div>
    <v-container>
      <v-row>
        fgsdfgsdf
      </v-row>
      <v-row>
        <v-expansion-panels>
          <v-expansion-panel v-for="(participant,i) in participantsArray" :key="i">
            <v-expansion-panel-header>
              {{participant.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <object-evaluation
                v-for="(obj,index) in participant.objects"
                :key="index"
                :object="obj"
              :participant-id="participant.id">
              </object-evaluation>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import objectEvaluation from './objectEvaluation'
import { mapState } from 'vuex'
export default {
  name: 'Evaluations',
  components: {
    objectEvaluation
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArray'])
  }
}
</script>

<style scoped>

</style>
