<template>
    <div class="screen">
        <character-summary v-for="character in characters" :character="character"></character-summary>
        <!-- <pre>{{ characters }}</pre> -->
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CharacterSummary from './character-summary.vue'

    export default {
        name: 'characters-screen',

        data() {
            return {}
        },

        components: {
            'character-summary': CharacterSummary
        },

        computed: {
            ...mapState([
                'characters'
            ])
        },

        mounted() {
            this.$store.dispatch('getCharacters')
        }
    }
</script>

<style lang="stylus" scoped>

</style>
