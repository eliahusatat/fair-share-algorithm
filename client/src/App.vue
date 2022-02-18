<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <confirm ref="confirm"/>
    <notification-list ref="notification"/>
  </div>
</template>

<script>
import Confirm from './components/general/Confirm'
import NotificationList from './components/general/NotificationsList'
import LocalStorageService from './service/LocalStorageService'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    Confirm,
    NotificationList
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
