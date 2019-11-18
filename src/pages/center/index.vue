<template>
  <div class="mine">
    <header>
      <router-link tag="i" to="/settings" class="center-set-icon"></router-link>
    </header>
    <div class="section">
      <router-link tag="div" to="/myinfo" class="mine_info">
        <div class="mine_info_wrap">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/logo_white_2.png?imageView2/4/w/120/h/120/format/jpg/interlace/1/q/70"
            alt
          />
          <div class="user_info">
            <div class="phone">132****8322</div>
            <div>
              <span class="user_regist">注册用户</span>
              <span class="user_score">
                <span>5</span>积分
              </span>
            </div>
          </div>
          <div class="icon">
            <span>&gt;</span>
          </div>
        </div>
      </router-link>
      <div class="mine_list" v-for="(data,index) in dataList" :key="index">
        <div class="list_item">
          <v-touch
            tag="div"
            @tap="handlePush(item)"
            class="list_item_child"
            v-for="(item,dex) in data"
            :key="dex"
          >
            <div class="left">
              <div class="icon_1"></div>
              <span>{{item.title}}</span>
            </div>
            <div class="right">&gt;</div>
          </v-touch>
        </div>
      </div>
    </div>

    <div class="tellphone" v-if="phoneShow">
      <div class="tellContent">
        <div class="top">
          <span>联系客服</span>
          <v-touch tag="img" @tap="handlePhone" src="/image/guanbi.png" alt />
        </div>
        <i class="iconfont icon-kefu"></i>
        <p class="number">400-021-9988</p>
        <v-touch @tap="handlePhone" tag="button" class="call">立即拨打</v-touch>
      </div>
    </div>
  </div>
</template>

<script>
// import MessageBox from "../../lib/messageBox/index.js"
import { centerApi } from "@api/center";

export default {
  name: "Center",
  data() {
    return {
      dataList: [],
      phoneShow: false
    };
  },

  async created() {
    let data = await centerApi();
    this.dataList = data.data.list;
    // console.log(this.dataList)
    // MessageBox({
    // //可以传参了
    // title:"城市定位",
    // content:"北京"

    // })
  },
  methods: {
    handlePush(item) {
      switch (item.title) {
        case "我的优惠券":
          this.$router.push({ path: "/center/mycoupon" });
          break;
        case "我的收藏":
          this.$router.push({ path: "/center/my-collect" });
          break;
        case "联系客服":
            this.handlePhone();
        break;
      }
    },
    handlePhone() {
      this.phoneShow = !this.phoneShow;
    }
  }
};
</script>

<style scoped>
body {
  background: #f4f4f4;
}
header {
  width: 100%;
  height: 0.44rem;
  /* border-bottom:1px solid #ccc; */
  box-sizing: border-box;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
header > h2 {
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0.44rem;
  background: #f4f4f4;
}

.center-set-icon {
  display: inline-block;
  width: 0.2rem;
  height: 0.18rem;
  position: absolute;
  right: 0.18rem;
  top: 0.07rem;
  background: center no-repeat
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEpIiBzdHJva2U9IiMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNSAyLjIxaC05TDEgMTBsNC41IDcuNzloOUwxOSAxMHoiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0Ii8+PC9nPjwvc3ZnPg");
}

.mine_info {
  width: 100%;
  height: 0.66rem;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 0.14rem;
}
.mine_info_wrap {
  width: 100%;
  height: 0.48rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.mine_info_wrap img {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.15rem;
}

.user_info {
  flex: 1;
}
.phone {
  font-size: 0.2rem;
}
.user_regist {
  display: inline-block;
  background: #c14374;
  color: #fff;
  padding: 0 0.03rem;
}

.user_score {
  color: #898989;
  letter-spacing: 0;
  font-size: 0.12rem;
}
.user_score span {
  font-size: 0.15rem;
}

.icon {
  width: 0.24rem;
  height: 0.24rem;
  text-align: center;
  line-height: 0.24rem;
  font-family: "宋体";
  font-size: 0.12rem;
  margin-right: 0.18rem;
}

.mine_list {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.18rem;
  font-size: 0.12rem;
}

.list_item {
  width: 100%;
  padding: 0 0.18rem;
  box-sizing: border-box;
  margin: 0 0 0.09rem;
  background: #fff;
}
.list_item_child {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #f3f3f3;
  box-sizing: border-box;
}

.left {
  font-size: 0.14rem;
  line-height: 0.18rem;
  display: flex;
  align-items: center;
}

.icon_1 {
  width: 0.18rem;
  height: 0.18rem;
  margin-right: 0.1rem;
  background: center no-repeat
    url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fb3JkZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5paR6ams5peF5ri45pS554mIIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+eZu+W9leWJjSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4LjAwMDAwMCwgLTE4NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Im1vZHVsZTAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmiJHnmoTorqLljZUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjAwMDAwMCwgMTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljbl9vcmRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCwyIEwxNiwyIEMxNi41NTIyODQ3LDIgMTcsMi40NDc3MTUyNSAxNywzIEwxNywxMiBDMTcsMTUuMzEzNzA4NSAxNC4zMTM3MDg1LDE4IDExLDE4IEw0LDE4IEMzLjQ0NzcxNTI1LDE4IDMsMTcuNTUyMjg0NyAzLDE3IEwzLDMgQzMsMi40NDc3MTUyNSAzLjQ0NzcxNTI1LDIgNCwyIFoiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsNiBMMTQsNiIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LDEwIEwxMiwxMCIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
}

.right {
  font-family: "宋体";
  width: 0.24rem;
  height: 0.24rem;
  text-align: center;
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