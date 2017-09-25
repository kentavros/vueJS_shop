<template>
    <div class="row">
            <div class="col-md-12 right_sidebar">
              <h4>Select Payment Method</h4>
            <div style="margin-bottom: 20px">
              <label class="radio">
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Credit Card
              </label>
              <label class="radio">
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">PayPal
              </label>
            </div>

            
                <div class="form">
                    <h4>Your Details</h4>
                    <form @submit.prevent="validForm">
                        <p><input v-model="firstName" type="text" name="firstName" placeholder="*First name"></p>
                        <p v-if="errFirst != ''" class="alert-danger">{{ errFirst }}</p>
                        <p><input v-model="lastName" type="text" name="lastName" placeholder="*Last name"></p>
                        <p v-if="errLast != ''" class="alert-danger">{{ errLast }}</p>
                        <p><input v-model="email" type="text" name="email" placeholder="*Email"></p>
                        <p v-if="errEmail != ''" class="alert-danger">{{ errEmail }}</p>
                        <p><input v-model="telephone" type="text" name="telephone" placeholder="Telephone"></p>
                        <p><input v-model="adressLine1" type="text" name="adressLine1" placeholder="Adress Line 1"></p>
                        <p><input v-model="adressLine2" type="text" name="adressLine2" placeholder="Adress Line 2"></p>
                        <p><input v-model="postcode" type="text" name="postcode" placeholder="Postcode"></p>
                        <p><input v-model="city" type="text" name="city" placeholder="City"></p>
                        <p><select v-model="country">
                          <option  value="">Country</option>
                          <option v-for="country in countries.country" :value="country.value">{{ country.title }}</option>
                        </select></p>
                        <div class="checkbox">
                        <label><input type="checkbox" value="" checked>Option 1</label>
                        </div>
                        <div class="checkbox">
                        <label><input type="checkbox" value="">Option 2</label>
                        </div>
                        <button type="submit">Complete purchase</button>
                    </form>
                </div>
            </div>

    </div>


</template>

<script>
    var checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/
    export default {
        name: 'Cartform',
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                telephone: '',
                adressLine1: '',
                adressLine2: '',
                postcode: '',
                city: '',
                country:'',
                countries: {
                  country: [
                    {
                      value: 'ukrain',
                      title: 'Ukrain'
                    },
                    {
                      value: 'usa',
                      title: 'United states of america'
                    },
                    {
                      value: 'china',
                      title: 'China'
                    }
                  ]
                },
                errFirst: '',
                errLast: '',
                errEmail: ''
            }
        },
        methods: {
            validForm: function() {
              if (localStorage['cart'] && this.isValidFirstName() && this.isValidLastName() && this.isValidEmail()){
                delete localStorage['cart']
                var user = {}
                user.firstName = this.firstName
                user.lastName = this.lastName
                user.email = this.email
                localStorage['user'] = JSON.stringify(user)
                window.location.href = '#/success'
              }else{
                return false
              }
            },
            isValidFirstName: function(){
              if (this.firstName.search(checkName) != -1){
                this.firstName = this.firstName.trim()
                this.errFirst=''
                return true
              }
              else {
                this.errFirst = 'Fild cannot be empty'
                return false
              }
            },
            isValidLastName: function(){
              if (this.lastName.search(checkName) != -1){
                this.lastName = this.lastName.trim()
                this.errLast=''
                return true
              }
              else {
                this.errLast = 'Fild cannot be empty'
                return false
              }
            },
            isValidEmail: function(){
              if (checkEmail.test(this.email)){
                this.errEmail = ''
                return true
              }else{
                this.errEmail = 'Wrong Email format'
              }
            }
        }
}
</script>

<style>

.center {
    text-align: center;
}

.form button {
    background: #222;
    width: 100%;
    color: #fff;
    border: none;
    padding: 10px;
}

input {
    border: 1px solid #222;
    padding:5px;
    width: 100%;
}

select {
  border: 1px solid #222;
  width: 80%;
  padding:3px;
  margin-right: 50px; 
}
.radioBtn{
  position: relative;
  right: 120px;
}

</style>