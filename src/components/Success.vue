<template>
    <div class="SuccessPage">
        <h2>Thank you {{firstName}} {{lastName}},</h2>
        <p>A letter with an order number has been sent </p>
            <p>to your email address: <span>{{email}}</span></p>
            <h4>Your purchase:</h4>
            <div class="list-prod center-block">
                <ul v-for="prod in products">
                    <li>{{prod.category}} - {{ prod.description }}: size: {{prod.size}}, color: {{ prod.color }}, price: {{prod.price}} EUR - quantity: {{ prod.count }};</li>
                </ul>
            </div>
            <h2>Total price: {{ total }} EUR</h2>
            <router-link to='/'><span>To main</span></router-link>

    </div>
</template>

<script>
    
    export default {
        name: 'SuccessPage',
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                user: '',
                total: '',
                products: '',
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            getUser: function(){
                this.user = JSON.parse(localStorage['user'])
                this.firstName = this.user.firstName
                this.lastName = this.user.lastName
                this.email = this.user.email
                this.getProducts()
                this.getTotalPrice()
            },
            getProducts: function(){
                this.products = JSON.parse(localStorage['order'])
                console.log(this.products)
            },
            getTotalPrice: function(){
                this.total = JSON.parse(localStorage['total'])
                console.log(this.total)
            }
        }
    }

</script>

<style>
span{
    font-weight: bold;
    font-size: 18px;
}
.list-prod{
    width: 500px;
}
</style>