<template>
  <div class="bmfind">
    <Header :title="title" iconRight>
      <v-touch tag="div" @tap="handlePhone" slot="right" class="header_right" :style="right.style"></v-touch>
    </Header>

    <div class="bm_navbar">
      <ul class="van_tags">
        <v-touch
          tag="li"
          @tap="handleActive(index,data.id)"
          v-for="(data,index) in navList"
          :key="data.id"
          :class="activeIndex===index ? 'active' : ''"
        >
          {{data.name}}
          <span class="tags_line" v-if="activeIndex===index"></span>
        </v-touch>
      </ul>
    </div>

    <div class="content_bm">
      <div class="content_wrap">
        <div class="card_wrap">
          <div class="card_item" v-for="item in itemsList" :key="item.id">
            <div class="card_item_type">{{item.sort_name}}</div>
            <img
              height="189"
              width="100%"
              :src="item.head_pic"
              alt
            />
            <div class="card_item_title">{{item.title}}</div>
            <div class="card_item_subtitle">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
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
import { bmfindNavApi, bmfindItemApi } from "@api/bmfind";
export default {
  name: "Bmfind",

  data() {
    return {
      navList: [],
      activeIndex: 0,
      id: 0,
      itemsList: [],
      title:"斑马发现",
      phoneShow:false,
      right: {
        style:
          "background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');"
      }
    };
  },
  async created() {
    let navData = await bmfindNavApi();
    this.navList = navData.data.list;
    let items = await bmfindItemApi(this.id);
    this.itemsList = items.data.list;
  },
  methods: {
    async handleActive(index, id) {
      this.activeIndex = index;
      let itemData = await bmfindItemApi(id);
      this.itemsList = itemData.data.list;
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
.bmfind {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bm_navbar {
  padding: 0.44rem 0.06rem 0;
  border-bottom: 0.01rem solid #ebedf0;
  box-sizing: border-box;
  margin-bottom: 0.15rem;
}

.van_tags {
  display: flex;
}

.van_tags li {
  height: 0.44rem;
  margin: 0 0.05rem;
  padding: 0 0.12rem;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.13rem;
  position: relative;
}

/* .active{
        color:#c14374;
        border-bottom:0.03rem solid #c14374;;
        width: 0.18rem;
        border-radius: 3px;
        box-sizing: 
    } */

.content_wrap {
  margin: 0 0.18rem;
}
.card_item {
  margin-bottom: 0.36rem;
  position: relative;
}
.card_item_type {
  position: absolute;
  right: 0.09rem;
  top: 0.09rem;
  padding: 0.02rem 0.06rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 0.12rem;
  border-radius: 0.02rem;
}

.card_item_title {
  font-weight: 500;
  font-size: 0.15rem;
  color: #333;
  letter-spacing: 0.0008rem;
  margin: 0.12rem 0 0.06rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.card_item_subtitle {
  width: 100%;
  font-family: PingFangSC-Light;
  font-size: 0.12rem;
  color: #333333;
  letter-spacing: 0.0015rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.tags_line {
  width: 0.18rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  height: 0.03rem;
  background: #c14374;
}

.active {
  color: #c14374;
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