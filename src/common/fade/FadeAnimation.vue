<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name:'FadeAnimation'
}
</script>
<style lang='stylus' scoped>
//组件显示隐藏状态，当点击的时候会显示出来，显示通过下面的动画效果，从完全透明到完全不透明状态
// opacity:0 是完全透明 opacity：1 完全不透明, v-enter是进入动画效果
.v-enter,.v-leave-to
    opacity 0
.v-enter-active,.v-leave-active
//监控opacity 0—到1为3S,0.5秒后v-enter消失，opacity 变为默认的1
    transition: opacity .5s
</style>