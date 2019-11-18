<template>
  <div>
    <!-- 领取优惠卷 -->
    <div class="goodOne" v-for="item in ribenDetail" :key="item.id">
      <a href>
        <img :height="item.img.h" :width="item.img.w" :src="item.img.url" alt />
      </a>
    </div>

    <div class="product_items_container productList">
      <!-- 每一项产品 -->
      <v-touch tag="div" class="product_items" @tap="handleDetail(item.id)" v-for="item in ribenList" :key="item.id">
        <div class="product_items_img">
          <img :src="item.img" alt />
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
import { ribenDetailApi, ribenListApi } from "@api/riben";
export default {
  data() {
    return {
      ribenDetail: "",
      ribenList: []
    };
  },
  props: {
    pageId: {
      type: String
    }
  },
  async created() {
    let detail = await ribenDetailApi(this.pageId);
    this.ribenDetail = detail.data.data[0].data;

    let dataList = await ribenListApi(detail.data.data[1].data);
    this.ribenList = dataList.data.list;
    // console.log(this.ribenList);
  },
   methods:{
    handleDetail(myId){
      this.$router.push({path:"/detail",query:{id:myId}})
    }
  }
};
</script>

<style scoped>
.goodOne {
  width: auto;
  height: auto;
}
</style>