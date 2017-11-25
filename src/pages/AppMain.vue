<template>
  <v-content>
    <div class="vs-header" :class="fixed" v-scroll="onScroll">
      <AppToolbar />
      <AppTabs />
    </div>   
    <v-container class="vs-container">
        <router-view class="vs-view" />
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
      if (offsetTop > 60) {
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
    transform: translate3d(0,-150px,0)
    .vs-logo
      bottom 100px
    .vs-logo-mini
      padding-top 5px

.vs-view
  margin-top 200px
  transition: all .3s cubic-bezier(.55,0,.1,1)
.slide-left-enter, .slide-right-leave-active
  opacity: 0
  transform: translate(200px, 0)
.slide-left-leave-active, .slide-right-enter
  opacity: 0;
  transform: translate(-200px, 0)
.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease
.fade-enter, .fade-leave-active
  opacity: 0





</style>

