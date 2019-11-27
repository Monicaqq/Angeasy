<template>
    <div class="header">
        <span>testone</span>
    </div>
</template>

<script>
export default {
    // 为子组件定义组件名，便于父组件引用
    name:'TestOne'
}
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
</style>