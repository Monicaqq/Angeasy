<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <!-- <router-link to='./city'>    
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe64a;</span>  
            </div>
        </router-link>        -->
        <router-link to='./again'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe64a;</span>
            </div>
        </router-link> 
    </div>
    
</template>
<script>
export default {
    name:'HomeHeader',
    props: {
        city: String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
        width .64rem
        float left
    .header-input
        flex:1
        background #fff
        border-radius .1rem
        margin-top .12rem
        height .64rem
        line-height .64rem
        margin-left .2rem
        color #ccc
    .header-right
        width 1.24rem
        float right
        text-align center
</style>