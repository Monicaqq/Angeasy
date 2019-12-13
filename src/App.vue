<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <!-- <img src="./assets/logo.png"> -->
    <!-- router-view:显示的是当前路由地址所对应的内容 -->
    <router-view/>
    </keep-alive>
  </div>
</template>
  
<script>
export default {
  name: 'App'
}
</script>

<style>
/* html,body,#app { */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  

  /* height: 100%;
  width: 100%; */
/* } */
</style>
