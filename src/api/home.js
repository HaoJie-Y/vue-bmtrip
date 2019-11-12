import http from "@utils/request";

export const homeNavApi = (pageId='5da95458b896310cf66ba97f',platform=4)=>http({
    method:"get",
    url:"api/v3/m1/cms/nav",
    data:{
        pageId:pageId,
        platform:platform
    }
})

export const homeDetailApi = (pageId='5da95458b896310cf66ba97f',platform=4)=>http({
    method:"get",
    url:"/api/v3/m1/cms/page/detail",
    data:{
        pageId:pageId,
        platform:platform
    }
})

export const homeItemApi = ()=>http({
    method:"get",
    url:"/data/data.json",
})


