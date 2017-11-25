<template>
  <v-tabs fixed centered class="elevation-3">
    <div class="vs-logo-mini hidden-xs-only">
      <img src="../..//static/img/logo/vuestatus-logo.svg" alt="VueStatus Logo">
    </div>

    <v-tabs-bar color="teal accent-3" class="vs-tabs-bar">



      <v-tabs-slider color="indigo darken-4"></v-tabs-slider>
      <v-tabs-item :to="{name:'AppMainPosts'}">
        Posts
      </v-tabs-item>
      <v-tabs-item :to="{name:'AppMainNews'}">
        News
      </v-tabs-item>
    </v-tabs-bar>  
  </v-tabs>
</template>

<script>
export default {
  name: 'AppTabs'
}
</script>

<style lang="stylus">
.vs-tabs-bar
  height 50px

.vs-logo-mini
  position absolute
  box-sizing border-box
  height 50px
  max-width 100%
  overflow hidden
  padding-top 60px
  transition padding-top .3s
  left 20px
  z-index 5
  img
    height 40px

.tabs__item--active
  font-size 16px
  font-weight 700
.tabs__slider
  height 3px
</style>
