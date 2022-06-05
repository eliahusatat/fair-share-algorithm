<template>
  <div>
    <v-img :src="require('@/assets/' + this.imgSrc)">
    <v-container >
      <v-row  :justify="index%2 == 0 ? 'start' :'end'"
             v-for="(creator,index) in creators"
             :key="index">
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? 8 : 12" >
          <single-about
            :name="creator.name"
            :title="creator.title"
            :description="creator.description"
            :img-src="creator.imgSrc"
            :index="index"
            :facebook-link="creator.facebookLink"
            :twitter-link="creator.twitterLink"
            :personal-link="creator.personalLink"
            :github-link="creator.githubLink"
            :linkedin-link="creator.linkedinLink"
          >
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
      imgSrc: 'background7.jpg',
      creators: [
        {
          name: 'eliahuName',
          title: 'eliahuTitle',
          description: 'eliahuDescription',
          imgSrc: 'myProfile.jpeg',
          facebookLink: 'https://www.facebook.com/profile.php?id=100000057643645',
          githubLink: 'https://github.com/eliahusatat',
          linkedinLink: 'https://www.linkedin.com/in/eliahu-satat/'
        },
        {
          name: 'eliahuName',
          title: 'eliahuTitle',
          imgSrc: 'myProfile.jpeg',
          description: 'eliahuDescription'
        },
        {
          name: 'eliahuName',
          title: 'eliahuTitle',
          description: 'eliahuDescription',
          imgSrc: 'myProfile.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
