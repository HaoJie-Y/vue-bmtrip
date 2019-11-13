import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import Vuex from "vuex"
import "@common/components"
//
//123123

Vue.use(VueTouch);
Vue.use(Vuex);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
