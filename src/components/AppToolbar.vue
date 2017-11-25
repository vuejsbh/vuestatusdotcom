<template>
    <v-toolbar dark class="vs-toolbar" :class="toolbarClass">
      <img src="../..//static/img/logo/vuestatus-logo.svg" alt="VueStatus Logo" class="vs-logo">
      <div class="vs-title">
        Vue Status
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <AppToolbarMenu />
    </v-toolbar>
</template>

<script>
import AppToolbarMenu from '@/components/AppToolbarMenu.vue'
export default {
  components: { AppToolbarMenu },
  name: 'AppToolbar',
  data () {
    return {
      menu: false
    }
  },
  methods: {
    logOut () {
      this.$auth.signOut().then(() => {
        this.$router.replace('/login')
      })
    }
  },
  computed: {
    toolbarClass () {
      return `vs-toolbar-${this.$vuetify.breakpoint.name}`
    }
  }
}
</script>

<style lang="stylus">
.vs-toolbar
  height 150px
  background-color #1c3c59 !important
  background-image url("../..//static/img/style/vs-header-bg.svg")
  background-size: cover
  .vs-logo
    height 200px
    z-index 5
    bottom -90px
    left 20px
    position absolute
    transition bottom .3s
    z-index 3
  .vs-title
    position absolute
    z-index 5
    bottom 25px
    left 265px
    font-size 38px

.vs-toolbar-xs
  .vs-logo
    height 70px
    bottom 20px
    left 20px
  .vs-title
    bottom 45px
    left 135px
    font-size 28px

.vs-toolbar-sm
  .vs-logo
    height 140px
    bottom -30px
    left 20px
  .vs-title
    bottom 25px
    left 200px
    font-size 32px

.vs-toolbar-md
  .vs-logo
    height 160px
    bottom -70px
    left 20px
  .vs-title
    bottom 25px
    left 225px
    font-size 36px

</style>
