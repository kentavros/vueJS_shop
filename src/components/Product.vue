<template>
  <div class="article">
    <p><router-link :to="{name: 'page', params: { id: product.id }}"><img :src="product.imgs[0]" alt="" class="product.img"/></router-link></p>
    <p>{{ product.description }} - <span>{{ product.price }} EUR</span></p>
    
  </div>
</template>

<script>
import Page from './Page'
export default {
  name: 'productSection',
  props: ['product']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.article{
    width: 270px;
    height: 300px;
    float: left;
    text-align: center;
    margin-left: 40px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.article img{
    width: 100%;
}

.article span{
    font-weight: bolder;
}
</style>
