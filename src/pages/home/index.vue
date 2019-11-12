<template>
    <div class="page">
        <Header title="首页" iconLeft iconRight>
            <!-- <div slot="left" class="iconfont icon-sousuo" style="font-size: 0.24rem;"></div> -->
            <div slot="left" class="header_left" :style="left.style"></div>
            <div slot="right" class="header_right" :style="right.style"></div>
        </Header>
        <div class="content">
        <div class="top_bar">
            <ul>
                <div class="li_line"></div>
                <li>首页</li>
                <li>双十一来啦</li>
                <li>双淘亲子</li>
                <li>超级旅行团 </li>
                <li>日本枫叶季</li>
                <li>梦幻跌落</li>
                <li>诗画欧洲</li>
                <li>小众中东非</li>
                <li>美洲澳新</li>
                <li>祖国最美</li>
            </ul>
        </div>
        <!-- banner -->
        <div class="home_banner">
            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da95664517f6.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                alt="">
        </div>

        <!-- travelType -->
        <div class="travelType">
            <ul>
                <li><span><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_tourgroup@3x.png"
                            alt=""></span><i>旅行团</i></li>
                <li><span><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_customtour@3x.png  "
                            alt=""></span><i>定制游</i></li>
                <li><span><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_freetravel@3x.png"
                            alt=""></span><i>自由行</i></li>
                <li><span><img src="https://product-ssl-qiniu.bmtrip.com/20191018icn_touraround@3x.png"
                            alt=""></span><i>周边行</i></li>
            </ul>
        </div>


        <!-- center_bar -->
        <div class="center_bar">
            <ul>
                <li>
                    <span><img src="https://product-ssl-qiniu.bmtrip.com/product_5da966d7639a2.png" alt=""></span>
                    <i>欢淘亲子</i>
                </li>
                <li>
                    <span><img src="https://product-ssl-qiniu.bmtrip.com/product_5da95744ba689.png" alt=""></span>
                    <i>精选邮轮</i>
                </li>
                <li>
                    <span><img src="https://product-ssl-qiniu.bmtrip.com/product_5da9579d0dcfb.png" alt=""></span>
                    <i>海盗海滨</i>
                </li>
                <li>
                    <span><img src="https://product-ssl-qiniu.bmtrip.com/product_5da957f75c98b.png" alt=""></span>
                    <i>周边酒店</i>
                </li>
                <li>
                    <span><img src="https://product-ssl-qiniu.bmtrip.com/product_5da958af81b48.png" alt=""></span>
                    <i>经典观光</i>
                </li>

            </ul>
            <div class="center_bar_btn">
                <span class="center_bar_btn_active"></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!-- home_items -->
        <div class="products">
            <div class="product">
                <div class="product_title"><img
                        src="https://product-ssl-qiniu.bmtrip.com/product_5da96a0eec23b.png?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x32r/crop/339x32/format/jpg/interlace/1/sharpen/1/quality/100!"
                        alt=""></div>
                <div class="product_items_container">

                    <!-- 每一项产品 -->
                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da820342900e.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>
                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da820342900e.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da540e300ced.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da820342900e.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="products">
            <div class="product">
                <div class="product_title"><img
                        src="https://product-ssl-qiniu.bmtrip.com/product_5da96a0eec23b.png?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x32r/crop/339x32/format/jpg/interlace/1/sharpen/1/quality/100!"
                        alt=""></div>
                <div class="product_items_container">

                    <!-- 每一项产品 -->
                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da820342900e.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>
                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da540e300ced.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da540e300ced.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                    <div class="product_items">
                        <div class="product_items_img">
                            <img src="https://product-ssl-qiniu.bmtrip.com/product_5da820342900e.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!165x102r/crop/165x102/format/jpg/interlace/1/sharpen/1/quality/100!"
                                alt="">
                        </div>
                        <div class="product_item_info">
                            <div class="product_item_title">神奇动物在这里|新西兰11天9晚</div>
                            <div class="product_item_introduce">
                                <span>亲自首选</span>
                                <span>羊咩咩牧场</span>
                                <span>萤火虫洞</span>
                                <span>萤火虫洞</span>
                            </div>
                            <div class="product_item_tags">
                                <span>欢淘亲子</span>
                                <span>含机票</span>
                                <span>热卖</span>
                            </div>
                            <div class="product_item_price">
                                ￥32,800起
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            left:{
                style:"background:  50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')"
            },
            right:{
                style:"background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');"
            }
        }
    }
}
</script>

<style>
    /* banner */
 .home_banner {
    margin: 0.18rem;
    width: 100%;
    height: 1.9rem;
    /* box-sizing: border-box; */
 }
 .home_banner img {
    width: 3.39rem;
    height: 1.89rem;
 }

 /* travelType */
 .travelType {
     margin: 0.18rem 0.18rem 0.25rem;
     width: 3.39rem;
     height: 0.58rem;
 }
 .travelType ul {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .travelType ul li {
     display: flex;
     width: 0.84rem;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 .travelType ul li span {
     width: .36rem;
     height: .36rem;
     margin-bottom: 0.06rem;
 }
 .travelType ul li span img {
    width: .36rem;
    height: .36rem;
}
.travelType ul li i {
    font-size: 0.12rem;
    height: .16rem;
    display: block;
    line-height: 0.16rem;
}

/* center_bar */
.center_bar {
    margin: .18rem .18rem .32rem;
}
.center_bar ul {
    height: .378rem;
    display: flex;
    justify-content: space-between;
}
.center_bar ul li {
    width: .863rem;
    height: .378rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}
.center_bar ul li span {
    width: .2rem;
    height: .2rem;
    margin-bottom: 0.05rem;
}
.center_bar ul li span img {
    width: .2rem;
    height: .2rem;
}
.center_bar ul li i {
    font-size: 0.1rem;
    display: flex;
    height: .12rem;
}

.center_bar_btn {
    margin-top: 0.1rem;
    height: 0.13rem;
    width: 100%;
    display: flex;
    justify-content: center;
}
.center_bar_btn span {
    display: block;
    width: .15rem;
    height: .02rem;
    background: #f0f0f0;
    margin-right: 0.01rem;
    margin-top: 0.08rem;
}
.center_bar_btn .center_bar_btn_active {
    background: #c14374;
}

/* productList*/
.productList {
    margin: 0.18rem 0.18rem 0.24rem;
}

</style>
