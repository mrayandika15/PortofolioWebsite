<template>
    <v-container mb-15>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <h2>Popular Product
                    <v-btn @click="AddToCart" color="primary" small text>VIEW ALL</v-btn>
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col sm="6" md="4" v-for="product in ProductItem" :key="product.name">
                        <VerticalProduct :product="product" :addToCart="addToCart" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import VerticalProduct from '../components/Card/VerticalCard.vue'

    export default {
        components: {
            VerticalProduct
        },
        data() {
            return {
                ProductItem: [{
                        image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg',
                        name: 'Nitendo Switch',
                        price: 299.9
                    },
                    {
                        image: 'https://images-na.ssl-images-amazon.com/images/I/71alMT8fYrL._AC_SL1500_.jpg',
                        name: 'Gameboy Mug',
                        price: 19.99
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Nintendo-Famicom-Console-Set-FL.jpg',
                        name: 'Family Computer',
                        price: 78
                    }
                ]
            }
        },
        methods: {
            addToCart() {
                this.$store.commit('updateSnackbar', {
                    show: true
                })
            }
        },
    }
</script>
<style>

</style>