import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import detail from "./detail"
import freedom from "./freedom"
import mudidi from "./mudidi"
import myinfo from "./myinfo"
import mycoupon from "./mycoupon"
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
        mycoupon
    ]
})

export default router;