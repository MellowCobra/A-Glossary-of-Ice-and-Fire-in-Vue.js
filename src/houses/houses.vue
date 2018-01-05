<template>
    <div class="screen">
        <house-summary v-for="house in houses" :house="house"></house-summary>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import HouseSummary from './house-summary.vue'

    export default {
        name: 'houses-screen',

        data() {
            return {}
        },

        components: {
            'house-summary': HouseSummary
        },

        computed: {
            ...mapState([
                'houses'
            ])
        },

        mounted() {
            this.$store.dispatch('getHouses')
        }
    }
</script>

<style lang="stylus" scoped>

</style>
