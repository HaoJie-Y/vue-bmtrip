import http from "@utils/request"

export const centerApi = () => http ({
    method: "get",
    url: "/api/v3/m1/user/info/list"
})