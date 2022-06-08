<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      <v-main >
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </v-main>
      <Footer/>
      <confirm ref="confirm"/>
      <notification-list ref="notification"/>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/general/NavBar'
import Footer from './components/general/Footer'
import Confirm from './components/general/Confirm'
import NotificationList from './components/general/NotificationsList'
import { mapState } from 'vuex'
/*
 todo: 1 add logo to the project
 todo: 2 need to fix algo mutations to remove arr[index]= ... because: https://stackoverflow.com/questions/38819289/why-is-computed-value-not-updated-after-vuex-store-update
 todo: 3 fix size of model
 todo: 6 write error modal for the application
 todo: 7 style the division page
 todo: 8 fix open and reopen of the input nodal bug
 todo: 9 save the result input of the algo in different array
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
    this.$vuetify.lang.current = window.localStorage.getItem('selectedLang') || 'he'
    this.$vuetify.rtl = this.$vuetify.lang.current === 'he'
  },
  computed: {
    ...mapState(['notifications'])
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
  background-color: #E1E7E7;
}

</style>
