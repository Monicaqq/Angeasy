<template>
<div>
    <router-link tag='div' to='/' class="header-abs" v-show="showAbs"><span class="iconfont header-abs-back">&#xe624;</span></router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
    </div>
</div>
     
</template>
<script>


export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs:true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        //设置渐隐渐现的效果
        handleScroll() {
           
            const top = document.documentElement.scrollTop
            if (top > 40 ){
                let opacity = top /140
                //opacity最大值只能是1
                opacity = opacity > 1 ? 1: opacity
                this.opacityStyle = {
                    opacity
                } 
                this.showAbs = false
            }else {
                this.showAbs = true
            }
            
        }
    },
    activated (){
        //对全局事件进行绑定，会对其他组件有影响
        window.addEventListener('scroll',this.handleScroll)
    },
    //页面被替换成新的页面的时候被隐藏
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}

</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .6rem
    height .6rem
    line-height .6rem
    border-radius .4rem
    text-align center
    background rgba(0,0,0,.8)

    .header-abs-back
        color #fff
        font-size .4rem
.header-fixed
    z-index 11
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff

</style>