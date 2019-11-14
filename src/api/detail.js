import http from "@utils/request"

export const detailApi = (product_id=1978,platform=4) =>http({
    method: "get",
    url:"/api/v3/m1/product/detail",
    data: {
        product_id:product_id,
        platform:platform
    }
})

