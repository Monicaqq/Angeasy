<template>
    <div>
        <test-one></test-one>
        <test-two></test-two>
        
        <!-- <city-header></city-header> -->
        <!-- <city-search :cities="cities"></city-search> -->
        <!-- <city-list :cities="cities" :hot="hotCities" :letter='letter'></city-list> -->
        <!-- change：父组件监听子组件的change事件 -->
        <!-- <city-alphabet :cities="cities" @change='handleLetterChange'></city-alphabet> -->
    </div>
</template>

<script>
//引入子组件文件
import TestOne from './components/One'
import TestTwo from './components/Two'

export default {
    name:'Again',
    data (){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        TestOne,
        TestTwo,

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
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted (){
        this.getCityInfo()
        
    }
}

</script>

<style lang="stylus" scoped>

</style>