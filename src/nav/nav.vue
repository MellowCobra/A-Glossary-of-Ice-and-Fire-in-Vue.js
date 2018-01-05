<template>
    <nav id="nav">
        <div class="navBar-logo">
            <router-link to="/home">
                <img class="u-imgResp" style="display: block" :src="imgSrc">
            </router-link>
        </div>

        <div class="navBar-title">
            <h2>A Glossary of Ice and Fire</h2>
        </div>

        <div class="links">
            <router-link to="/home" class="navBar-link">
                <div class="navBar-icon">
                    <i class="fa fa-home fa-2x fa-fw"></i>
                </div>
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    @import '../colors.styl'

    nav
        height 70px
        line-height 70px
        display flex

        background-color $primary
        background-image linear-gradient(128deg, rgb(58, 164, 147), rgb(54, 126, 133));

    nav > h1,h2,h3,p,span,a
        line-height 70px

    .links
        display inline-flex

    .router-link-active > .navBar-icon
        color $tertiaryShade

    .navBar-icon
        position relative
        cursor pointer
        color $tertiaryTint

    .navBar-icon:hover
        color $primaryTint

    .navBar-icon i
        margin 16px
        vertical-align middle

    .navBar-logo
        padding 8px
        display inline-flex
        height 100%

    .navBar-title
        display inline-flex
        margin-right: 40px

    .navBar-title h2
        margin 0
        color white
        letter-spacing 4px

    .u-imgResp
        height 100%

</style>
