import http from "@utils/request";


export const prolistApi = (district_id) =>http({
    method: "get",
    url:"/api/v3/m1/product/list",
    data: {
        'district_id[]':district_id
    }
})


export const prolistTitleApi = (district_id) => http({
    method: "get",
    url:"/api/v3/m1/product/list/type",
    data: {
        district_id:district_id
    }
})




// /api/v3/m1/product/list