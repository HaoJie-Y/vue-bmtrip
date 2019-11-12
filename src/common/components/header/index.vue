<template>
  <div id="header">
    <div class="header">
      <div v-if="iconLeft">
        <slot name="left"></slot>
        <!-- <div class="header_left"></div> -->
      </div>
      <span>首页</span>
      <div v-if="iconRight">
        <slot name="right"></slot>
        <!-- <div class="header_right"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String
    },
    iconLeft: {
      type: Boolean
    },
    iconRight: {
      type: Boolean
    }
  }
};
</script>
<style>
.header {
  width: 3.75rem;
  height: 0.44rem;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 999;
  position: fixed;
  top: 0;
}
.header span {
  font-size: 0.15rem;
  line-height: 0.15rem;
  color: #333;
  letter-spacing: 0.01rem;
  flex: 1;
  text-align: center;
}
.header div {
  width: 0.2rem;
  height: 0.2rem;
}
</style>