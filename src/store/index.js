import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: {}
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setCart(state, payload) {
      state.cart[payload.id] = { ...payload }
    },
    clearCart(state) {
      state.cart = {}
    },
    increment(state, payload) {
      state.cart[payload].amount++
    },
    decrement(state, payload) {
      state.cart[payload].amount--
      if (state.cart[payload].amount === 0) {
        delete state.cart[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducts', data)
      } catch (e) {
        console.log(e)
      }
    },
    addToCart({commit, state}, product) {
      state.cart.hasOwnProperty(product.id)
        ? product.amount = state.cart[product.id].amount + 1
        : product.amount = 1
      commit('setCart', product)
    }
  },
    getters: {
      totalAmount(state) {
        return Object.values(state.cart).reduce((acc, {amount}) => acc + amount, 0)
      },
      totalPrice(state) {
        return Object.values(state.cart).reduce((acc, {amount, price}) => acc + amount * price, 0) 
      }
    },
  modules: {
  }
})
