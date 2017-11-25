<template>
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
</template>

<script>
export default {
  name: 'AppTollbarMenu',
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
  }
}
</script>

<style lang="stylus">

</style>
