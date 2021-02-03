import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    snackbar: {
      show: false,
      text: 'Added To Cart',
      timeout: 2000,
    },
    Products: [{
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-1.jpg',
        name: 'Nintendo Switch',
        price: 299.99
      },
      {
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-2.jpg',
        name: 'Gameboy Mug',
        price: 19.99
      },
      {
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-3.jpg',
        name: 'Family Computer',
        price: 70
      },
      {
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-4.jpg',
        name: 'Jeopardy Game',
        price: 30
      },
      {
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-5.jpg',
        name: 'Game Cube',
        price: 99.99
      },
      {
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-6.jpg',
        name: 'Gameboy Color',
        price: 45
      }
    ]

  },
  mutations: {
    addItemToCart(state, payload) {
      const {
        itemId,
        quantity
      } = payload
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        state.cart.push({
          itemId,
          quantity
        })
      } else {
        state.cart[idx].quantity += 1
      }
    },
    updateSnackbar(state, settings) {
      state.snackbar = {
        ...state.snackbar,
        ...settings
      }
    }
  },
  actions: {

  },
  modules: {},


})
