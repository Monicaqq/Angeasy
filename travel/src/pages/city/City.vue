<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

export default {
    name:'City',
    data (){
        return {
            cities:{},
            hotCities:[]
        }

    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo (){
            // 发送axios请求
            axios.get('./api/city.json')
            //返回值是promise，所以用then接收
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res){
            res = res.data
            console.log(res)
            if(res.ret &&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
        }
        }
    },
    mounted (){
        this.getCityInfo()
        
    }
}

</script>
<style lang="stylus" scoped>

</style>