<template>
  <div>
    <v-app>
      <v-dialog v-model="dialog" persistent width="80%" scrollable >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog1
          </v-btn>
        </template>
        <v-card height="100%">
          <div>
            <v-data-table
              :headers="headers"
              :items="fullResult"
              item-key="name"
              class="elevation-1"
            >
            </v-data-table>
          </div>
          <v-btn
            class="ma-2"
            @click="this.test">
            {{test}}
          </v-btn>
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
      loader: false,
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ],
      headers1: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ]
    }
  },
  methods: {
    ...mapActions('DivideGoods', ['resetInputModal', 'addParticipant', 'addObject', 'sendAlgo']),
    ...mapActions(['openConfirmModal']),
    test () {
      console.log('in created!!')
      console.log(this.fullResult)
      console.log(this.headers)
    }
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
