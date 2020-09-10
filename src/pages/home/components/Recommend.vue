<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <div class="recommend-content">
      <!-- <div class="content-wrap" 
        v-for="item in recommendList" 
        :key="item.id"
      > -->
      <router-link 
        tag="div"
        class="content-wrap"
        v-for="item in recommendList" 
        :key="item.id"
        :to="'./detail/' + item.id "
      >
        <img :src="item.imgUrl" alt />
        <p class="scenic-mask">.</p>
        <p class="scenic">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
      </router-link>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:["recommendList"],
  data() {
    return {

    };
  },
  mounted(){
    // console.log(this.recommendList);
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  overflow: hidden;
  .recommend-title {
    background-color: #eee;
    line-height: 0.8rem;
    text-indent: 0.3rem;
  }
  .recommend-content {
    margin: 0.2rem 0;
    .content-wrap {
      width: 50%;
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
        color: transparent;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }
      .desc {
        text-indent: 0.2rem;
        line-height: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #444;
      }
    }
  }
}
</style>