<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-wrap">
          <div class="button" v-for="item in hot" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="area">
        <div v-for="(item,key) in cities" :key="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div
              class="item border-bottom"
              v-for="itemInner in item"
              :key="itemInner.id"
            >{{itemInner.name}}</div>
          </div>
        </div>
      </div>
      <div class="add"></div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })

    // this.$watch('this.hot',()=>{
    //   this.scroll = new Bscroll(this.$refs.wrapper);
    // })
    // console.log(this.hot);
    // setTimeout(() => {
    //   this.scroll = new Bscroll(this.$refs.wrapper);
    //   console.log(this.hot);
    // }, 1000);
    // this.scroll.refresh();
  },
  // watch: {
  //   // 如果 `question` 发生改变，这个函数就会运行
  //   hot: function (newQuestion, oldQuestion) {
  //     console.log(this.$refs);
  //      this.scroll = new Bscroll(this.$refs.wrapper);
  //      console.log(newQuestion,oldQuestion);
  //   }
  // }
  
};
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 1.65rem;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: red;
  .border-topbottom {
    &::before {
      border-color: #ccc;
    }
    &::after {
      border-color: #ccc;
    }
  }
  .border-bottom {
    &::before {
      background-color: #eee;
    }
  }
  .title {
    background-color: #eee;
    line-height: 0.54rem;
    padding-left: 0.2rem;
    color: #666;
  }
  .button-list {
    padding: 0.1rem;
  }
  .button-wrap {
    overflow: hidden;
    .button {
      width: 30%;
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
      float: left;
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
// .add{
//   height: 17750px;
// }
</style>