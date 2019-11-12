<template>
    <div>
        <div class="header" style="border-bottom: 1px solid #f9f9f9;">
        <div class="header_left"></div>
        <span>目的地</span>
        <div class="header_right"></div>
    </div>

    <!-- content -->
    <div class="mudidi_content content">
        <div class="mudidi_left">
            <ul>
                <li class="mudidi_active">日本</li>
                <li>欧洲</li>
                <li>泰国</li>
                <li>东南亚</li>
                <li>南海</li>
                <li>中东/非洲</li>
                <li>美洲/澳新</li>
                <li>国内</li>
            </ul>
        </div>
        <div class="mudidi_right">
          <div class="mudidi_right_top">
            <div><img src="https://product-ssl-qiniu.bmtrip.com/product_5d77689f2734e.jpg?imageView2/1/format/jpg/interlace/1/q/80" alt=""></div>
            <div><img src="https://product-ssl-qiniu.bmtrip.com/product_5d7768bc352bc.jpg?imageView2/1/format/jpg/interlace/1/q/80" alt=""></div>
            <div><img src="https://product-ssl-qiniu.bmtrip.com/product_5dc4df5b3bc29.jpeg?imageView2/1/format/jpg/interlace/1/q/80" alt=""></div>
            <div><img src="https://product-ssl-qiniu.bmtrip.com/product_5d7768ec5fb1b.jpg?imageView2/1/format/jpg/interlace/1/q/80" alt=""></div>
          </div>
          <div class="mudidi_more">
            更多目的地  <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt=""></span>
          </div>

          <div class="mudidi_hot_tuijian">
            <div class="mudidi_hot_title">热门推荐</div>
            <div class="mudidi_hot">
              <div class="mudidi_hot_item">
                <div class="mudidi_hot_item_img">
                  <img src="https://product-ssl-qiniu.bmtrip.com/product_5dc4e1710944b.jpeg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!229x141r/crop/229x141/format/jpg/interlace/1/sharpen/1/quality/100!" alt="">
                </div>
                <div class="mudidi_hot_item_title">初见东瀛| 日本7天6晚初旅之行</div>
                <div class="mudidi_hot_item_info">
                  <span>温泉酒店</span>
                  <span>富士急乐园</span>
                  <span>特色餐食</span>
                  <span>和服体验</span>
                  <span>新干线</span>
                  <span>温泉酒店</span>
                  <span>温泉酒店</span>
                </div>
                <div class="mudidi_hot_item_price">
                  ￥13,000起
                </div>
              </div>
              <div class="mudidi_hot_item">
                <div class="mudidi_hot_item_img">
                  <img src="https://product-ssl-qiniu.bmtrip.com/product_5dc4e1710944b.jpeg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!229x141r/crop/229x141/format/jpg/interlace/1/sharpen/1/quality/100!" alt="">
                </div>
                <div class="mudidi_hot_item_title">初见东瀛| 日本7天6晚初旅之行</div>
                <div class="mudidi_hot_item_info">
                  <span>温泉酒店</span>
                  <span>富士急乐园</span>
                  <span>特色餐食</span>
                  <span>和服体验</span>
                  <span>新干线</span>
                  <span>温泉酒店</span>
                  <span>温泉酒店</span>
                </div>
                <div class="mudidi_hot_item_price">
                  ￥13,000起
                </div>
              </div>
              <div class="mudidi_hot_item">
                <div class="mudidi_hot_item_img">
                  <img src="https://product-ssl-qiniu.bmtrip.com/product_5dc4e1710944b.jpeg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!229x141r/crop/229x141/format/jpg/interlace/1/sharpen/1/quality/100!" alt="">
                </div>
                <div class="mudidi_hot_item_title">初见东瀛| 日本7天6晚初旅之行</div>
                <div class="mudidi_hot_item_info">
                  <span>温泉酒店</span>
                  <span>富士急乐园</span>
                  <span>特色餐食</span>
                  <span>和服体验</span>
                  <span>新干线</span>
                  <span>温泉酒店</span>
                  <span>温泉酒店</span>
                </div>
                <div class="mudidi_hot_item_price">
                  ￥13,000起
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
    name: "Mudidi"
}
</script>
<style>
    .mudidi_content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.66rem;
}
.mudidi_left {
    width: 1.06rem;
    height: 100%;
    background-color:#f9f9f9;
}
.mudidi_right {
    flex: 1;
    /* background-color: powderblue; */
    padding: 0.2rem 0.13rem 0 0.2rem;
}
.mudidi_left ul {
    width: 100%;
    height: 100%;
}
.mudidi_left ul li {
    width: 100%;
    height: .48rem;
    font-size: 0.13rem;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mudidi_active {
    background: #fff;
    font-weight: 600;
}
.mudidi_right_top {
    display: flex;
    flex-wrap: wrap;
}
.mudidi_right_top div{
    margin-right: 0.07rem;
    margin-bottom: 0.07rem;
    width: 1.10rem;
    height: 0.72rem;
    /* background-color: pink; */
}
.mudidi_right_top div img {
    width: 100%;
    height: 100%;
}
.mudidi_more {
    width: 2.1rem;
    height: 0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
    color: #333;
}
.mudidi_more span {
    width: .12rem;
    height: .12rem;
}
.mudidi_more span img {
    width: 100%;
    height: 100%;
}

.mudidi_hot_title {
    padding-top: 0.22rem;
    padding-bottom: 0.22rem;
    font-size: 0.16rem;
    color: #333;
}
.mudidi_hot_item {
    height: 2.33rem;
    padding-bottom: 0.18rem;

}
.mudidi_hot_item_img {
    padding-bottom: 0.09rem;
    width: 2.29rem;
    height: 1.41rem;
}
.mudidi_hot_item_img img {
    width: 100%;
    height: 100%;
}
.mudidi_hot_item_title {
    font-size: 0.12rem;
    height: 0.16rem;
    line-height: 0.16rem;
    color: #333;
    padding-bottom: 0.05rem;
}
.mudidi_hot_item_info {
    display: flex;
    flex-wrap: wrap;
}
.mudidi_hot_item_info span {
    font-size: 0.1rem;
    color: #898989;
    display: flex;
    align-items: center;
}
.mudidi_hot_item_info span:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 8px;
    background: #ccc;
    margin: 1px 4px 0;
}
.mudidi_hot_item_price {
    color: #c04374;
    padding-top: 0.08rem;
}


</style>