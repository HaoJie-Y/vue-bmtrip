import http from "@utils/request"


export const mudidiApi = (scene=6,platform=4) =>http({
    method: "get",
    url:"/api/v3/m1/area/group",
    data: {
        scene:scene,
        platform:platform
    }
})