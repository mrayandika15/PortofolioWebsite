<template>
    <v-container-fluid class="container__product">
        <v-row>
            <v-col md="3" offset-lg="1">
                <Sidebar />
            </v-col>
            <v-col md="9" lg="7">
                <ProductDisplay />
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<script>
    // @ is an alias to /src

    import ProductDisplay from '../components/ProductDisplay'
    import Sidebar from '../components/Sidebar.vue'

    export default {
        components: {
            ProductDisplay,
            Sidebar
        },
        name: 'store',

    }
</script>

<style>
    .container__product {
        margin: 20px;

    }
</style>