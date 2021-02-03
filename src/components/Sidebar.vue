<template lang="">
    <div>
        <v-sheet v-if="$vuetify.breakpoint.smAndUp" :elevation="4" class="pa-8 ml-4">
            <h3>Filters</h3>
            <v-radio-group v-model="pricefilter" :mandatory="true">
                <v-radio v-for="(price, i) in prices" :key="i" :label="price" :value="i"></v-radio>
            </v-radio-group>
        </v-sheet>
        <v-expansion-panels v-else>
            <v-expansion-panel expand-icon="fa-angle-down">
                <v-expansion-panel-header>
                    Filters
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group v-model="pricefilter" :mandatory="true">
                        <v-radio v-for="(price, i) in prices" :key="i" :label="price" :value="i"></v-radio>
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                prices: [
                    'Any',
                    'Under $25',
                    '$25 to $100',
                    '$100 to $500',
                    'Over $500'
                ],
                pricefilter: 0,
                checkbox: true
            }
        },
    }
</script>
<style lang="">

</style>