<template>
  <v-content class="grey lighten-4">
    <div class="scroll" :class="fixed" v-scroll="onScroll">
    <v-toolbar dark class="toolbar">
      <v-toolbar-title>
        Vue Status
      </v-toolbar-title>
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
    <v-tabs fixed centered>
    <v-tabs-bar color="teal accent-3" class="tabs" :class="tabsbarclass">
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tabs-item :to="{name:'AppMainPosts'}" router>
        Posts
      </v-tabs-item>
      <v-tabs-item :to="{name:'AppMainNews'}" router>
        News
      </v-tabs-item>
    </v-tabs-bar>  
      </v-tabs>
    </div>    
       <v-container class="container">
        <router-view />
      </v-container>
    
    </v-content>

</template>

<script>
export default {
  data () {
    return {
      menu: false,
      text: 'asdfa dsfasdfads fa',
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
    },
    logOut () {
      this.$auth.signOut().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.toolbar
  height 100px
  background-color #1c3c59 !important
.scroll
  top 0
  left 0
  right 0
  position fixed
  transition: transform .4s
  transform: translateZ(0)
  z-index 5
.fixed
  transform: translate3d(0,-100px,0)

.container
  .layout
    padding-top 150px
</style>

