<template>
    <div class="tile">
        <h3>{{ title }}</h3>
        <div class="icon fa fa-4x" :class="`fa-${icon}`"></div>
        <h4>{{ subtitle }}</h4>
    </div>
</template>

<script>
    export default {
        name: 'tile-button',

        data() {
            return {}
        },

        props: [
            'icon',
            'title',
            'subtitle'
        ]
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'

    .tile
        text-align center
        padding 4px
        background white
        border 2px solid $secondary
        color $primary
        width 200px
        height 140px
        cursor pointer
        transition color 250ms ease, border 250ms ease
        border-radius 8px
        
    .tile:hover
        color $secondaryTint
        border 3px solid $secondaryShade
</style>