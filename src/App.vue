<template>
  <v-app>
    <Header></Header>

    <v-scale-transition>
      <div v-if="!loading" class="text-center">
        <v-content>
          <router-view></router-view>
        </v-content>
      </div>
    </v-scale-transition>


    <Footer></Footer>

    <v-snackbar v-model="$store.state.snackbar.show" :timeout="$store.state.snackbar.timeout" top rounded="pill"
      color="green">
      {{ $store.state.snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" @click.native="$store.commit('updateSnackbar' , {show : false} )" small text
          v-bind="attrs">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-app>
    </template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
  name: 'App',

    components: {
    Header,
    Footer
    },
    data() {
    return {
   }
 },
 props:{
 loading:Object,
 }
 };
 </script>
