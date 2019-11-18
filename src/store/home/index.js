let state = {
    footerActive:JSON.parse(localStorage.getItem("active"))
}

let actions = {

}

let mutations = {
    footerChange(state){
        state.footerActive = 2;
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true 
}