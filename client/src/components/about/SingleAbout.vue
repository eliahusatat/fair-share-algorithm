<template>
  <v-card
    class="mx-auto"
    color="#E1E7E7">
      <v-row
        v-if="$vuetify.breakpoint.mdAndUp"
        class="fill-height"
        dense>
        <v-col class="py-6" cols="8"  v-if="index%2 != 0">
          <v-card-text class="text-h5 font-weight-bold">
            {{$t(this.description)}}
          </v-card-text>
        </v-col>
        <v-col
          align-self="start"
          class="pa-0"
          cols="4">
          <v-avatar
            class="profile ma-3"
            color="grey"
            :size="profileImgSize"
            >
            <v-img :src="require('@/assets/' + this.imgSrc)"></v-img>
          </v-avatar>
          <v-list-item
  >
            <v-list-item-content>
              <v-list-item-title class="text-h6 black--text" >
                {{$t(this.name)}}
              </v-list-item-title>
              <v-list-item-subtitle lass=" black--text"> {{$t(this.title)}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div v-for="(btn, index) in this.actionsBtn" :key="index">
              <v-btn icon v-if="btn.link != 'noLink'" :href="btn.link" target="_blank">
                <v-icon>{{ `${btn.icon}`}} </v-icon>
              </v-btn>
            </div>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-col>
        <v-col class="py-6" cols="8"  v-if="index%2 == 0">
             <v-card-text class="text-h5 font-weight-bold">
               {{$t(this.description)}}
             </v-card-text>
        </v-col>
      </v-row>
    <v-row v-else class="fill-height" dense justify="center">
        <v-avatar class="profile ma-3" color="grey" :size="profileImgSize">
          <v-img :src="require('@/assets/' + this.imgSrc)"></v-img>
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 black--text" >
              {{$t(this.name)}}
            </v-list-item-title>
            <v-list-item-subtitle lass=" black--text"> {{$t(this.title)}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text class="text-h5 font-weight-bold">
          {{$t(this.description)}}
        </v-card-text>
      <v-card-actions>
        <div v-for="(btn, index) in this.actionsBtn" :key="index">
          <v-btn icon v-if="btn.link != 'noLink'" :href="btn.link" target="_blank">
          <v-icon>{{ `${btn.icon}`}} </v-icon>
        </v-btn>
        </div>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'SingleAbout',
  data () {
    return {
      actionsBtn: [
        { icon: 'mdi-facebook', name: 'facebookLink', link: this.facebookLink },
        { icon: 'mdi-twitter', name: 'twitterLink', link: this.twitterLink },
        { icon: 'mdi-account-circle', name: 'personalLink', link: this.personalLink },
        { icon: 'mdi-linkedin', name: 'linkedinLink', link: this.linkedinLink },
        { icon: 'mdi-github', name: 'githubLink', link: this.githubLink }
      ]
    }
  },
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    index: {
      type: Number
    },
    facebookLink: {
      type: String,
      default: 'noLink'
    },
    twitterLink: {
      type: String,
      default: 'noLink'
    },
    personalLink: {
      type: String,
      default: 'noLink'
    },
    githubLink: {
      type: String,
      default: 'noLink'
    },
    linkedinLink: {
      type: String,
      default: 'noLink'
    },
    imgSrc: String
  },
  computed: {
    profileImgSize () {
      return (this.$vuetify.breakpoint.height) / 3
    }
  }
}
</script>

<style scoped>

</style>
