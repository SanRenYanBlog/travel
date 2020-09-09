<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <div class="weekend-content">
      <div class="content-wrap" v-for="item in weekendList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p class="scenic-mask">1</p>
        <p class="scenic">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: ["weekendList"],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.weekend-title {
  background-color: #eee;
  line-height: 0.8rem;
  text-indent: 0.3rem;
}
.weekend-content {
  margin: 0.2rem 0;
  .content-wrap {
    width: 100%;
    float: left;
    position: relative;
    height: 2.6rem;
    img {
      width: 90%;
      display: block;
      margin: auto;
      height: 2rem;
    }
    .scenic {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      line-height: 0.4rem;
      width: 90%;
      top: 1.6rem;
      // text-align: center;
      text-indent: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #fff;
    }
    .scenic-mask {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      line-height: 0.4rem;
      width: 90%;
      top: 1.6rem;
      text-align: center;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .desc {
      text-indent: 0.4rem;
      line-height: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
      white-space: nowrap;
      color: #444;
    }
  }
}
</style>