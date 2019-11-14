<template>
  <div class="pro_list">
    <div class="header" style="background: #fff;">
      <v-touch
        tag="div"
         @tap="handleBack"
        class="iconfont icon-fanhui"
        style="font-size: 0.18rem;"
      ></v-touch>
      <span>{{title}}</span>
      <div
        class="iconfont icon-sousuo"
        style="font-size: 0.20rem;margin-right: 0.04rem; font-weight: 600;"
      ></div>
    </div>

    <div class="vantab">
      <div class="vantab_wrap">


        <div @click="i=index" :class="i===index ? 'line_active' : ''" v-for="(item,index) in tabList" :key="index">{{item.title}}</div>
        <!-- <div class="vantab_all">全部</div>
        <div class="vantab_free">自由行</div> -->




      </div>
      <div class="vantab_line"></div>
    </div>

    <div class="btntab">
      <div class="comprehensive_wrap margin_lr20">
        <span>综合</span>
        <span class="icon">
          <img src="/image/h_sanjiaoxia.png" class="sanjiao" alt />
        </span>
      </div>
      <div class="price_wrap margin_lr20">
        <span>价格</span>
        <span class="icon between">
          <img src="/image/ln_sanjiaoshang.png" class="sanjiao" alt />
          <img src="/image/ln_sanjiaoxia.png" class="sanjiao" alt />
        </span>
      </div>
      <div class="filter_wrap margin_lr20">
        <span>筛选</span>
        <span class="icon">
          <img src="/image/shaixuan.png" alt />
        </span>
      </div>
    </div>

<!-- 渲染逻辑 -->
    <div class="pro_list_wrap" v-for="(data,index) in dataList" :key="index">
      <v-touch tag="div" @tap="handleDetailIn(data.id)" class="pro_list_item">
        <img :src="data.img"/>
        <div class="pro_list_item_info">
          <div class="pro_list_item_info_title">{{data.title}}</div>
          <div class="pro_list_item_info_subtitle">
            <span v-for="(d,dex) in data.subtitle.split('|')" :key="dex">{{d}}</span>
            <!-- <span>8分钟步行至东栅景区</span>
            <span>含早晚餐下午茶</span> -->
          </div>
          <div class="pro_list_item_info_bottom">
            <ul class="pro_list_item_bottom">
              <li v-for="(mark,ind) in data.mark" :key="ind">{{mark.name}}</li>
            </ul>
            <div class="pro_list_item_price">{{data.price.split(".")[0]}}起</div>
          </div>
        </div>
      </v-touch>
    </div>

    
  </div>
</template>

<script>
import { prolistTitleApi,prolistApi,prolistThemeApi,proListThemelistApi } from "@api/prolist"
export default {
  name: "ProList",
  data() {
    return {
      tabList:[],
      dataList:[],
      title:"",
      i:0
    }
  },
  methods: {
    handleBack() {
      this.$router.back(1);
    },
    handleDetailIn(id) {
      // console.log(id)
      this.$router.push({
        path:"/detail",
        query:{
          id:id
        }
      })
    },
  },
  async created () {
    this.title = this.$route.query.title;
    let data = await prolistTitleApi(this.$route.query.districtId)
    

    let dataList = await prolistApi(this.$route.query.districtId)
    

    let theTitle = await prolistThemeApi(this.$route.query.theme_id)
    // console.log(theTitle)

    let theList = await proListThemelistApi(this.$route.query.theme_id)
    // console.log(theList)


    if (data) {
      this.tabList = data.data.list;
    } 
    if (theTitle) {
      this.tabList = theTitle.data.list;
    }
    if (dataList) {
      this.dataList = dataList.data.list
    }
    if (theList) {
      this.dataList = theList.data.list
    }
  }
};
</script>

<style scoped>

.pro_list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

header {
  width: 100%;
  height: 0.44rem;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  background: pink;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.vantab {
  padding-top: 0.44rem;
  position: relative;
}

.vantab_wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 0.14rem;
  color: #323233;
}
.vantab_wrap div {
  /* flex: 1; */
  height: 0.44rem;
  width: 0.36rem ;
  line-height: 0.44rem;
  margin: 0 0.05rem;
  padding: 0 0.05rem;
  box-sizing: border-box;
  white-space: nowrap;
}

.vantab_free {
  color: #7d7e80;
}

/* .vantab_line {
  width: 0.26rem;
  height: 0.03rem;
  position: absolute;
  bottom: 0;
  left: 0.8rem;
  background: #f44;
} */
.line_active {
  border-bottom: 0.03rem solid #f44;
}
.btntab {
  height: 0.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin_lr20 {
  margin: 0 0.2rem;
  font-size: 0.13rem;
  color: #898989;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.margin_lr20 span {
  height: 0.44rem;
  line-height: 0.44rem;
}

.comprehensive_wrap.margin_lr20 {
  color: #333;
}

.icon {
  width: 0.12rem;
  height: 0.24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon .sanjiao {
  width: 0.08rem;
  height: 0.05rem;
}

.icon.between {
  padding: 0.13rem 0 0.12rem;
  box-sizing: border-box;
  justify-content: space-between;
}

.pro_list_wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.1rem;
  display: flex;
  flex-wrap: wrap;
}
.pro_list_item {
  margin: 0 auto 0.2rem;
  width: 95%;
}   
.pro_list_item img {
  height:2.1rem;
  width: 100%;
  object-fit: cover;
}                                                                     

.pro_list_item_info {
  width: 100%;
  padding: 0.12rem 0.09rem 0;
}

.pro_list_item_info_title {
  font-family: PingFangSC-Medium;
  font-size: 0.15rem;
  color: #333;
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 0.06rem;
}

.pro_list_item_info_subtitle {
  font-family: PingFangSC-Light;
  font-size: 0.11rem;
  color: #898989;
  letter-spacing: 0.15px;
  margin-bottom: 0.09rem;
}

.pro_list_item_info_subtitle span:after {
  content: "";
  display: inline-block;
  width: 0.01rem;
  height: 0.08rem;
  background: #ccc;
  margin: 0 0.04rem;
}

.pro_list_item_info_subtitle span:last-child:after {
  display: none;
}

.pro_list_item_info_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pro_list_item_bottom {
  display: flex;
  align-items: center;
}

.pro_list_item_bottom > li {
  margin-right: 0.09rem;
  letter-spacing: 0.2px;
  color: #c14374;
  font-size: 0.1rem;
  font-family: PingFangSC-Light;
  padding: 0.03rem 0.06rem;
  border: 0.5px solid rgba(193, 67, 116, 0.2);
}

.pro_list_item_price {
  font-family: PingFangSC-Medium;
  font-size: 0.18rem;
  color: #c04374;
  letter-spacing: 0.8px;
  white-space: nowrap;
}

.pro_list_item_price::before {
  content: "\A5";
}
</style>