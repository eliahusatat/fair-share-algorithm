<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        <v-icon color="#BAB096" x-small> mdi-copyright</v-icon>
        <strong> Satat </strong> — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
