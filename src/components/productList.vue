<template>
    <div>
        <v-row v-for="product in $store.state.Products" :key="product.name">
            <HorizontalCard :product="product" btnAction="remove" />
        </v-row>
    </div>
</template>
<script>
    import HorizontalCard from '../components/Card/HorizontalCard'
    export default {
        components: {
            HorizontalCard
        },
        methods: {
            removeFromCart() {

            }
        },
    }
</script>
<style>

</style>