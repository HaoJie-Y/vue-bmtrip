import http from "@utils/request";


export const prolistApi = (district_id) =>http({
    method: "get",
    url:"/api/v3/m1/product/list",
    data: {
        'district？_id[]':district_id
    }
})


export const prolistTitleApi = (district_id) => http({
    method: "get",
    url:"/api/v3/m1/product/list/type",
    data: {
        district_id:district_id
    }
})



export const prolistThemeApi = (theme_id) => http({
    method: "get",
    url:"/api/v3/m1/product/list/type",
    data: {
        theme_id:theme_id 
    }
})

export const proListThemelistApi = (theme_id) => http({
    method: "get",
    url:"/api/v3/m1/product/list",
    data: {
        'theme_id[]':theme_id
    }
})

export const proListSearchApi = (keywords) => http({
    method:"get",
    url:"/api/v3/m1/product/list",
    data:{
        keywords:keywords
    }
})