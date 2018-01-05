<template>
    <div class="house-summary">
        <h3>{{ house.name }}</h3>
        <p>{{ house.region }}</p>
        <p>{{ house.coatOfArms }}</p>
    </div>
</template>

<script>
    export default {
        name: 'house-summary',

        props: [
            'house'
        ]
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'

    .house-summary
        color $tertiaryTint
        background linear-gradient(transparent, transparent), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        margin 8px
        padding 8px
        border-radius 8px
        box-shadow 4px 3px 3px $grey
        transition background 200ms linear

    .house-summary:hover
        background linear-gradient(150deg, $tertiaryTint, transparent 10%), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        box-shadow 5px 4px 4px $grey
</style>
