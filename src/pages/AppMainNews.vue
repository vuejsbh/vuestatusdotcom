<template>
 <transition name="slide-left">
  <v-layout row wrap>

    <AppNew />
    <AppNew />
    <AppNew />
    <AppNew />
    <AppNew />
    <AppNew />

    </v-layout>
  </transition>
</template>

<script>
import AppNew from '@/components/AppNew.vue'

export default {
  components: { AppNew },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">

</style>
