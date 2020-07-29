import Vue from 'vue'
import Vuex from 'vuex' //importamos vuex
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex) // utilizamos esta linea

  const store = new Vuex.Store({
    state: {
      respuestaClicks: 0 // acá guardamos puntaje
    },
    mutations: { // hacer click
      increment(state) {
        state.respuestaClicks++
      }
    }
  })
  // acá pasamos el Store a la instancia Vue

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
