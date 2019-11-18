import {hotCityApi,toCityApi} from "@api/hotcity"

let state = {
    hotCity : JSON.parse(localStorage.getItem("hotCity")) || [],
    toCity: JSON.parse(localStorage.getItem("toCity")) || []
}

let actions = {
    async handleGetHotCity({commit}){
        let data = await hotCityApi();
        commit("handleHotCity",data.data.list)
    },

    async hanldeGetToCity({commit}){
        let data = await toCityApi();
        console.log(data);
        commit("handleToCity")
    }
}

let mutations = {
    handleHotCity(state,hotCity){
        state.hotCity = hotCity;
        localStorage.setItem("hotCity",JSON.stringify(hotCity));
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}

