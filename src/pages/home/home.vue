<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list='iconList'></home-icons>
        <home-recommend :list='recommendList'></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>        
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    //引用局部组件
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper:HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            lastCity:'',       
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        ...mapState (['city'])
    },
    methods: {
        getHomeInfo (){
            // 以api开头，会找到/static/mock下的地址
            axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res){
            res = res.data
            if(res.ret&& res.data){
                const data = res.data
           
                this.iconList = data.iconList
                this.swiperList = data.swiperList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList  
            }
            console.log(res)
        }
        
    },
    //重新挂载会执行mounted
    mounted (){
        // console.log('mounted')
        this.lastCity = this.city
        this.getHomeInfo()
    },
    //页面重新显示会执行activated
    activated(){
        // console.log('activated')
        if (this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
<style>
</style>