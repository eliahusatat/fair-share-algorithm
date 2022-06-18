<template>
  <div>
    <v-app>
        <v-dialog v-model="show"  :width="this.algoModalWidth">
          <v-card :height="this.algoModalHeight">
            <v-card-title>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="show = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{ $t('participantsEvaluations') }}</v-toolbar-title>
            </v-toolbar>
            </v-card-title>
            <v-stepper v-model="stepNum" style="height:100%">
              <v-stepper-header>
                <v-stepper-step
                  :complete="stepNum > 1"
                  step="1">
                  {{ $t('participantsNames') }}
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="stepNum > 2"
                  step="2">
                  {{ $t('objectsNames') }}
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">
                  {{ $t('evaluations') }}
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <participants-or-objects-names
                    :initial-amount="this.ParticipantsInitialAmount"
                    :component-type="this.participant">
                  </participants-or-objects-names>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    :disabled="this.$validator.errors.items.some(err => err.field.includes('participant'))"
                    @click="this.nextStep">
                    {{$t('continue')}}
                    <v-icon v-if="this.$vuetify.lang.current === 'he'">mdi-arrow-left-bold</v-icon>
                    <v-icon v-else>mdi-arrow-right-bold</v-icon>
                  </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <participants-or-objects-names
                    :initial-amount="this.objectsInitialAmount"
                    :component-type="this.object">
                  </participants-or-objects-names>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    @click="this.backStep">
                    <v-icon v-if="this.$vuetify.lang.current === 'he'">mdi-arrow-right-bold</v-icon>
                    <v-icon v-else>mdi-arrow-left-bold</v-icon>
                    {{$t('goBack')}}
                  </v-btn>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    :disabled="this.$validator.errors.items.some(err => err.field.includes('object'))"
                    @click="this.nextStep">
                    {{$t('continue')}}
                    <v-icon v-if="this.$vuetify.lang.current === 'he'">mdi-arrow-left-bold</v-icon>
                    <v-icon v-else>mdi-arrow-right-bold</v-icon>
                  </v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <evaluations/>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    @click="this.backStep">
                    <v-icon v-if="this.$vuetify.lang.current === 'he'">mdi-arrow-right-bold</v-icon>
                    <v-icon v-else>mdi-arrow-left-bold</v-icon>
                    {{$t('goBack')}}
                  </v-btn>
                  <v-btn
                    v-for="(btn, i) in actionsButtons"
                    class="ma-2"
                    :loading="loader"
                    :disabled="loader"
                    :color="btn.color"
                    @click="btn.action"
                    :key="i">
                    {{$t(btn.text)}}
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Evaluations from './Evaluations'
import ParticipantsOrObjectsNames from './ParticipantsOrObjectsNames'
import { mapActions, mapState } from 'vuex'
import { arrayToMatrix } from '@/utils/helper'

export default {
  name: 'AlgoInputModal',
  components: {
    Evaluations,
    ParticipantsOrObjectsNames
  },
  data () {
    return {
      stepNum: 1,
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
        { color: 'success', action: this.onSend, text: 'send' }
      ]
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['resetInputModal', 'addParticipant', 'addObject', 'sendAlgo']),
    ...mapActions(['openSnackbar', 'openMessageModal']),
    async onSend () {
      this.$validator.validate()
      if (this.$validator.errors.items.length > 0) {
        console.log(this.$validator.errors)
        this.openSnackbar({ text: 'inputError', type: 'error' })
      } else {
        console.log(this.$validator.errors)
        this.loader = true
        const evaluationsMatrix = arrayToMatrix(this.participantsArray)
        // eslint-disable-next-line no-unused-vars
        const algoResult = await this.sendAlgo({
          participantsArray: this.participantsArray,
          matrix: evaluationsMatrix
        })
        this.loader = false
      }
    },
    nextStep () {
      this.stepNum = this.stepNum + 1
    },
    backStep () {
      this.stepNum = this.stepNum - 1
    },
    async onCancel () {
      const isUserOpenShortLinkModal = await this.openConfirmModal({
        okButton: { text: 'yes', icon: 'mdi-check', color: 'success' },
        cancelButton: { text: 'cancel', icon: 'mdi-close', color: 'error' },
        message: 'areYouSureCancel',
        isActionButtons: true
      })
      if (isUserOpenShortLinkModal) {
        this.dialog = false
        this.loader = false
        // this.resetInputModal()
        // for (let i = 0; i < this.objectsInitialAmount; i++) {
        //   this.addObject()
        // }
      }
    }
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArray', 'isAlgoInputModalOpen']),
    show: {
      get () {
        return this.isAlgoInputModalOpen
      },
      set (data) {
        this.$store.commit('DivideGoods/SET', { name: 'isAlgoInputModalOpen', value: data })
      }
    },
    algoModalWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.width) / 1.1
      } else {
        return (this.$vuetify.breakpoint.width) / 2
      }
    },
    algoModalHeight () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.height) / 1.2
      } else {
        return (this.$vuetify.breakpoint.height) / 1.1
      }
    }
  }
}
</script>

<style scoped>

</style>
