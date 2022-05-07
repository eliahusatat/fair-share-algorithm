<template>
  <div>
    <v-app>
      <v-dialog v-model="dialog" persistent width="80%" scrollable >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{$t('viewResult')}}
          </v-btn>
        </template>
        <v-card height="100%">
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ $t('participantsEvaluations') }}</v-toolbar-title>
          </v-toolbar>
          <div>
            <v-data-table
              :headers="headers"
              :items="fullResult"
              item-key="name"
              class="elevation-1"
            >
            </v-data-table>
          </div>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ResultModel',
  components: {},
  data () {
    return {
      dialog: false,
      loader: false
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['resetInputModal', 'addParticipant', 'addObject', 'sendAlgo']),
    ...mapActions(['openConfirmModal'])
  },
  computed: {
    ...mapState('DivideGoods', ['participantsArray', 'algoResult']),
    fullResult () {
      if (this.participantsArray && this.participantsArray.length > 0 && this.participantsArray[0].objects.length > 0 && this.algoResult.length > 0) {
        return this.participantsArray.map(participant => {
          const obj = { }
          participant.objects.forEach(o => {
            obj[o.name] = this.algoResult[participant.id][o.id]
          })
          obj.name = participant.name
          return obj
        })
      } else {
        return []
      }
    },
    headers () {
      if (this.participantsArray && this.participantsArray.length > 0 && this.participantsArray[0].objects.length > 0) {
        const arr1 = [{
          text: 'part name',
          align: 'start',
          sortable: true,
          value: 'name'
        }]
        const arr2 = this.participantsArray[0].objects.map(o => {
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
    }
  }
}
</script>

<style scoped>

</style>
