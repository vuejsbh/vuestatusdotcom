<template>
  <v-content class="grey lighten-4">
    <div class="vs-header" :class="fixed" v-scroll="onScroll">
      <AppToolbar />
      <AppTabs />
    </div>   
    <v-container>
      <router-view />
    </v-container>  
  </v-content>
</template>

<script>
import AppTabs from '@/components/AppTabs.vue'
import AppToolbar from '@/components/AppToolbar.vue'

export default {
  components: { AppToolbar, AppTabs },
  data () {
    return {
      fixed: ''
    }
  },
  methods: {
    onScroll (e) {
      const offsetTop = window.pageYOffset || document.documentElement.scrollTop
      if (offsetTop > 100) {
        this.fixed = 'fixed'
      } else {
        this.fixed = ''
      }
    }
  }
}
</script>

<style lang="stylus">
.vs-header
  top 0
  left 0
  right 0
  position fixed
  transition: transform .4s
  transform: translateZ(0)
  z-index 5
  &.fixed
    transform: translate3d(0,-100px,0)
    .vs-logo
      top -100px

</style>

