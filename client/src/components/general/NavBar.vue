<template>
  <div class="menu-div">
<v-container>
  <v-row :right="!this.$vuetify.rtl" justify="start">
    <ul class="menu">
    <div
      class="menu-indicator"
      :style="{ left: positionToMove, width: sliderWidth }"
    ></div>
    <router-link
      :to="link.to"
      v-for="link in links"
      :key="link.id"
      style="text-decoration: none; color: inherit;">
    <li
      class="menu-item"
      @click="sliderIndicator(link.id)"
      :ref="'menu-item_' + link.id">
      <a href="#"
        class="menu-link"
        :class="link.id === selectedIndex ? 'active' : null">
        <span>{{ $t(link.text) }}</span>
      </a>
    </li>
    </router-link>
  </ul>
    <v-spacer/>
    <language-switcher-menu/>
  </v-row>
</v-container>
  </div>
</template>

<script>
import LanguageSwitcherMenu from './LanguageSwitcherMenu'
export default {
  name: 'NavBar',
  components: {
    LanguageSwitcherMenu
  },
  data () {
    return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      links: [
        {
          id: 1,
          text: 'home',
          to: '/'
        },
        {
          id: 2,
          text: 'about',
          to: '/about'
        },
        {
          id: 3,
          text: 'divideGoods',
          to: '/divideGoods'
        },
        {
          id: 4,
          text: 'explanations',
          to: '/explanations'
        }
      ]
    }
  },
  methods: {
    sliderIndicator (id) {
      const el = this.$refs[`menu-item_${id}`][0]
      this.sliderPosition = el.offsetLeft
      this.selectedElementWidth = el.offsetWidth
      this.selectedIndex = id
    }
  },
  computed: {
    positionToMove () {
      return this.sliderPosition + 'px'
    },
    sliderWidth () {
      return this.selectedElementWidth + 'px'
    }
  },
  watch: {
    $route (to, from) {
      const id = this.links.find(element => element.text.toLowerCase() === to.name.toLowerCase()).id
      if (id) { this.sliderIndicator(id) }
    }
  }
}
</script>

<style>
:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}
.menu-div{
  background-color: #1d3557;
  justify-content: start;
}
/* ul */
.menu {
  justify-content: start;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: var(--menu-background-color);
  display: inline-flex;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
}
/* li */
.menu-item {
  display: inline-flex;
}
/* a */
.menu-link {
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: self-start;
  color: var(--link-text-color);
  text-decoration: none;
}
.menu-link:hover,
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
}
/* slider */
.menu-indicator {
  position: absolute;
  height: 0.25rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.5s;
}
</style>
