<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont icon-icon-test29 heder-back"></span>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: #00bcd4;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  position: relative;
  .heder-back {
    position: absolute;
    left: 0.1rem;
    font-size: 0.5rem;
    color: #fff;
  }
}
</style>