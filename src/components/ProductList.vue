<template>
<div>
<div class="title">
  <h2>Shop</h2>
    <p>Sustainable Streetwear from DEDICATED, Organic and Fairtrade-certified cotton, browse and fillter below.</p>
</div>
  <div class="filter_section form-inline">
    <select class="form-control br0" id="category" v-model="category">
      <option value="">Categories</option>
      <option v-for="category in options.categories" :value="category.value">{{ category.title }}</option>
    </select>

    <select class="form-control br0" id="color" v-model="color">
      <option  value="">Colors</option>
      <option v-for="color in options.colors" :value="color.value">{{ color.title }}</option>
    </select>

    <select class="form-control br0" id="size" v-model="size">
      <option  value="">Sizes</option>
      <option v-for="size in options.sizes" :value="size.value">{{ size.title }}</option>
    </select>

    <select class="form-control br0" id="sort" v-model="sort">
      <option  value="">Sorts</option>
      <option v-for="sort in options.sorts" :value="sort.value">{{ sort.title }}</option>
    </select>

    <span type="button" class="btn br1" v-on:click="reset()">Clear Filtor</span>
<div class="goods">
    <product-section v-for="product in filteredProducts" :product="product"></product-section>
</div>
</div>
  </div>
</template>

<script>
import Product from './Product'
export default {
  name: 'ProductList',
  data () {
    return {
      category: '',
      size: '',
      color: '',
      sort: '',
      options: {
        categories: [
          {
            value: 'tShirt',
            title: 't-shirt'
          },
          {
            value: 'cap',
            title: 'Cap'
          },
          {
            value: 'sweater',
            title: 'Sweater'
          }
        ],
        colors: [
          {
            value: 'black',
            title: 'Black'
          },
          {
            value: 'white',
            title: 'White'
          },
          {
            value: 'green',
            title: 'Green'
          },
          {
            value: 'brown',
            title: 'Brown'
          },
          {
            value: 'beige',
            title: 'Beige'
          },
          {
            value: 'dark-blue',
            title: 'Dark-blue'
          },
          {
            value: 'abstract',
            title: 'Abstract'
          },
          {
            value: 'grey',
            title: 'Grey'
          },
          {
            value: 'blue',
            title: 'Blue'
          },
          {
            value: 'red',
            title: 'Red'
          },
          {
            value: 'yellow',
            title: 'Yellow'
          }
        ],
        sizes: [
          {
            value: 's',
            title: 's'
          },
          {
            value: 'm',
            title: 'm'
          },
          {
            value: 'l',
            title: 'l'
          },
          {
            value: 'xl',
            title: 'xl'
          },
          {
            value: 'xxl',
            title: 'xxl'
          }
        ],
        sorts: [
          {
            value: 'Highest price first',
            title: 'Highest price first'
          },
          {
            value: 'Lowest price first',
            title: 'Lowest price first'
          }],
          products: []
      }
    }
  },
  methods:{
    reset: function(){
      this.category = '',
      this.size = '',
      this.color = '',
      this.sort = ''
    }
  },
  components: {
    'product-section': Product
  },
  created(){
    this.products = Products
  },
  computed: {
    filteredProducts(){
      var self = this
      var checkSize = function(el) {
        if(self.size=="" || el.size.indexOf(self.size) != -1){
          return true
        }
        return false
      }
      var checCategory = (el) => {
        if(self.category=="" || el.category == self.category){
          return true
        }
        return false
      }
      var checColor = (el) =>{
        if(self.color == "" || el.color == self.color){
          return true
        }
        return false
      }
      var result = this.products.filter((el) => {
        return checkSize(el) && checCategory(el) && checColor(el)
      })
      if(self.sort == 'Highest price first'){
        return result.sort(function(a, b){
            return b.price - a.price
        })
      } else if(self.sort == 'Lowest price first'){
        return result.sort(function(a, b){
           return a.price - b.price
           
      })
      } else{
        return result
      }
    }
  }

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

.filter_section{
  margin-top: 70px;
}

.br0 {
  width: 150px;
  border-radius: 0px; /*!important;*/
  margin-right: 15px;
}
.goods{
    margin-top: 20px;
}

</style>
