<template>
  <v-card
    class="mx-auto"
    color="#808080"
   >
      <v-row
        class="fill-height"
        dense>
        <v-col class="pa-0" cols="8"  v-if="index%2 != 0">
          <v-card-text class="text-h5 font-weight-bold">
            Jonathan Goldman received his B.S. in Computer Science from Carnegie Mellon University in 2015. He worked with Ariel as a research assistant from 2012 until his graduation, and developed Spliddit as part of his senior research thesis. Jonathan is currently working for Facebook.
          </v-card-text>
        </v-col>
        <v-col
          align-self="start"
          class="pa-0"
          cols="4">
          <v-avatar
            class="profile"
            color="grey"
            :size="profileImgSize"
            >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
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
        </v-col>
        <v-col class="pa-0" cols="8"  v-if="index%2 == 0">
             <v-card-text class="text-h5 font-weight-bold">
               Jonathan Goldman received his B.S. in Computer Science from Carnegie Mellon University in 2015. He worked with Ariel as a research assistant from 2012 until his graduation, and developed Spliddit as part of his senior research thesis. Jonathan is currently working for Facebook.
             </v-card-text>
        </v-col>
      </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'SingleAbout',
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    },
    index: {
      type: Number
    }
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
