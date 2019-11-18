<template>
  <div>
      <!-- banner -->
      <div class="home_banner">
        <!-- <img src="https://product-ssl-qiniu.bmtrip.com/product_5da95664517f6.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
        alt="">-->
        <div class="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                <img :src="item.img.url" :height="item.img.h" :width="item.img.w" alt />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- travelType -->
      <div class="travelType">
        <ul>
          <!-- <router-link
            :to="data.url"
            tag="li"
            v-for="(data,index) in travelTypeIconList"
            :key="index"
          > -->
          <v-touch tag="li" v-for="(data,index) in travelTypeIconList" :key="index" @tap="handleType(data.url,index)">
            <span>
              <img :src="data.img" alt />
            </span>
            <i>{{data.label}}</i>
            </v-touch>
          <!-- </router-link> -->
        </ul>
      </div>

      <!-- center_bar -->
      <div class="center_bar">
        <ul>
          <v-touch tag="li" @tap="handleTheID(data.id,data.label)" v-for="data in centerBarList" :key="data.id">
            <span>
              <img :src="data.img" alt />
            </span>
            <i>{{data.label}}</i>
          </v-touch>
        </ul>
      </div>

      <!-- home_items -->
<!-- topItmeList -->
      <div class="products" v-for="data in topItemList" :key="data.id">
        <div class="product">
          <div class="product_title">
            <img :src="data.title.img.url" alt />
          </div>
          <div class="product_items_container">
            <!-- 每一项产品 -->
            <v-touch tag="div" @tap="handleDetailIn(item.id)" class="product_items" v-for="item in data.content" :key="item.id">
              <div class="product_items_img">
                <img :src="item.img" alt />
              </div>
              <div class="product_item_info">
                <div class="product_item_title">{{item.title}}</div>
                <div class="product_item_introduce">
                  <span
                    v-for="(child,dex) in item.subtitle.split('·')"
                    :key="dex + new Date().getTime()"
                  >{{child}}</span>
                </div>
                <div class="product_item_tags">
                  <span
                    v-for="(tag,num) in item.mark"
                    :key="num + new Date().getTime()"
                  >{{tag.name}}</span>
                </div>
                <div class="product_item_price">￥{{item.price.split('.')[0]}}起</div>
              </div>
            </v-touch>
          </div>
        </div>
      </div>

<!-- centerItemList -->
      <div class="products" v-for="(data,index) in centerItemList" :key="index">
        <div class="product">
          <div class="product_title">
            <img :src="data.title.img.url" alt />
          </div>
          <div class="product_items_container">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <v-touch tag="div" @tap="handleDetailIn(item.id)" class="swiper-slide" v-for="item in data.content" :key="item.id">
                  <img style="height:210px" :src="item.img" alt />
                  <div class="trim_wrap_item_info">
                    <div class="trim_wrap_item_info_title">{{item.title}}</div>
                    <div class="trim_wrap_item_info_subtitle">
                      <span
                        v-for="(child,dex) in item.subtitle.split('·')"
                        :key="dex + new Date().getTime()"
                      >{{child}}</span>
                    </div>
                    <div class="trim_wrap_item_info_bottom">
                      <ul class="trim_wrap_item_info_tag">
                        <li
                          v-for="(child,dex) in item.mark"
                          :key="dex + new Date().getTime()"
                        >{{child.name}}</li>
                      </ul>
                      <div class="trim_wrap_item_info_price">{{item.price.split('.')[0]}}起</div>
                    </div>
                  </div>
                </v-touch>
              </div>
            </div>
          </div>
        </div>
      </div>

<!-- bottomItemList -->
      <div
        class="products product_swiper"
        v-for="data in bottomItemList"
        :key="data.id"
      >
        <div class="product">
          <div class="product_title">
            <img :src="data.title.img.url" alt />
          </div>
          <div class="product_items_container">
            <!-- 每一项产品 -->
            <v-touch tag="div" @tap="handleDetailIn(item.id)" class="product_items" v-for="item in data.content" :key="item.id">
              <div class="product_items_img">
                <img :src="item.img" alt />
              </div>
              <div class="product_item_info">
                <div class="product_item_title">{{item.title}}</div>
                <div class="product_item_introduce">
                  <span
                    v-for="child in item.subtitle.split('·')"
                    :key="child.id"
                  >{{child}}</span>
                </div>
                <div class="product_item_tags">
                  <span
                    v-for="(tag,num) in item.mark"
                    :key="num"
                  >{{tag.name}}</span>
                </div>
                <div class="product_item_price">￥{{item.price.split('.')[0]}}起</div>
              </div>
            </v-touch>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
