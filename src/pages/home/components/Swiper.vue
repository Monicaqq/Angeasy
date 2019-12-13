<template>
    <div class="wrapper">
        <swiper :options='swiperOption' v-if="showSwiper">
            <swiper-slide v-for="item of list" :key=item.id>
                <img class='swiper-img' :src='item.imgUrl'/>
            </swiper-slide>
            <!-- 显示轮播图的点 -->
            <div class="swiper-pagination" id="pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        list:Array
    },
    data(){
        return {
            swiperOption:{
                // autoplay:true,
                pagination:'.swiper-pagination',
                loop:true
            } 
        }
    },
    computed:{
        showSwiper (){
            return this.list.length
        }
    }
}
</script>
<style lang='stylus'scoped>
// 因为scoped只能修饰当前组件的样式,swiper-pagination-bullet-active是swiper组件里面的样式
//采用样式穿透，不受scoped的限制
.wrapper >>> .swiper-pagination-bullet-active
    background #fff 
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #eee
        
        .swiper-img
            width 100%
        .swiperOption
            height .23rem
            bottom 0
</style>