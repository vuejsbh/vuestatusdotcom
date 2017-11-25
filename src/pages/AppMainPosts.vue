<template>
 <transition name="slide-right">
  <v-layout row wrap>

    <AppPost />
    <AppPost />
    <AppPost />
    <AppPost />
    <AppPost />
    <AppPost />
    <AppPost />
    <AppPost />
   
    <v-btn
      color="light-blue accent-3"
      dark
      fixed
      bottom
      right
      fab
    >
      <v-icon>add</v-icon>
    </v-btn>
    </v-layout>
 </transition>
</template>

<script>
import AppPost from '@/components/AppPost.vue'
import AppLogin from '@/components/AppLogin.vue'

export default {
  components: { AppPost, AppLogin },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">

</style>
