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
          <v-touch tag="li" @tap="handleClick(index)" :class="i===index ? 'mudidi_active' : ''" v-for="(item,index) in mudidiList" :key="index">{{item.label}}</v-touch>
        </ul>
      </div>

      <div class="mudidi_right">
        <div class="mudidi_right_top">
           
          <v-touch tag="div" @tap="handleProIn(data.id,data.label)" v-for="(data,index) in mudidiChildren" :key="index">
            <img :src="data.img"/>
          </v-touch>
         
        </div> 
        <div class="mudidi_more" v-if="mudidiChildren.length>4">
          更多目的地
          <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4="
              alt
            />
          </span>
        </div>
<!-- 热门推荐 -->
        <div class="mudidi_hot_tuijian">
          <div class="mudidi_hot_title">热门推荐</div>

          <div class="mudidi_hot">

<!-- 热门推荐的每一个项目  -->
            <v-touch tag="div" @tap="handleDetailIn(item.id)" class="mudidi_hot_item" v-for="(item,index) in mudidiProduct" :key="index">
              <div class="mudidi_hot_item_img">
                <img
                  :src="item.img"
                />
              </div>
              <div class="mudidi_hot_item_title">{{item.title}}</div>
              <div class="mudidi_hot_item_info">
                <span v-for="(data,dex) in item.subtitle.split('|')" :key="dex">{{data}}</span>
                <!-- <span>富士急乐园</span>
                <span>特色餐食</span>
                <span>和服体验</span>
                <span>新干线</span>
                <span>温泉酒店</span>
                <span>温泉酒店</span> -->
              </div>
              <div class="mudidi_hot_item_price">￥{{item.price}}起</div>
            </v-touch>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mudidiApi } from "@api/mudidi";
export default {
  name: "Mudidi",
  data() {
    return {
      mudidiList:[],
      mudidiChildren:[],
      mudidiProduct:[],
      mudidiSubtitle:[],
      i:0
    }
  },
  async created() {
    let data = await mudidiApi();
    this.mudidiList = data.data.list;
    this.mudidiChildren = this.mudidiList[this.i].children;
    this.mudidiProduct = this.mudidiList[this.i].product;
    // this.mudidiSubtitle = this.
    // console.log(data)
  },
  methods: {
    handleClick(index) {
      this.i = index
      this.mudidiChildren = this.mudidiList[this.i].children;
      this.mudidiProduct = this.mudidiList[this.i].product;
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
    handleProIn(id,title) {
      // console.log(id,title)
      
      this.$router.push({
        path:"/proList",
        query:{
          districtId:id,
          title:title
        }
      })
    }
  }
};
</script>
<style scoped> 
.mudidi_content {
  display: flex;
  justify-content: space-between; 
  padding-bottom: 0.66rem;
  padding-top: 0.44rem;
}
.mudidi_left {
  width: 1.06rem;
  height: 100%;
  background-color: #f9f9f9;
  /* position: fixed;
  top: 0.44rem;
  left: 0; */
}
.mudidi_right {
  flex: 1;
  /* background-color: powderblue; */
  padding: 0.2rem 0.13rem 0 0.2rem;
  /* position: absolute;
  right: -0.1rem;
  top:0.44rem; */
  width: 2.45rem;
}
.mudidi_left ul {
  width: 100%;
  height: 100%;
}
.mudidi_left ul li {
  width: 100%;
  height: 0.48rem;
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
  width: 2.37rem;
  height: 1.58rem;
  overflow: hidden;
}
.mudidi_right_top div {
  margin-right: 0.07rem;
  margin-bottom: 0.07rem;
  width: 1.1rem;
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
  width: 0.12rem;
  height: 0.12rem;
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
  /* display: flex;
  align-items: center; */
  /* flex-wrap: wrap; */
  text-align: center;
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