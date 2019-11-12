<template>
    <div>
         <div class="header">
        <div class="iconfont icon-jiantou-zuo" style="font-size: 0.24rem;font-weight: 800;"></div>
        <span style="font-weight: 800;font-size: 0.17rem;letter-spacing: 0;">我的优惠券</span>
        <div class="header_right"></div>
    </div>
    <div class="mycoupon">
        <div class="coupon_bar">
            <div class="coupon_active">未使用</div>
            <div>已使用</div>
            <div>已失效</div>
        </div>
        <div class="coupon_duihuan">
            <input type="text" placeholder="请输入兑换码">
            <div>兑换</div>
        </div>
        <div class="coupon_item">
            <!-- <img src="./img/youhuiquan.png" alt=""> -->
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "Mycoupon"
}
</script>
<style >
    .coupon_bar {
    width: 2.47rem;
    height: 0.44rem;
    padding: 0 0.64rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.44rem;
}
.coupon_bar div {
    width: 0.82rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.14rem;
    text-align: center;
}
.coupon_active {
    color: #c04374;
    border-bottom: 1px solid #c04374;
}
.coupon_duihuan {
    height: .56rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    margin-bottom: 0.1rem;
} 
.coupon_duihuan div {
    width: .78rem;
    height: .36rem;
    line-height: 0.36rem;
    text-align: center;
    background-color: #bebebe;
    color: hsla(0,0%,100%,.87);
    font-size: 0.17rem;

}
.coupon_duihuan input {
    width: 2.5rem;
    height: .35rem;
    border: 1px solid #bebebe;
}
.coupon_item {
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    width: 3.45rem;
    height: 0.97rem;
    background-color: #575c64;
    border-radius: .05rem;
}
.coupon_item img {
    width: 3.45rem;
    height: 0.97rem;
}
</style>