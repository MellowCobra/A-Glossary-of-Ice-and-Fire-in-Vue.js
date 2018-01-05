<template>
    <div class="book-summary">
        <h2>{{ book.name }}</h2>
        <p>Authors: {{ book.authors.length === 0 ? "none listed" : "" }}</p>
        <ul>
            <li v-for="author in book.authors">{{ author }}</li>
        </ul>
        <p>Released: {{ book.released }}</p>
    </div>
</template>

<script>
    export default {
        name: 'book-summary',

        props: [
            'book'
        ]
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'

    .book-summary
        color $tertiaryTint
        background linear-gradient(transparent, transparent), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        margin 8px
        padding 8px
        border-radius 8px
        box-shadow 4px 3px 3px $grey
        transition background 200ms linear

    .book-summary:hover
        background linear-gradient(150deg, $tertiaryTint, transparent 10%), linear-gradient(180deg, $primaryShade, $secondaryTint 15%, $primary)
        box-shadow 5px 4px 4px $grey
</style>
