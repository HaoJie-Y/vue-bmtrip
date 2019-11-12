import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import detail from "./detail"
import freedom from "./freedom"
import mudidi from "./mudidi"
import myinfo from "./myinfo"
import mycoupon from "./mycoupon"
import search from "./search"
import bmfind from "./bmfind"
import settings from "./settings"
import center from "./center"
import myCollect from "./my-collect"
import customized from "./customized"
import tourGroup from "./tour-group"
import proList from "./proList"
Vue.use(VueRouter)


const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path:"/",
            redirect:"/home"
        },
        home,
        detail,
        freedom,
        mudidi,
        myinfo,
        mycoupon,
        search,
        bmfind,
        settings,
        center,
        myCollect,
        customized,
        tourGroup,
        proList
    ]
})

export default router;