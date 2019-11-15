<template>
  <div class="setting">
    <div class="header" style="background: rgba(0, 0, 0, 0);">
      <v-touch
        tag="div"
        @tap="handleBack"
        class="iconfont icon-fanhui"
        style="font-size: 0.20rem;"
      ></v-touch>
      <span>设置</span>
      <div
        class="iconfont icon-fenxiang"
        style="font-size: 0.24rem;color: #fff;margin-right: 0.04rem;"
      ></div>
    </div>
    <div class="setting_wrap">
      <div class="setting_item1">
        <div class="item">
          <span>用户协议</span>
          <i>&gt;</i>
        </div>
        <div class="item">
          <span>版本号</span>
          <em>2.8.0</em>
        </div>
      </div>
      <div class="setting_item2">
        <div class="item">
          <i class="iconfont icon-tuichu"></i>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    handleBack() {
      this.$router.back(1);
    }
  }
};
</script>

<style scoped>
body {
  letter-spacing: 0px;
  background: #f4f4f4 !important;
  font-weight:lighter;
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

.setting_wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0.44rem;
  background: #f4f4f4;
}

.setting_item1 {
    margin-top: .2rem;
}

.setting_item1,
.setting_item2 {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #fff;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.44rem;
  border-bottom: 0.01rem solid #fafafa;
}
.item > span {
  font-size: 0.15rem;
  color: #333;
  letter-spacing: 0.015rem;
}

.item > i {
  font-family: "宋体";
  width: 0.24rem;
  height: 0.24rem;
  text-align: center;
  line-height: 0.24rem;
}
.item > em {
  font-size: 0.13rem;
  color: #333;
}

.setting_item2 {
  margin-top: 0.2rem;
}

.setting_item2 > .item {
  justify-content: start;
}

.setting_item2 > .item > span {
  font-size: 0.13rem;
  line-height: 0.45rem;
}

i.icon-tuichu {
  width: 0.24rem;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.15rem;
  margin-right: 0.1rem;
  font-weight: lighter;
}
</style>