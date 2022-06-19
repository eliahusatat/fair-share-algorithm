<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      <v-main >
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
        <snackbar ref="snackbar"/>
        <message-modal ref="messageModal"/>
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/general/NavBar'
import Snackbar from './components/general/Snackbar'
import Footer from './components/general/Footer'
import messageModal from './components/general/messageModal'
/*
 todo: 1 add logo to the project
 todo: 2 need to fix algo mutations to remove arr[index]= ... because: https://stackoverflow.com/questions/38819289/why-is-computed-value-not-updated-after-vuex-store-update
  */
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Snackbar,
    messageModal
  },
  mounted () {
    this.$vuetify.lang.current = window.localStorage.getItem('selectedLang') || 'he'
    this.$vuetify.rtl = this.$vuetify.lang.current === 'he'
  }
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
