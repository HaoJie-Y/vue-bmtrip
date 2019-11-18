import Vue from "vue"

import Vuex from "vuex"
import home from "./home"
import city from "./city"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        home,
        city  
    }
})

export default store;