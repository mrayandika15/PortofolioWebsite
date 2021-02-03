<template>
 <v-app>

<headerHome></headerHome>
<products />

</v-app>
</template>

<script>
  import headerHome from '../components/Header-Home.vue'
  import products from '../components/Products.vue'
  // @ is an alias to /src
  export default {
    components: {
      headerHome,
      products
    },
    name: 'Home',

    }
</script>
