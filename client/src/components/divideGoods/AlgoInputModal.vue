<template>
  <div>
    <v-app>
        <v-dialog v-model="dialog" persistent width="80%" scrollable >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open Dialog
            </v-btn>
          </template>
          <v-card height="100%">
          <v-main>
            <v-container fluid>
                <v-tabs color="cyan" slider-color="yellow">
                <v-tab ripple v-for="(step, index) in steps" :key="index">
                  {{$t(step.title)}}
                </v-tab>
                <v-tab-item>
                  <participants-or-objects-names
                    :initial-amount="this.ParticipantsInitialAmount"
                    :component-type="this.participant"
                  >
                  </participants-or-objects-names>
                </v-tab-item>
                <v-tab-item>
                  <participants-or-objects-names
                    :initial-amount="this.objectsInitialAmount"
                    :component-type="this.object"
                  >
                  </participants-or-objects-names>
                </v-tab-item>
                <v-tab-item>
                  <evaluations/>
                </v-tab-item>
              </v-tabs>
            </v-container>
          </v-main>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-for="(btn, i) in actionsButtons"
                class="ma-2"
                :loading="loader"
                :disabled="loader"
                :color="btn.color"
                @click="btn.action"
                :key="i"
              >
                {{$t(btn.text)}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Evaluations from './Evaluations'
import ParticipantsOrObjectsNames from './ParticipantsOrObjectsNames'
import { mapActions } from 'vuex'
export default {
  name: 'AlgoInputModal',
  components: {
    Evaluations,
    ParticipantsOrObjectsNames
  },
  data () {
    return {
      dialog: false,
      objectsInitialAmount: 1,
      ParticipantsInitialAmount: 2,
      steps: [
        { title: 'participantsNames' },
        { title: 'objectsNames' },
        { title: 'evaluations' }
      ],
      participant: 'participant',
      object: 'object',
      loader: false,
      actionsButtons: [
        { color: 'error', action: this.onCancel, text: 'cancel' },
        { color: 'success', action: this.onSend, text: 'send' }
      ]
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['resetInputModal', 'addParticipant', 'addObject']),
    onSend () {
      this.loader = true
      // check all validations
      // send action that send the request
    },
    onCancel () {
      this.dialog = false
      this.loader = false
      this.resetInputModal()
      for (let i = 0; i < this.objectsInitialAmount; i++) {
        this.addObject()
      }
    }
  }
}
</script>

<style scoped>

</style>
