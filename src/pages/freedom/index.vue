<template>
  <div>
    <div class="header" style="border-bottom:0.5px solid #ebedf0;">
      <v-touch tag="div" @tap="handleBack"
        class="iconfont icon-fanhui"
        style="font-size: 0.16rem;font-weight:bold;color: #666464;"
      ></v-touch>
      <span>自由行</span>
      <div class="header_right"></div>
    </div>

    <div class="content">
      <div class="product_items_container productList">
        <!-- 每一项产品 -->
        <div class="product_items" v-for="(item,index) in list" :key="index">
          <a :href="item.url">
            <div class="product_items_img">
            <img
              :src="item.img"
            />
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
            <div class="product_item_price">￥{{item.price}}起</div>
          </div>
          </a>
        </div>

       
      </div>
    </div>
  </div>
</template>
<script>
import {freedomApi} from "@api/freedom"
export default {
  name: "Freedom",
  data() {
    return {
      list:[]
    }
  }, methods: {
    handleBack () {
      this.$router.back(1);
    }
   },
  async created(){
    let data = await freedomApi();
    this.list = data.data.list;
    console.log(this.list); 
  }
};
</script>
<style scoped>

.content {
  padding: 0.44rem 0 0.66rem;
}
</style>