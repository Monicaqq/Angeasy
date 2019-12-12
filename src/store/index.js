import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



//通过vuex 创建仓库
export default new Vuex.Store({
    //state存放全局公用数据
   
    state,
    mutations
    
})

