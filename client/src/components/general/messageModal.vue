<template>
  <v-dialog
    v-model="show"
    :max-width="messageModalWidth">
    <v-card>
      <v-toolbar dark :color="messageModalType">
        <v-btn icon dark @click="closeMessageModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title align="center">{{ $t(messageModalType) }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-title class="justify-center text-h5" >
        {{ $t(messageModalText)}}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <template v-if="messageModalType === 'success'">
                <sweetalert-icon icon="success"></sweetalert-icon>
              </template>
              <template v-else-if="messageModalType === 'error'">
                <sweetalert-icon icon="error"></sweetalert-icon>
              </template>
              <template v-else-if="messageModalType === 'warning'">
                <sweetalert-icon icon="warning"></sweetalert-icon>
              </template>
              <template v-else-if="messageModalType === 'info'">
                <sweetalert-icon icon="info"></sweetalert-icon>
              </template>
            </v-col>
          </v-row>
          <v-row>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions v-if="messageModalAction">
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="closeMessageModal"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SweetalertIcon from 'vue-sweetalert-icons'
export default {
  name: 'messageModal',
  components: {
    SweetalertIcon
  },
  methods: mapActions(['closeMessageModal', 'setStoreData']),
  computed: {
    ...mapState(['messageModalOn', 'messageModalText', 'messageModalType', 'messageModalAction']),
    show: {
      get () {
        return this.messageModalOn
      },
      set (data) {
        this.setStoreData('messageModalOn', data)
      }
    },
    messageModalWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return (this.$vuetify.breakpoint.width) / 1.5
      } else {
        return (this.$vuetify.breakpoint.width) / 4
      }
    }
  }
}
</script>

<style scoped>

</style>
