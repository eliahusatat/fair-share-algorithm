<template>
  <div>
    <v-app>
        <v-dialog v-model="dialog" persistent max-width="1000">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open Dialog
            </v-btn>
          </template>
          <v-main
          >
            <v-container fluid>
              <v-tabs color="cyan" slider-color="yellow">
                <v-tab ripple v-for="(step, index) in steps" :key="index">
                  {{$t(step.title)}}
                </v-tab>
                <v-tab-item>
                  <participants-names
                    :initial-amount="2"
                  >
                  </participants-names>
                </v-tab-item>
                <v-tab-item>
                  <objects-names/>
                </v-tab-item>
                <v-tab-item>
                  <evaluations/>
                </v-tab-item>
              </v-tabs>
            </v-container>
          </v-main>
        </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Evaluations from './Evaluations'
import ObjectsNames from './ObjectsNames'
import ParticipantsNames from './ParticipantsNames'
export default {
  name: 'AlgoInputModal',
  components: {
    Evaluations,
    ObjectsNames,
    ParticipantsNames
  },
  data () {
    return {
      dialog: false,
      steps: [
        { title: 'participantsNames' },
        { title: 'objectsNames' },
        { title: 'evaluations' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
