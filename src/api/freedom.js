import http from "@utils/request";


export const freedomApi = ()=>http({
    method:"get",
    url:"/data/freedom.json"
})