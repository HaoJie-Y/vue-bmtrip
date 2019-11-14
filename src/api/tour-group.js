import http from "@utils/request"

export const tourApi = ()=>http({
    method:"get",
    url:"/data/tour-group/data.json"
})

export const tourDetailApi = ()=>http({
    method:"get",
    url:"/data/tour-group/detail.json"
})