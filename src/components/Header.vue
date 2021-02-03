<template>
    <div>
        <v-app-bar>
            <v-toolbar-title>GG Gaming Shop</v-toolbar-title>

            <v-progress-linear :indeterminate="loading" :active="loading" absolute bottom color="green">
            </v-progress-linear>

            <v-spacer></v-spacer>

            <span class="hidden-sm-and-up">
                <v-btn @click.stop="drawer = !drawer">
                    <v-icon>fa-bars</v-icon>
                </v-btn>
            </span>


            <v-toolbar-items class="hidden-xs-only">
                <v-btn to="/" text @click="loading = true">
                    <v-icon small left>fa-home</v-icon>
                    Home
                </v-btn>
                <v-btn to="/store" text @click="loading = true">
                    <v-icon small left>fa-shopping-basket</v-icon>
                    Store
                </v-btn>
                <v-btn to="/cart" text @click="loading = true">
                    <v-icon small left>fa-shopping-cart</v-icon>
                    Cart
                </v-btn>
                <v-btn to="/about" text @click="loading = true">
                    <v-icon small left>fa-info</v-icon>
                    About
                </v-btn>

            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
                    <v-list-item-icon>
                        <v-icon small>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>


    </div>
</template>
<script>
    export default {
        data() {
        return {
        drawer:false,
        items: [
        {title: 'Home', link:'/' , icon:'fa-home'},
        {title: 'Store', link:'/store' , icon:'fa-shopping-basket'},
        {title: 'Cart', link:'/cart' , icon:'fa-shopping-cart'},
        {title: 'About', link:'/about' , icon:'fa-info'}

        ] ,
        loading:false,
        }
        },
        watch: {
        loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 1000)
        },
        },
    }
</script>
<style>

</style>