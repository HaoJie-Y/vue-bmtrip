<template>
<keep-alive exclude>
  <div>
    <div class="header" style="background: rgba(0, 0, 0, 0);">
      <v-touch tag="div" @tap="handleBack" class="iconfont icon-fanhui" style="font-size: 0.24rem;color: #fff;"></v-touch>
      <span></span>
      <div
        class="iconfont icon-fenxiang"
        style="font-size: 0.24rem;color: #fff;margin-right: 0.04rem;"
      ></div>
    </div>
    <div class="contentd">
      <div class="detail_banner">
        <img
          :src="url"
        />
      </div>
      <div class="detail_info">
        <p class="detail_info_title">{{detail.title}}</p>
        <p class="detail_info_small">{{detail.label}}</p>
        <div class="detail_biaoqian">
          <div v-for="marks in detailMark" :key="marks.id">{{marks.name}}</div>
          <!-- <div>{{detail.mark[1].name}}</div>
          <div>{{detail.mark[2].name}}</div> -->
        </div>
        <div class="detail_price">
          <span class="detail_price_one">参报价</span>
          <!-- priceFilter -->
<!--  -->
          <!--  -->
          <span class="detail_price_two">￥{{detail.min_price}}</span>
          <span class="detail_price_three">起/人</span>
        </div>
      </div>

      <div class="detail_city">
        <div>全国</div>
        <div>
          <span>切换城市</span>
          <i class="iconfont icon-arrow-copy"></i>
        </div>
      </div>
<!-- 
      <transition name="bottom">
        <div class="bottom" v-if="isShow"></div>
      </transition> -->

    </div>

    <!-- 详情页的底部 -->
    <div class="detail_footer">
      <div class="kefu_like">
        <div>
          <span class="iconfont icon-kefu"></span>
          <i>客服</i>
        </div>
        <div>
          <span class="iconfont icon-shoucang"></span>
          <i>收藏</i>
        </div>
      </div>
      <div class="want_dingzhi">我要定制</div>
    </div>
  </div>
</keep-alive>
</template>
<script>
import { detailApi } from "@api/detail"
export default {
  name: "Detail",
  data () {
		return {
      detail:"",  
      detailMark:[],
      url:"",
      // isShow:true
		}
  },
  methods: {
    handleBack () {
      this.$router.back(1);
    }
   },
   filters: {
      priceFilter(value) {
        return value.split(".")[0]
      }
   },
  async created () {
    let data = await detailApi(this.$route.query.id);
    this.detail = data.data;
    this.detailMark = this.detail.mark;
    // console.log(data)
    this.url = this.detail.product_img_wx[0].url
  }
};
</script>
<style>
/* .bottom {
  width: 100%;
  height: 1rem;
  background: pink;
} */

.header {
  width: 3.75rem;
  height: 0.44rem;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 999;
  position: fixed;
  top: 0;
}
.header span {
  font-size: 0.15rem;
  line-height: 0.15rem;
  color: #333;
  letter-spacing: 0.01rem;
  flex: 1;
  text-align: center;
}
.header div {
  width: 0.2rem;
  height: 0.2rem;
}

/* detail */
.detail_banner {
  width: 3.75rem;
  height: 3.75rem;
}
.detail_banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.contentd {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
}
.detail_info {
  width: 3.55rem;
  margin: 0 0.1rem;
  padding-bottom: 0.2rem;
  /* box-sizing: border-box; */
  border-bottom: 1px solid #dddbdb;
}
.detail_info_title {
  font-size: 0.18rem;
  color: #333;
  letter-spacing: 0.01rem;
  text-align: center;
  margin-top: 0.16rem;
  font-weight: 300;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.detail_info_small {
  font-size: 0.12rem;
  color: #333;
  letter-spacing: 0.005rem;
  text-align: center;
  margin-top: 0.15rem;
  font-weight: 300;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.detail_biaoqian {
  padding: 0.15rem 0 0.2rem;
  display: flex;
  justify-content: center;
}
.detail_biaoqian div {
  font-size: 0.1rem;
  border: 1px solid #333;
  /* width: 20px; */
  height: 0.12rem;
  padding: 0.03rem 0.08rem;
  margin: 0 0.04rem;
  color: #333;
  font-weight: 300;
  /* box-sizing: border-box; */
}

.detail_price {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.detail_price span {
  display: block;
  color: #c04374;
  margin-right: 0.05rem;
}
.detail_price_one {
  font-size: 0.14rem;
}
.detail_price_two {
  font-size: 0.18rem;
}
.detail_price_three {
  font-size: 0.1rem;
  color: #a1a1a1 !important;
}

.detail_city {
  width: 100%;
  height: 0.75rem;
  padding: 0.24rem 0.2rem 0.23rem;
  /* margin: 0 0.2rem; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d0d0;
}
.detail_city > div:nth-of-type(1) {
  font-size: 0.16rem;
}
.detail_city > div:nth-of-type(2) {
  font-size: 0.13rem;
}

/* 详情页的底部 */
.detail_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  background: #f6f6f6;
}
.kefu_like {
  width: 1.6rem;
  display: flex;
  justify-content: space-between;
}
.kefu_like div {
  width: 0.8rem;
  padding: 0.17rem 0.1rem 0.17rem 0.24rem;
  display: flex;
  align-items: center;
}
.kefu_like div .icon-kefu,
.kefu_like div .icon-shoucang {
  font-size: 0.16rem;
  color: #9d9b9b;
  margin-right: 0.05rem;
}
.kefu_like div i {
  font-size: 0.12rem;
  color: #9d9b9b;
}
.want_dingzhi {
  width: 1.32rem;
  height: 0.5rem;
  background-color: #c04374;
  font-size: 0.16rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>