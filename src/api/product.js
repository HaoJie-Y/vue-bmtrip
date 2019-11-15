import http from "@utils/request"

export const productIdsApi = (pageId,platform=4)=>http({
    method:"get",
    url:"/api/v3/m1/cms/page/detail",
    data:{
        pageId:pageId,
        platform:platform
    }
})

export const productListApi = (ids)=>{
    var formdata = new FormData();
    formdata.append("ids[0]",ids[0]);
    formdata.append("ids[1]",ids[1]);
    formdata.append("ids[2]",ids[2]);
    formdata.append("ids[3]",ids[3]);
    formdata.append("ids[4]",ids[4])
    formdata.append("ids[5]",ids[5])

    return http({
        method:"post",
        url:"/api/v3/m1/product/list/by_ids",
        data:formdata
    })
}