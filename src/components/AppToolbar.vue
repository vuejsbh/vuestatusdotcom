<template>
    <v-toolbar dark class="vs-toolbar" :class="toolbarClass">
      <img src="../..//static/img/logo/vuestatus-logo.svg" alt="VueStatus Logo" class="vs-logo">
      <v-toolbar-title class="vs-title">
        Vue Status
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-menu v-model="menu">
        <v-btn icon slot="activator" dark class="settings">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click='logOut'>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">exit_to_app</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-title>Exit</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
</template>

<script>
export default {
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
  height 100px
  background-color #1c3c59 !important
  .vs-logo
    transition: all .2s
    height 160px
    top 25px
    left 20px
    position absolute
    z-index 5
  .vs-title
    top 36px
    position absolute
    z-index 5
    left 220px
    font-size 38px

.vs-toolbar-xs
  .vs-logo
    height 60px
    top 20px
    left 0px
  .vs-title
    top 40px
    left 84px
    font-size 20px

.vs-toolbar-sm
  .vs-logo
    height 100px
    top 30px
    left 5px
  .vs-title
    top 40px
    left 140px
    font-size 32px

.vs-toolbar-md
  .vs-logo
    height 140px
    top 30px
    left 20px
  .vs-title
    top 40px
    left 190px
    font-size 32px

</style>
