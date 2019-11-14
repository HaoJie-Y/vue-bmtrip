<template>
  <div class="page">
    <Header :title="title" iconLeft iconRight>
      <div slot="left" class="header_left" :style="left.style"></div>
      <div slot="right" class="header_right" :style="right.style"></div>
    </Header>
    <div class="content">
      <div class="top_bar" style="z-index:1000000000">
        <ul>
          <v-touch
            tag="li"
            @tap="handleActive(index,pageId)"
            v-for="(item,index) in homeNavList"
            :key="index"
            pageId="item.pageId"
            :class="activeIndex == index ? 'active' :''" 
          >{{item.name}}
          <div class="li_line" ref="line" v-if="activeIndex == index"></div>
          </v-touch>
        </ul>
      </div>

      <Home/>  

    </div>
  </div>
</template>

<script>
import Home from "./components/home"
import {
  homeNavApi,
  homeDetailApi,
} from "@api/home";
export default{
  components:{
    Home
  },
  data(){
    return{
      homeNavList: [],
      title:"",
      activeIndex:0,
      left: {
        style:
          "background:  50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')"
      },
      right: {
        style:
          "background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');"
      }
    }
  },
  async created(){
    let navData = await homeNavApi();
    this.homeNavList = navData.data.nav;
    let detailData = await homeDetailApi();
    this.title = detailData.data.pageName;
  },
    methods:{
    handleActive(index){
      this.activeIndex = index;
    }
  }
}
// import {
//   homeNavApi,
//   homeDetailApi,
//   homeIconsApi,
//   homeGroupApi,
//   homeTitleApi,
//   homeEmptyApi,
//   homeItemApi
// } from "@api/home";
// export default {
//   name: "Home",
//   data() {
//     return {
//       homeNavList: [],
//       detailDataList: [],
//       bannerList: [],
//       travelTypeIconList: [],
//       centerBarList: [],
//       itemTitleList: [],
//       itemContentList: [],
//       itemEmptyList: [],
//       topItemList: [],
//       centerItemList: [],
//       bottomItemList: [],
//       title: "",
//       activeIndex:0,
//       left: {
//         style:
//           "background:  50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')"
//       },
//       right: {
//         style:
//           "background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');"
//       }
//     };
//   },
//   async created() {
//     let navData = await homeNavApi();
//     this.homeNavList = navData.data.nav;
//     let detailData = await homeDetailApi();
//     this.detailDataList = detailData.data.data;
//     this.title = detailData.data.pageName;
//     this.bannerList = this.detailDataList[0].data;
//     this.$nextTick(() => {
//       var mySwiper = new Swiper(".banner", {
//         autoplay: 3000,
//         pagination: ".swiper-pagination",
//         loop: true
//       });
//       var centerSwiper = new Swiper(".swiper-container", {
//         autoplay: 3000,
//         pagination: ".swiper-pagination",
//         loop: true
//       });
//     });

//     let travelTypeIcon = await homeIconsApi();
//     this.travelTypeIconList = travelTypeIcon.data.list;

//     console.log(this.bannerList)
//     console.log("aaa");

//     let centerBar = await homeGroupApi();
//     this.centerBarList = centerBar.data.list;

//     let itemTitles = await homeTitleApi();
//     this.itemTitleList = itemTitles.data;

//     let itemContents = await homeItemApi();
//     this.itemContentList = itemContents.data.list;
//     let itemEmpty = await homeEmptyApi();
//     this.itemEmptyList = itemEmpty.data;

//     // console.log(this.itemTitleList)
//     // console.log(this.itemContentList)
//     // console.log(this.itemEmptyList)

//     console.log(this.homeNavList);

//     for (var i = 0; i < 2; i++) {
//       this.topItemList.push({
//         title: this.itemTitleList[i],
//         content: [],
//         bottom: this.itemEmptyList[i]
//       });
//       for (var j = 4 * i; j < 4 * (i + 1); j++) {
//         this.topItemList[i].content.push(this.itemContentList[j]);
//       }
//     }

//     for (var i = 2; i < 5; i++) {
//       this.centerItemList.push({
//         title: this.itemTitleList[i],
//         content: [],
//         bottom: this.itemEmptyList[i]
//       });
//       for (var j = i * 3 + 2; j < i * 3 + 5; j++) {
//         this.centerItemList[i - 2].content.push(this.itemContentList[j]);
//       }
//     }

//     this.bottomItemList.push({ title: this.itemTitleList[5], content: [] });
//     for (var i = 17; i < 21; i++) {
//       this.bottomItemList[0].content.push(this.itemContentList[i]);
//     }
//   },
//   methods:{
//     handleActive(index){
//       this.activeIndex = index;
//     }
//   }
// };
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
  background:#fff;
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


.products:last-child{
  margin-bottom:0.3rem;
}

.active{
  color:#c04374;
}

.top_bar ul .li_line {
    z-index: 1;
    left: 50%;
    bottom: 0px;
    height: 3px;
    position: absolute;
    border-radius: 3px;
    width: 18px;
    background: #c14374;
    transform:translateX(-50%);
}


.top_bar ul li {
  position: relative;

}

</style>
