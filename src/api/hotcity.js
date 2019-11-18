import http from "@utils/request"

export const hotCityApi = (platform=4)=>http({
    method:"get",
    url:"/api/v3/m1/customize/departure",
    data:{
        platform:platform
    }
})

export const toCityApi = (scene=3,platform=4)=>http({
    method:"get",
    url:"/api/v3/m1/area/group",
    data:{
        scene:scene,
        platform:platform
    }
})