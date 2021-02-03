<template lang="">
    <div>
        <v-card outlined>
            <v-card-title primary-title>
                Payment Details
            </v-card-title>
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-card-text>
                <p>Total : $9999</p>
                <v-btn color="primary" @click="GotoCheckout">Checkout</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default {
        methods: {
            GotoCheckout() {
                this.$router.push({
                    name: 'CheckoutView'
                })
            }
        },
    }
</script>
<style lang="">

</style>