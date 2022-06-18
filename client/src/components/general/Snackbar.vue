<template>
  <v-snackbar
    v-model="show"
    :left="this.$vuetify.breakpoint.mdAndUp"
    :rounded="this.$vuetify.breakpoint.mdAndDown ? 'pill': 'undefined'"
    :min-width="snackbarWidth"
    :min-height="snackbarheight"
    :color="snackbarType">
    <v-container>
      <v-row>
        <v-col>
    {{ $t(snackbarText) }}
        </v-col>
      </v-row>
    </v-container>
    <template v-slot:action="{ attrs }">
        <v-icon
          color="#FFF"
          v-bind="attrs"
          @click="closeSnackbar"
        >mdi-close-circle-outline</v-icon>
    </template>
  </v-snackbar>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Snackbar',
  methods: mapActions(['closeSnackbar', 'setStoreData']),
  computed: {
    ...mapState(['snackbarOn', 'snackbarText', 'snackbarType']),
    show: {
      get () {
        return this.snackbarOn
      },
      set (data) {
        this.setStoreData('snackbarOn', data)
      }
    },
    snackbarWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.width) / 1.3
      } else {
        return (this.$vuetify.breakpoint.width) / 2.5
      }
    },
    snackbarheight () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.height) / 20
      } else {
        return (this.$vuetify.breakpoint.height) / 15
      }
    }
  }
}
</script>

<style scoped>

</style>
