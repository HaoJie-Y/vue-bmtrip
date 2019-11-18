<template>
    <div>
      <div class="header">
        <v-touch tag="div" @tap="handleBack" class="iconfont icon-fanhui" style="font-size: 0.24rem;font-weight: 800;"></v-touch>
        <span style="font-weight: 800;font-size: 0.17rem;letter-spacing: 0;">我的信息</span>
        <div class="header_right"></div>
    </div>
    <div class="my_content">
        <div class="myinfo_title">账户信息</div>
        <div class="myinfo_info">
            <div class="myinfo_item">
                <div class="myinfo_item_left">
                    <span class="myinfo_item_left_one">头像</span>
                    <span class="myinfo_item_left_two"><img src="https://product-ssl-qiniu.bmtrip.com/rebuild_default_avatar.png" alt=""></span>
                </div>
                <div class="myinfo_item_right">
                    <span class="myinfo_item_right_one">修改</span>
                    <span class="iconfont icon-jiantouyouxi" id="myinfo_item_right_two"></span>
                </div>
            </div>
            <div class="myinfo_item">
                    <div class="myinfo_item_left">
                        <span class="myinfo_item_left_one">昵称</span>
                        <span class="myinfo_item_left_two">请输入</span>
                    </div>
                    <div class="myinfo_item_right">
                        <span class="myinfo_item_right_one"></span>
                        <span class="myinfo_item_right_two"></span>
                    </div>
            </div>
            <div class="myinfo_item">
                    <div class="myinfo_item_left">
                        <span class="myinfo_item_left_one">手机号码</span>
                        <span class="myinfo_item_left_two"></span>
                    </div>
                    <div class="myinfo_item_right">
                        <span class="myinfo_item_right_one" style="color: #999;">13292988322</span>
                        <span class="myinfo_item_right_two"></span>
                    </div>
            </div>
        </div>
    </div>
    <div class="myinfo_save">
        保存
    </div>  
    </div>
</template>
<script>
export default {
    name: "Myinfo",
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>
<style>
    .my_content {
    padding-top: 0.44rem;
    box-sizing: border-box;
}
.myinfo_title {
    height: 0.34rem;
    font-size: 0.14rem;
    color: #999;
    line-height: 0.34rem;
    background-color: #f4f4f4;
    padding-left: .16rem;
}
.myinfo_info {
    padding: 0 0.16rem;
}
.myinfo_item {
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.myinfo_item_left_one {
    color: #20262e;
    font-size: 0.14rem;
    padding-right: 0.15rem;
}
.myinfo_item_right_one {
    color: #d8d8d8;
    font-size: 0.14rem;
}
.myinfo_item_left_two {
    color: #d8d8d8;
    font-size: 0.14rem;
    display: flex;
    align-items: center;
}
.icon-jiantouyouxi {
    font-size: 0.06rem;
    color: #d8d8d8;
    font-weight: bolder;
}
.myinfo_item_left_two img {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    padding-left: 0.2rem;
}
.myinfo_item_left {
    display: flex;
    align-items: center;
}


.myinfo_save {
    margin: 0.15rem;
    width: 3.45rem;
    height: 0.38rem;
    background: #c04374;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.15rem;

}
</style>