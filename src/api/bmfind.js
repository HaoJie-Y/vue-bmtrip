import http from "@utils/request";

export const bmfindNavApi = (platform=4)=>http({
    method:"get",
    url:"api/v3/article/type",
    data:{
        platform:platform
    }
})

export const bmfindItemApi = (sort_id=0,page=1,size=6,platform=4)=>http({
    method:"get",
    url:"api/v3/article/list",
    data:{
        sort_id:sort_id,
        page:page,
        size:size,
        platform:platform
    }
})