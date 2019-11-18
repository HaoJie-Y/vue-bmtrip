import LoadingView from "./index.vue"
import Vue from "vue"
class JSLoading {
    constructor() {
        let LoadingFn = Vue.extend(LoadingView)
        // console.log(LoadingFn)
        this.loadingVm = new LoadingFn({ 
            el:document.createElement("div")
        })
        this.loadingMount()
    }
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    destoryLoading() {
       this.loadingVm.$mount().$el.remove()

    }
}

export default new JSLoading()
/*
vue.extend实现继承

*/ 