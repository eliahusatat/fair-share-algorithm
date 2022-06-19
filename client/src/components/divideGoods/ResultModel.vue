<template>
  <div>
    <v-app>
      <v-dialog v-model="show" persistent :width="this.resultModalWidth" scrollable >
        <v-card :height="this.resultModalHeight">
          <v-card-title>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="show = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ $t('participantsEvaluations') }}</v-toolbar-title>
          </v-toolbar>
          </v-card-title>
          <v-container>
            <v-row>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('generalResult')}}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div>
                      <v-data-table
                        :headers="headers"
                        :items="fullResult"
                        item-key="name"
                        class="elevation-1"
                        hide-default-footer>
                      </v-data-table>
                      <v-data-table
                        :headers="headers"
                        :items="fullEvaluation"
                        item-key="name"
                        class="elevation-1"
                        hide-default-footer>
                      </v-data-table>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel v-for="(participant,i) in participantsArrayResult" :key="i">
                  <v-expansion-panel-header>
                    {{participant.name }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <single-result
                      :full-result="fullResult"
                      :full-evaluation="fullEvaluation"
                      :headers="headers"
                      :participant-index="i"
                      :name="participant.name"
                      :key="i"
                    >
                    </single-result>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import singleResult from './singleResult'
export default {
  name: 'ResultModel',
  components: { singleResult },
  data () {
    return {
      loader: false
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['resetInputModal', 'addParticipant', 'addObject', 'sendAlgo'])
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArrayResult', 'algoResult', 'isResultModelOpen']),
    fullResult () {
      if (this.participantsArrayResult && this.participantsArrayResult.length > 0 && this.participantsArrayResult[0].objects.length > 0 && this.algoResult.length > 0) {
        return this.participantsArrayResult.map(participant => {
          const obj = { }
          participant.objects.forEach(o => {
            obj[o.name] = (this.algoResult[participant.id][o.id] * 100) + '%'
          })
          obj.name = participant.name
          return obj
        })
      } else {
        return []
      }
    },
    fullEvaluation () {
      if (this.participantsArrayResult && this.participantsArrayResult.length > 0 && this.participantsArrayResult[0].objects.length > 0 && this.algoResult.length > 0) {
        return this.participantsArrayResult.map((participant) => {
          const obj = { }
          participant.objects.forEach(o => {
            obj[o.name] = o.value
          })
          obj.name = participant.name
          return obj
        })
      } else {
        return []
      }
    },
    headers () {
      if (this.participantsArrayResult && this.participantsArrayResult.length > 0 && this.participantsArrayResult[0].objects.length > 0) {
        const arr1 = [{
          text: 'part name',
          align: 'start',
          sortable: true,
          value: 'name'
        }]
        const arr2 = this.participantsArrayResult[0].objects.map(o => {
          const obj =
            {
              text: o.name,
              align: 'start',
              sortable: true,
              value: o.name
            }
          return obj
        })
        return arr1.concat(arr2)
      } else {
        return []
      }
    },
    show: {
      get () {
        return this.isResultModelOpen
      },
      set (data) {
        this.$store.commit('DivideGoods/SET', { name: 'isResultModelOpen', value: data })
      }
    },
    resultModalWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.width) / 1.1
      } else {
        return (this.$vuetify.breakpoint.width) / 2
      }
    },
    resultModalHeight () {
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
