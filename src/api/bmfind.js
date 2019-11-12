import http from "@utils/request";

export const bmfindNavApi = (platform=4)=>http({
    method:"get",
    url:"api/v3/article/type",
    data:{
        platform:platform
    }
})