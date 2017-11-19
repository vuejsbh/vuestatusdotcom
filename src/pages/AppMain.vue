<template>
  <v-content class="grey lighten-4">
    <v-toolbar color="light-blue darken-4" dark>
      <v-toolbar-title>Vue Status</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-menu v-model="menu">
          <v-btn icon slot="activator" dark>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click='logOut'>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">exit_to_app</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Sair</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>
    <v-tabs fixed centered class="app-tabs">
    <v-tabs-bar color="teal accent-3" :class="tabsbarclass">
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tabs-item :to="{name:'AppMainPosts'}" router>
        Posts
      </v-tabs-item>
      <v-tabs-item :to="{name:'AppMainNews'}" router>
        News
      </v-tabs-item>
    </v-tabs-bar>
      <v-container v-scroll="onScroll" :class="containerclass">
        <router-view />
      </v-container>
    </v-tabs>
    </v-content>

</template>

<script>
export default {
  data () {
    return {
      menu: false,
      text: 'asdfa dsfasdfads fa',
      tabsbarclass: '',
      containerclass: ''
    }
  },
  methods: {
    onScroll (e) {
      const offsetTop = window.pageYOffset || document.documentElement.scrollTop
      if (offsetTop > 56) {
        this.tabsbarclass = 'tabsfixed'
        this.containerclass = 'containerfixed'
      } else {
        this.tabsbarclass = ''
        this.containerclass = ''
      }
    },
    logOut () {
      this.$auth.signOut().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style lang="stylus">
.tabsfixed
  position fixed
  top 0
  left 0
  z-index 5
.containerfixed
  .layout
    padding-top 50px
</style>

