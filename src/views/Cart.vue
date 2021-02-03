<template>
    <v-container>
        <v-row>
            <v-col sm="8" md="5" offset-md="1" lg="4" offset-lg="3">
                <productList />
            </v-col>
            <v-col sm="4" md="3" order="first" order-sm="last">
                <Checkout />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import productList from '../components/productList.vue'
    import Checkout from '../components/checkout.vue'
    export default {
        components: {
            productList,
            Checkout
        },
    }
</script>
<style>

</style>