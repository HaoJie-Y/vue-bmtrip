import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import Vuex from "vuex"
import "@common/components"
import store from "./store"
// import "./lib/loading/index"

Vue.config.productionTip = false
Vue.use(VueTouch);
Vue.use(Vuex);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
