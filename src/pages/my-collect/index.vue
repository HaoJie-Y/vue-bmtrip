<template>
    <div class="collect">
        <header>
            <h2>我的收藏</h2>
        </header>
        <div class="collect_tab">
            <div class="collect_tab_item1">品质跟团(2)</div>
            <div class="collect_tab_item2">定制产品(0)</div>
            <span class="line"></span>
        </div>
        <ul class="collect_list">
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
            <li class="collect_list_items">
                <div class="collect_list_items_wrap">
                    <div class="list_icon_img">
                        <img src="https://product-ssl-qiniu.bmtrip.com/product_5d142c41f28cf.jpg?imageMogr2/gravity/Center/thumbnail/!140x140r/crop/140x140" alt="">
                    </div>
                    <div class="list_icon_txt">
                        <p class="list_des">童趣泰北|清迈6天5晚亲子之旅</p>
                        <div class="all_price">¥4999</div>
                    </div>
                </div>
                <span class="item_cancel">移除</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "My-collect"
    }
</script>

<style scoped>
    .collect{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
    }

    header{
        width:100%;
        height:0.44rem;
        /* border-bottom:1px solid #ccc; */
        box-sizing: border-box;
        background:#fff;
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
    }
    header>h2{
        line-height:0.44rem;
        text-align: center;
        font-weight: bolder;
    }

    .collect_tab{
        padding-top:0.44rem;
        position: relative;
        height:0.3rem;
        background:#fff;
    }

    .collect_tab>div{
        position:absolute;
        top:0.44rem;
        width:1.04rem;
        height:0.3rem;
        text-align:center;
        line-height:0.3rem;
        font-size:0.14rem;
        color:#20262E;
    }

    .collect_tab_item1{
        left:19%;
    }

    .collect_tab_item2{
        left:54%;
    }

    body{
        background:#f4f4f4;
    }

    .line{
        display:block;
        width:0.71rem;
        height:0.01rem;
        position:absolute;
        border-bottom:0.02rem solid #c04374;
        bottom: 0;
        left:23%;
    }



    .collect_list_items{
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        background: #fff;
        height: 1.06rem;
        padding-left: 0.15rem;
        padding-right: 0.15rem;
        position: relative;
    }

    .collect_list_items_wrap{
        display:flex;
        align-items: center;;
        height:100%;
    }

    .list_icon_img{
        width:0.7rem;
        height:100%;
        margin-right:0.15rem;
        display:flex;
        align-items: center;
    }
    .list_icon_img img{
        width:100%;
    }

    .list_icon_txt{
        height:100%;
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding:0.18rem 0 0.28rem;
        box-sizing: border-box;
    }
    .list_des{
        font-size: 0.14rem;
        color: #20262e;
        line-height: 0.24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .all_price{
        color: #6e747d;
        font-size:0.14rem;
    }


    .item_cancel{
        position: absolute;
        right:0.06rem;
        bottom:0.16rem;
        margin:0 0.1rem;
        color:#c04374;
        font-size:0.14rem;
    }
</style>