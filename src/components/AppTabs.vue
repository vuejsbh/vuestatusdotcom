<template>
  <v-tabs fixed centered>
    <v-tabs-bar color="teal accent-3">
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
.tabs__item--active
  font-size 16px
  font-weight 700
.tabs__slider
  height 3px
</style>
