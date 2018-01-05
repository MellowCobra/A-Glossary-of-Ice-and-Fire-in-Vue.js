<template>
    <div id="app" class="appWrap">
        <nav-bar></nav-bar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from './nav/nav.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
    @import './style.styl'

    .nav
        overflow hidden
    
    .content
        overflow auto
        background-color $white

    .screenBar
        overflow hidden

    .screen
        overflow auto

</style>
