<template lang="">
    <div>
        <h3>Product</h3>

        <v-row>
            <v-col sm="3" md="6" v-for="product in $store.state.Products" :key="product.name">
                <VerticalCard :product="product" :addToCart="addToCart" />
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import VerticalCard from '../components/Card/VerticalCard.vue'
    export default {
        components: {
            VerticalCard
        },
        methods: {
            addToCart(index, quantity = 1) {
                this.$store.commit('addItemToCart', {
                    itemId: index,
                    quantity
                })
                this.$store.commit('updateSnackbar', {
                    show: true
                })
            }
        },
    }
</script>
<style lang="">

</style>