export default  {
    path:"/detail",
    // path: "/detail/:id",
    component:_=>import("@pages/detail"),
    name:"detail",
    meta : {
        flag: false
    }
}