<template>
  <div id="app">
    <nav-bar></nav-bar>
    <v-fade-transition mode="out-in">
    <router-view/>
    </v-fade-transition>
    <Footer/>
    <confirm ref="confirm"/>
    <notification-list ref="notification"/>
  </div>
</template>

<script>
import NavBar from './components/general/NavBar'
import Footer from './components/general/Footer'
import Confirm from './components/general/Confirm'
import NotificationList from './components/general/NotificationsList'
import LocalStorageService from './service/LocalStorageService'
import { mapState } from 'vuex'
/*
 todo: 2 add home page pic in the project
 todo: 3 fix hebrow mode style
 todo: 4 add loading mode for all the home page
 todo: 7 add logo to the project
 todo: 9 after route between page lang options dont work
*/
export default {
  name: 'App',

  components: {
    Confirm,
    NotificationList,
    NavBar,
    Footer
  },
  mounted () {
    this.$root.$confirm = this.$refs.confirm // set the confirmModal as global
    this.$root.$notification = this.$refs.notification // set the notification component as global
    this.$vuetify.lang.current = LocalStorageService.getItem('SELECTED_APP_LANGUAGE') || 'he'
    this.$vuetify.rtl = ['he'].includes(this.$vuetify.lang.current) // if the selected lang is RTL so be at the right
  },
  computed: {
    ...mapState(['notifications', 'selected_app_language'])
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
