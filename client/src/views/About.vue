<template>
  <div>
    <v-container >
      <v-row  :justify="index%2 == 0 ? 'start' :'end'"
             v-for="(creator,index) in creators"
             :key="index">
        <v-col cols="8" lg="8" md="8">
          <single-about :name="creator.name" :title="creator.title" :index="index">
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
