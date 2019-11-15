import http from "@utils/request"

export const ribenDetailApi = (pageId)=>http({
    method:"get",
    url:"/api/v3/m1/cms/page/detail",
    data:{
        pageId:pageId
    }
})

export const ribenListApi = (ids)=>{
    var formData = new FormData;
    formData.append("ids[0]",ids[0].id);
    formData.append("ids[1]",ids[1].id);
    formData.append("ids[2]",ids[2].id);
    formData.append("ids[3]",ids[3].id);
    formData.append("ids[4]",ids[4].id);
    formData.append("ids[5]",ids[5].id);
    formData.append("ids[6]",ids[6].id);
    formData.append("ids[7]",ids[7].id);
    formData.append("ids[8]",ids[8].id);
    formData.append("ids[9]",ids[9].id);
    formData.append("ids[10]",ids[10].id);
    formData.append("ids[11]",ids[11].id);
    formData.append("ids[12]",ids[12].id);
    formData.append("ids[13]",ids[13].id);

    return http({
        method:"post",
        url:"/api/v3/m1/product/list/by_ids",
        data:formData
    })
}