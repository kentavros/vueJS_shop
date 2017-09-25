<template>
<div>

  <slider :product="product"></slider>

  <div class="page">
      <p class="content">{{ product.description }}</p>
      <p style="text-align: left;">{{ product.description }}</p>
      <p class="content">{{ product.price }} EUR</p>
      <div class="select size">
        
        <select  class="br2" id="sizes" v-model="sizeSelect">
          <option  value="">Choose size</option>
          <option v-for="size in product.size" :value="size">{{ size }}</option>
        </select>
      </div>
      <div>  
        <span v-if="btn === 'Add to bag'" type="button" class="btn br1 br2" v-on:click="addToCart()">{{ btn }}</span>
        <router-link v-else to="/cart"><span class="btn br1 br2">{{ btn }}</span></router-link>
        <p v-if="msg != ''"  class="alert alert-danger">{{ msg }}</p>
      </div>
      <div class="counter">
        <router-link to="/cart">
        <img src="static/imgs/cart.png" alt="" />
        <span v-if="count > 0">{{ count }}</span>
        </router-link>
      </div>
  </div>
</div>
</template>

<script>

import Slider from './Slider'
export default {
  name: 'page',
  data () {
    return {
      id: '',
      sizeSelect: '',
      images: '',
      btn: 'Add to bag',
      msg: '',
      count: '',
      product: {},
      products: []
    }
  },
  components: {
    'Slider': Slider
  },
  methods: {
    getProdById: function(products, id){
      let self = this
      products.forEach(function(val){
        if(val.id == id){
          return self.product = val
        }
      })
    },
    getCount: function(){
      let self = this
      if (localStorage['cart']){
        var data = JSON.parse(localStorage['cart'])
        var i = 0
        self.count = 0
        for(var key in data){
          i += data[key].count
        }
        self.count = i
        return self.count 
      }
    },
    copyObj: function(obj){
      var copy = {}
      for(var key in obj){
        copy[key] = obj[key]
      }
      return copy
    },
    addToCart: function(){
      if (this.sizeSelect == ''){
        this.msg = 'Select size!'
        return false
      }
      var self = this
      this.msg = ''
    if (localStorage['cart']){
      var cart = JSON.parse(localStorage['cart'])
      if(cart.hasOwnProperty(self.product.id)){
        if (cart[self.product.id].size.indexOf(self.sizeSelect) == -1){
          cart[self.product.id].size.push(self.sizeSelect)
          cart[self.product.id].count++
          localStorage['cart'] = JSON.stringify(cart)
          this.btn = 'Proceed to chekout'
          self.getCount()
        }else{
          self.msg = 'This size is already added to the cart!'
        }
      }else{
        var data = self.copyObj(self.product)
        data.size = []
        data.size.push(self.sizeSelect)
        data.count = 1
        cart[data.id] = data
        localStorage['cart'] = JSON.stringify(cart)
        this.btn = 'Proceed to chekout'
        self.getCount()
      }
    }else{
      var data = self.copyObj(self.product)
      var cart = {}
      data.size = []
      data.size.push(self.sizeSelect)
      data.count = 1
      cart[data.id] = data
      localStorage['cart'] = JSON.stringify(cart)
      this.btn = 'Proceed to chekout'
      self.getCount()
    }
    }
    ////// TOLKO ID SIZE & COUNT - copy////
    // addToCart: function(){
    //   if (this.sizeSelect == ''){
    //     this.msg = 'Select size!'
    //     return false
    //   }
    //   var self = this
    //   this.msg = ''
    // if (localStorage['cart']){
    //   var cart = JSON.parse(localStorage['cart'])
    //   if(cart.hasOwnProperty(self.product.id)){
    //     if (cart[self.product.id].size.indexOf(self.sizeSelect) == -1){
    //       cart[self.product.id].size.push(self.sizeSelect)
    //       cart[self.product.id].count++
    //       localStorage['cart'] = JSON.stringify(cart)
    //       this.btn = 'Proceed to chekout'
    //       self.getCount()
    //     }else{
    //       self.msg = 'This size is already added to the cart!'
    //     }
    //   }else{
    //     var data = {}
    //     data.id = self.product.id
    //     data.size = []
    //     data.size.push(self.sizeSelect)
    //     data.count = 1
    //     cart[data.id] = data
    //     localStorage['cart'] = JSON.stringify(cart)
    //     this.btn = 'Proceed to chekout'
    //     self.getCount()
    //   }
    // }else{
    //   var data = {}
    //   var cart = {}
    //   data.id = self.product.id
    //   data.size = []
    //   data.size.push(self.sizeSelect)
    //   data.count = 1
    //   cart[data.id] = data
    //   localStorage['cart'] = JSON.stringify(cart)
    //   this.btn = 'Proceed to chekout'
    //   self.getCount()
    // }
    // }
  },
  created(){
    this.products = Products,
    this.id = this.$route.params.id
    this.getProdById(this.products, this.id)
    this.getCount()
  }
}
</script>
<<style>
div.page{
  width: 300px;
  float: right;
  margin-right: 200px;
  margin-top: 100px;
}
.br2{
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  text-align-last: center;
}

.content{
 font-weight: bold;
 margin-top: 30px;
 margin-bottom: 30px;
 text-align: left;
}

.counter{
  margin-top: 110px;
  width: 50px;
  height: 50px;
  display:inline-block;   
  position:relative;
  float: right;
}

.counter img{
  width: 100%;
}
.counter span{
  display: inline-block;
  position:absolute;
  bottom: 15px;
}
</style>

