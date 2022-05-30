<template>
  <div>
   <div v-html="$t('explantionP1')"></div>
    <v-data-table
      :headers="this.headersEvaluations"
      :items="this.itemsEvaluations"
      item-key="name"
      hide-default-footer
      class="elevation-1">
    </v-data-table>
    <div v-html="$t('explantionP2')"></div>
    <v-data-table
      :headers="this.headersProportional"
      :items="this.itemsProportional"
      item-key="name"
      hide-default-footer
      class="elevation-1">
    </v-data-table>
    <div v-html="$t('explantionP3')"></div>
    <v-data-table
      :headers="this.headersEnvyFree"
      :items="this.itemsEnvyFree"
      item-key="name"
      hide-default-footer
      class="elevation-1">
    </v-data-table>
    <div v-html="$t('explantionP4')"></div>
  </div>
</template>

<script>
export default {
  name: 'Explanations',
  data () {
    return {
      headersEvaluations: [
        // eslint-disable-next-line no-undef
        { text: this.$t('name'), value: 'name', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('privateHouse'), value: 'privateHouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('penthouse'), value: 'penthouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('housingUnit'), value: 'housingUnit', align: 'center', sortable: false }
      ],
      itemsEvaluations: [
        { name: this.$t('Hami'), privateHouse: 400, penthouse: 500, housingUnit: 100 },
        { name: this.$t('Tami'), privateHouse: 600, penthouse: 300, housingUnit: 100 },
        { name: this.$t('Rami'), privateHouse: 650, penthouse: 100, housingUnit: 250 }
      ],
      headersProportional: [
        // eslint-disable-next-line no-undef
        { text: this.$t('name'), value: 'name', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('privateHouse'), value: 'privateHouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('penthouse'), value: 'penthouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('housingUnit'), value: 'housingUnit', align: 'center', sortable: false }
      ],
      itemsProportional: [
        { name: this.$t('Hami'), privateHouse: '0%', penthouse: '100%', housingUnit: '0%' },
        { name: this.$t('Tami'), privateHouse: '75.7%', penthouse: '0%', housingUnit: '0%' },
        { name: this.$t('Rami'), privateHouse: '24.3%', penthouse: '0%', housingUnit: '100%' }
      ],
      headersEnvyFree: [
        // eslint-disable-next-line no-undef
        { text: this.$t('name'), value: 'name', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('privateHouse'), value: 'privateHouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('penthouse'), value: 'penthouse', align: 'center', sortable: false },
        // eslint-disable-next-line no-undef
        { text: this.$t('housingUnit'), value: 'housingUnit', align: 'center', sortable: false }
      ],
      itemsEnvyFree: [
        { name: this.$t('Hami'), privateHouse: '0%', penthouse: '100%', housingUnit: '0%' },
        { name: this.$t('Tami'), privateHouse: '65%', penthouse: '0%', housingUnit: '0%' },
        { name: this.$t('Rami'), privateHouse: '35%', penthouse: '0%', housingUnit: '100%' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