import {
  homeNavApi,
  homeDetailApi,
  homeIconsApi,
  homeGroupApi,
  homeTitleApi,
  homeEmptyApi,
  homeItemApi
} from "@api/home";
export default {
  name: "homeCom",
  data() {
    return {
      homeNavList: [],
      detailDataList: [],
      bannerList: [],
      travelTypeIconList: [],
      centerBarList: [],
      itemTitleList: [],
      itemContentList: [],
      itemEmptyList: [],
      topItemList: [],
      centerItemList: [],
      bottomItemList: [],
      pageId:"",
      title: "",
      activeIndex:0,
      left: {
        style:
          "background:  50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')"
      },
      right: {
        style:
          "background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');"
      }
    };
  },
  async created() {
    let navData = await homeNavApi();
    this.homeNavList = navData.data.nav;
    let detailData = await homeDetailApi();
    this.detailDataList = detailData.data.data;
    this.pageId = detailData.data.pageId;
    this.handleHome();
    this.title = detailData.data.pageName;
    this.bannerList = this.detailDataList[0].data;
    this.$nextTick(() => {
      var mySwiper = new Swiper(".banner", {
        autoplay: 3000,
        pagination: ".swiper-pagination",
        loop: true
      });
      var centerSwiper = new Swiper(".swiper-container", {
        autoplay: 3000,
        pagination: ".swiper-pagination",
        loop: true
      });
    });
    let travelTypeIcon = await homeIconsApi();
    this.travelTypeIconList = travelTypeIcon.data.list;


    let centerBar = await homeGroupApi();
    this.centerBarList = centerBar.data.list;
// 
    // console.log(this.centerBarList)

    let itemTitles = await homeTitleApi();
    this.itemTitleList = itemTitles.data;

    let itemContents = await homeItemApi();
    this.itemContentList = itemContents.data.list;
    let itemEmpty = await homeEmptyApi();
    this.itemEmptyList = itemEmpty.data;

    // console.log(this.itemTitleList)

    // console.log(this.itemContentList)
    // console.log(this.itemEmptyList)


    for (var i = 0; i < 2; i++) {
      this.topItemList.push({
        title: this.itemTitleList[i],
        content: [],
        bottom: this.itemEmptyList[i]
      });
      for (var j = 4 * i; j < 4 * (i + 1); j++) {
        this.topItemList[i].content.push(this.itemContentList[j]);
      }
    }

    for (var i = 2; i < 5; i++) {
      this.centerItemList.push({
        title: this.itemTitleList[i],
        content: [],
        bottom: this.itemEmptyList[i]
      });
      for (var j = i * 3 + 2; j < i * 3 + 5; j++) {
        this.centerItemList[i - 2].content.push(this.itemContentList[j]);
      }
    }

    this.bottomItemList.push({ title: this.itemTitleList[5], content: [] });
    for (var i = 17; i < 21; i++) {
      this.bottomItemList[0].content.push(this.itemContentList[i]);
    }
    
  },
  computed:{
    ...mapState({
      footerActive:state=>state.home.footerActive
    })
  },
  methods:{
    handleActive(index){
      this.activeIndex = index;
    },
    handleHome(){
      this.$emit("handleSend",this.pageId)
    },
    handleTheID(id,title) {
      // console.log(id,title)
      this.$router.push({
        path:"/proList",
        query:{
          theme_id:id,
          title:title
        }
      })
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
    handleType(url,index){
        this.$router.push({path:url})
        if(index===1){
          this.$store.commit("home/footerChange")
          localStorage.setItem("active",2)
        }
        if(index===3){
          let path = url.split("?")[0];
          let query = url.split("?")[1];
          let themeId = query.split("&")[0].split("=")[1];
          let title = "周边酒店";
          this.$router.push({path:path,query:{theme_id:themeId,title:title}})
        }
    },
    // ...mapMutations([
    //   'footerChange'
    //   ]
    // )
  }
};
</script>

<style scoped>
.banner {
  position: relative;
}
.content {
  overflow-x: hidden;
}
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
  width: 0.36rem;
  height: 0.36rem;
  margin-bottom: 0.06rem;
}
.travelType ul li span img {
  width: 0.36rem;
  height: 0.36rem;
}
.travelType ul li i {
  font-size: 0.12rem;
  height: 0.16rem;
  display: block;
  line-height: 0.16rem;
}

/* center_bar */
.center_bar {
  margin: 0.18rem 0.18rem 0.32rem;
  overflow: auto;
}
.center_bar ul {
  height: 0.378rem;
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  width: auto;
}
.center_bar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.center_bar ul li {
  width: 0.863rem !important;
  height: 0.378rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 0 0.1rem;
}
.center_bar ul li span {
  width: 0.2rem;
  height: 0.2rem;
  margin-bottom: 0.05rem;
}
.center_bar ul li span img {
  width: 0.2rem;
  height: 0.2rem;
}
.center_bar ul li i {
  font-size: 0.1rem;
  height: 0.12rem;
  white-space: nowrap;
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
  width: 0.15rem;
  height: 0.02rem;
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

.trim_wrap_item_info {
  padding: 0.12rem 0.09rem 0;
}

.trim_wrap_item_info_title {
  margin-bottom: 0.06rem;
  font-size: 0.15rem;
  color: #333;
  letter-spacing: 0.15px;
  font-weight: 500;
}

.trim_wrap_item_info_subtitle {
  font-family: PingFangSC-Light;
  font-size: 0.11rem;
  color: #898989;
  letter-spacing: 0.15px;
  margin-bottom: 0.09rem;
  text-align: left;
}

.trim_wrap_item_info_subtitle span:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 0.08rem;
  background: #ccc;
  margin: 0 0.04rem;
}

.trim_wrap_item_info_subtitle span:last-child:after {
  display: none;
}

.trim_wrap_item_info_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trim_wrap_item_info_tag {
  display: flex;
  align-items: center;
}
.trim_wrap_item_info_tag > li {
  margin-right: 0.09rem;
  letter-spacing: 0.2px;
  color: #c14374;
  font-size: 0.1rem;
  font-family: PingFangSC-Light;
  padding: 0.03rem 0.06rem;
  border: 0.5px solid rgba(193, 67, 116, 0.2);
}
.trim_wrap_item_info_price {
  font-family: PingFangSC-Medium;
  font-size: 0.18rem;
  color: #c04374;
  letter-spacing: 0.8px;
  white-space: nowrap;
}
.trim_wrap_item_info_price::before {
  content: "\A5";
}

.products:last-child {
  margin-bottom: 0.3rem;
}


</style>