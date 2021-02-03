<template>
    <v-sheet :height="sheetHeight">
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <v-carousel class="hidden-xs-only">
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
                        reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>

                <h1 class="hidden-sm-and-up text-center display-1">
                    Welcome To GG Gaming Shop
                </h1>

            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
    export default {
        data() {
            return {
                items: [{
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>
<style>

</style>