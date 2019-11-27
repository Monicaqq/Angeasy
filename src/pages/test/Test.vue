<template>
    <div>
        <test-one></test-one>
        <test-two></test-two>
    </div>
</template>

<script>
//引入子组件文件
import TestOne from './components/One'
import TestTwo from './components/Two'

export default {
    name:'Test',
    data (){
        return {
          
        }
    },
    components:{
        TestOne,
        TestTwo,
    }
}

</script>

<style lang="stylus" scoped>

</style>