<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-icon-test29"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-icon-test12"></span>
      <input type="text" placeholder="请输入你想去的城市..." />
    </div>
    <div class="header-right">
      <i>城市</i>
      <span class="iconfont icon-icon-test30"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background-color: #00bcd4;
  color: #fff;
  span {
    position: absolute;
  }
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    position: relative;
    span {
      font-size: 0.5rem;
      left: 0.1rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.66rem;
    background: #fff;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    border-radius: 0.2rem;
    text-indent: 0.7rem;
    line-height: 0.66rem;
    position: relative;
    span {
      color: #ccc;
      left: -0.4rem;
      top: 0.04rem;
    }
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    position: relative;
    padding-right: 0.06rem;
    span {
      font-size: 0.3rem;
      right: 0.1rem;
    }
  }
}
</style>