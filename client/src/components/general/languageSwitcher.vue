<template>
  <v-menu bottom offset-y rounded="b-xl">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="{ ...on }">
        <v-icon color="#FFFFFF">mdi-web</v-icon>
      </v-btn>
    </template>
    <v-list>
      <div v-for="(item, index) in items" :key="index">
      <v-list-item
        :value="item.key"
        @click="switchLang(item)"
      >
        <v-list-item-title :key="index + items.length">{{ item.title }}</v-list-item-title>
      </v-list-item>
        <v-list-item-title :key="index + items.length*2" class="my-0 mx-4" v-if="index != items.length-1 "><v-divider/></v-list-item-title>
      </div>
    </v-list>
  </v-menu>
</template>
<script>

export default {
  name: 'languageSwitcher',
  data () {
    return {
      showMenu: true,
      currentLang: '',
      items: [
        { title: 'עברית', rtl: true, key: 'he' },
        { title: 'English', rtl: false, key: 'en' }
      ]
    }
  },
  methods: {
    switchLang (selectedLang) {
      if (selectedLang.key === this.currentLang) return
      window.localStorage.setItem('selectedLang', selectedLang.key)
      window.location.reload()
      setTimeout(() => {
        this.$vuetify.lang.current = selectedLang.key
        this.$vuetify.rtl = selectedLang.rtl
      }, 100)
    }
  },
  created () {
    this.currentLang = window.localStorage.getItem('selectedLang')
  }
}
</script>

<style scoped>

</style>
