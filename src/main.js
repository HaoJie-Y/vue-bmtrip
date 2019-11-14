import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import Vuex from "vuex"
import "@common/components"
//
<<<<<<< HEAD
// asd
Vue.config.productionTip = false
=======
//123123

>>>>>>> master
Vue.use(VueTouch);
Vue.use(Vuex);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
