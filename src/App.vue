<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
    margin:0;
    padding:0;
}

body{
    width: 1000px;
    margin: 0 auto;
}
.br1 {
    border-radius: 0px; /*!important;*/
    background-color: black;
    color: white;
}
.br1:hover{
    color: deepskyblue;
}
.br1:active{
    color: red;
}


</style>
