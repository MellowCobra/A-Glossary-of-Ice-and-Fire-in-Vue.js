<template>
    <div class="screen">
        <book-summary v-for="book in books" :book="book"></book-summary>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import BookSummary from './book-summary.vue'

    export default {
        name: 'books-screen',

        data() {
            return {}
        },

        components: {
            'book-summary': BookSummary
        },

        computed: {
            ...mapState([
                'books'
            ])
        },

        mounted() {
            this.$store.dispatch('getBooks')
        }
    }
</script>

<style lang="stylus" scoped>

</style>
