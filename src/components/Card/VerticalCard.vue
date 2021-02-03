<template>
    <v-card outlined>
        <v-img :src="product.image" height="200px">
        </v-img>
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-subtitle>${{ product.price }}</v-card-subtitle>
        <v-card-actions>
            <v-btn color="success" outlined @click="addToCart">
                <v-icon left small>fa-plus</v-icon>
                Add To Cart
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        props: {
            product: Object,
            addToCart: Function,
        }
    }
</script>
<style lang="">

</style>