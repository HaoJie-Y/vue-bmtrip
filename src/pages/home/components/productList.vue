<template>
  <div>
    <div class="product_items_container productList">
      <!-- 每一项产品 -->
      <v-touch tag="div" @tap="handleDetail(item.id)" class="product_items" v-for="item in productList" :key="item.id">
        <div class="product_items_img">
          <img
            :src="item.img"
            alt
          />
        </div>
        <div class="product_item_info">
          <div class="product_item_title">{{item.title}}}</div>
          <div class="product_item_introduce">
            <span v-for="(data,index) in item.subtitle.split('·')" :key="index">{{data}}</span>
          </div>
          <div class="product_item_tags">
            <span v-for="(child,dex) in item.mark" :key="dex">{{child.name}}</span>
          </div>
          <div class="product_item_price">￥{{item.price.split('.')[0]}}起</div>
        </div>
      </v-touch>

    </div>
  </div>
</template>

<script>

import {productIdsApi,productListApi} from "@api/product"
export default {
  name:"productList",
  data(){
    return{
      productIds:[],
      productList:[]
    }
  },
  props:{
    pageId:{
      type:String
    }
  },
  async created(){
    let productDetail = await productIdsApi(this.pageId);
    // console.log(productDetail.data.data[0].data);
    var productIds = productDetail.data.data[0].data.map(item=>{
      return Number(item.id)
    })
    this.productIds = productIds;
    this.$nextTick(async ()=>{
      let productList = await productListApi(this.productIds);
      this.productList = productList.data.list;
      console.log(this.productList)
    })
  },
  methods:{
    handleDetail(myId){
      this.$router.push({path:"/detail",query:{id:myId}})
    }
  }
};
</script>

<style>
</style>