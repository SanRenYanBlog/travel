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
      <!-- <i v-show="cities">{{cities.A[2].name}}</i> -->
      <i>马来西亚</i>
      <span class="iconfont icon-icon-test30"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:['cities'],
  mounted(){
    // setTimeout(()=>{
      // console.log(this.cities);
    // },1000)
  }
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
    // width: 2rem;
    overflow: hidden;
    float: right;
    text-align: center;
    padding-right: 0.06rem;
    position: relative;
    span {
      // position: absolute;
      float: right;
      font-size: 0.4rem;
      right: 0.1rem;
      top: 0;
      
    }
    i{
      float: right;
      // display: block;
      margin-right: 0.4rem;
      margin-left: 0.1rem;
    }
  }
}
</style>