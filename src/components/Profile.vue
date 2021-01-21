<template lang="">
    <main>
        <ul>
            <li>
                <img v-bind:src='image'>
                <p>{{ hero.name }}</p>
                <p>Job:<em>{{ hero.job}}</em></p>
            </li>
        </ul>
    </main>

</template>
<script>
    export default {
        props: ['hero'],
        computed: {
            image: function () {
                return require('../assets/hero/' + this.hero.image)
            }
        },
    }
</script>
<style lang="">

</style>