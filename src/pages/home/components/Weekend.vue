<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <div class="weekend-content">
      <div class="content-wrap" v-for="item in weekendList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p class="scenic-mask">1</p>
        <p class="scenic">{{item.scenic}}</p>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: [
        {
          id: "01",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599649479575&di=23a90e41f10db88946826a44766ae52c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F728da9773912b31b5184d08b8618367adbb4e1ac.jpg",
          desc: "包含往返飞日游泰国一游泰国一游泰国一游泰国一日日游泰国一日机票",
          scenic: "泰国一日游游泰国一游泰国一游泰国一游泰国一游泰国一游泰国一日游泰国一日游",
        },
        {
          id: "02",
          imgUrl:
            "http:////imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg",
          desc: "包含往返飞日游泰国一日日游泰国一日机票",
          scenic: "泰国一日游泰国一日游泰国一日游",
        },
        {
          id: "03",
          imgUrl:
            "http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          desc: "包含往返飞日游泰国一日日游泰国一日机票",
          scenic: "泰国一日游泰国一日游泰国一日游",
        },
        {
          id: "04",
          imgUrl:
            "http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          desc: "包含往返飞日游泰国一日日游泰国一日机票",
          scenic: "泰国一日游泰国一日游泰国一日游",
        },
      ],
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