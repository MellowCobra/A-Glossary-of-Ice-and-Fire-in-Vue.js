<template>
    <div class="character-summary">
        <!-- <pre>{{ character }}</pre> -->
        <h2>Name: {{ character.name || 'none given' }}</h2>
        <p>{{ character.gender }}</p>
        <p>Aliases: {{ character.aliases.length === 0 ? 'none' : ''}}</p>
        <ul>
            <li v-for="alias in character.aliases">{{ alias }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'character-summary',

        props: [
            'character'
        ]
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'

    .character-summary
        color $tertiaryTint
        background linear-gradient(transparent, transparent), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        margin 8px
        padding 8px
        border-radius 8px
        box-shadow 4px 3px 3px $grey
        transition background 200ms linear

    .character-summary:hover
        background linear-gradient(150deg, $tertiaryTint, transparent 10%), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        box-shadow 5px 4px 4px $grey
</style>
