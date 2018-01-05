<template>
    <div class="screen">
        <h2>Select the category you want to know more about</h2>
        <router-link to="/books">
            <tile-button icon="book" title="Books" style="margin: 8px;"></tile-button>
        </router-link>
        <router-link to="/characters">
            <tile-button icon="user" title="Characters" style="margin: 8px;"></tile-button>
        </router-link>
        <router-link to="/houses">
            <tile-button icon="shield" title="Houses" style="margin: 8px;"></tile-button>
        </router-link>
    </div>
</template>

<script>
    import TileButton from '../components/tile-button.vue'

    export default {
        name: 'home',
        components: {
            'tile-button': TileButton
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'
</style>
