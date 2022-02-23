<template>
  <div>
    <v-app-bar color="#6A76AB" dark>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <router-link :to="tab.to"  v-for="(tab,index) in tabs" :key="index">
          <v-tab> {{$t(tab.title)}}</v-tab>
          </router-link>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data: function () {
    return {
      tabs: [
        { title: 'about', to: '/about' },
        { title: 'home', to: '/' },
        { title: 'divideGoods', to: '/divideGoods' },
        { title: 'explanations', to: '/explanations' }
      ],
      selectedCard: -1
    }
  }
}
</script>

<style scoped>

</style>
