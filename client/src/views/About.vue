<template>
  <div>
    <v-img :src="require('@/assets/' + this.imgSrc)">
    <v-container >
      <v-row  :justify="index%2 == 0 ? 'start' :'end'"
             v-for="(creator,index) in creators"
             :key="index">
        <v-col cols="8" lg="8" md="8">
          <single-about :name="creator.name" :title="creator.title" :img-src="creator.imgSrc" :index="index">
          </single-about>
        </v-col>
      </v-row>
    </v-container>
    </v-img>
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
      imgSrc: 'background2.jpg',
      creators: [
        {
          name: 'eliahuName',
          title: 'eliahuTitle',
          imgSrc: 'myProfile.jpeg'
        },
        {
          name: 'eliahuName',
          title: 'eliahuTitle',
          imgSrc: 'myProfile.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
