<template>
  <div>
    <h1>This is an about page</h1>

    <v-container fluid pa-0>
      <v-row align="start" justify="start"
             v-for="(creator,index) in creators"
             :key="index">
        <v-col cols="12" lg="8" md="8" class="grey lighten-2 fill-height d-flex flex-column justify-start align-start">
          <single-about :name="creator.name" :title="creator.title">
          </single-about>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleAbout from '../components/about/SingleAbout'
export default {
  name: 'About',
  components: {
    SingleAbout
  },
  data () {
    return {
      creators: [
        {
          name: 'eliahuName',
          title: 'eliahuTitle'
        },
        {
          name: 'eliahuName',
          title: 'eliahuTitle'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
