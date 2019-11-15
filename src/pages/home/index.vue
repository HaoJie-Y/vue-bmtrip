<template>
  <div class="page">
    <Header :title="title" iconLeft iconRight>
      <v-touch tag="div" @tap="handleSearch" slot="left" class="header_left" :style="left.style"></v-touch>
      <v-touch tag="div" @tap="handlePhone" slot="right" class="header_right" :style="right.style"></v-touch>
    </Header>
    <div class="content">
      <div class="top_bar">
        <ul>
          <li
            v-for="(item,index) in homeNavList"
            :key="index"
            pageId="item.pageId"
            :class="activeIndex == index ? 'active' :''"
          >
            <v-touch tag="span" @tap="handleActive(index,item.pageId,$event)">{{item.name}}</v-touch>
            <div class="li_line" ref="line" v-if="activeIndex == index"></div>
          </li>
        </ul>
      </div>
      <keep-alive>
        <Home :pageId="homeId" v-if="nowPageId===homeId"/>
        <Group :pageId="groupId" v-if="nowPageId===groupId" />
        <Children :pageId="childrenId" v-if="nowPageId===childrenId" :key="childrenId"/>

        <Riben :pageId="ribenId" v-if="nowPageId===ribenId" :key="ribenId"/>
        
        <Menghuan :pageId="menghuanId" v-if="nowPageId===menghuanId"/>
        <ProductList :pageId="ouzhouId" v-if="nowPageId===ouzhouId" :key="ouzhouId"/>
        <ProductList :pageId="dongfeiId" v-if="nowPageId===dongfeiId" :key="dongfeiId"/>
        <ProductList :pageId="meizhouId" v-if="nowPageId===meizhouId" :key="meizhouId"/>
        <ProductList :pageId="chinaId" v-if="nowPageId===chinaId" :key="chinaId"/>
      </keep-alive>

      <!-- <Group /> -->
    </div>

    
    <div class="tellphone" v-if="phoneShow">
      <div class="tellContent">
          <div class="top">
            <span>联系客服</span>
            <v-touch tag="img" @tap="handlePhone" src="/image/guanbi.png" alt="" />
          </div>
          <i class="iconfont icon-kefu"></i>
          <p class="number">400-021-9988</p>
          <button class="call">立即拨打</button>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/home";
import Group from "./components/group";
import Riben from "./components/riben"
import Menghuan from "./components/menghuan"
import ProductList from "./components/productList"
import Children from "./components/children"
import { homeNavApi, homeDetailApi } from "@api/home";
export default {
  components: {
    Home,
    Group,
    Riben,
    Menghuan,
    ProductList,
    Children
  },
  data() {
    return {
      homeNavList: [],
      title: "",
      activeIndex: 0,
      nowPageId: "5da95458b896310cf66ba97f",
      homeId: "5da95458b896310cf66ba97f",
      groupId: "",
      childrenId: "",
      ribenId:"",
      menghuanId:"",
      ouzhouId:"",
      dongfeiId:"",
      meizhouId:"",
      chinaId:"",
      phoneShow:false,
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
    this.title = detailData.data.pageName;
  },
  methods: {
    handleActive(index, pageId, e) {
      this.activeIndex = index;
      this.nowPageId = pageId;
      // console.log(e.target.innerText);
      this.$router.push({ path: "/home", query: { pageId: this.nowPageId } });
      switch (e.target.innerText) {
        case "欢淘亲子":
          this.childrenId = this.$route.query.pageId;
          break;
        case "超级旅行团":
          this.groupId = this.$route.query.pageId;
          break;
        case "和风东瀛":
          this.ribenId = this.$route.query.pageId;
          break;
        case "梦幻暹罗":
          this.menghuanId = this.$route.query.pageId;
          break;
        case "诗画欧洲":
          this.ouzhouId = this.$route.query.pageId;
          break;
        case "小众中东非":
          this.dongfeiId = this.$route.query.pageId;
          break;
        case "美洲澳新":
          this.meizhouId = this.$route.query.pageId;
          break;
        case "祖国最美":
          this.chinaId = this.$route.query.pageId;
          break;
      }
    },

    handlePhone(){
      this.phoneShow = ! this.phoneShow;
    },

    handleSearch(){
      this.$router.push({path:"/search"})
    }
  }
};
</script>

<style scoped>
.active {
  color: #c04374;
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
  transform: translateX(-50%);
}

.top_bar ul li span {
  width: 100%;
  height: 100%;
  display: block;
}

.top_bar ul li {
  position: relative;
}
.content{
  overflow-x:hidden;
}

.tellphone{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:10000;
  background:rgba(0,0,0,0.5)
}
.tellContent{
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  background:#fff;
  padding:0.2rem 0.2rem 0.3rem;
  box-sizing: border-box;
  width:2.55rem;
  height:3.66rem;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.tellContent .top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
}

.tellContent .top span{
  font-size: 0.16rem;
  color:#333;
}
.tellContent .top img{
  width:0.12rem;
  height:0.12rem;
}

.icon-kefu{
  display:block;
  width:0.82rem;
  height:0.82rem;
  color:#c04374;
  font-size:0.82rem;
  margin:0.43rem 0 0.13rem;
}

.number{
    width: 100% !important;
    margin-bottom: 0.52rem;
    text-align: center;
    color: #6F6E6F;
    font-size: 0.32rem;
    font-weight: bold;
    font-family: 'PingFang SC,Helvetica Neue,Arial,sans-serif';
    line-height: 0.36rem;
    color: #C04374;
    -webkit-transform: scaleX(0.8);
    transform: scaleX(0.8);
    font-weight: bold;
    font-family: system-ui;
    white-space: nowrap;
}

.call{
  width:100%;
  height:0.44rem;
  background:#c04374;
  color:#fff;
  font-size:0.15rem;
  line-height:0.44rem;
  text-align:center;
  border:none;
  border-radius: 0.02rem;
}
</style>
