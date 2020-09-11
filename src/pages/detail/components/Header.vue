<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <span class="iconfont icon-icon-test29 header-back"></span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont icon-icon-test29 heder-back"></span>
      </router-link>
      <div>景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  neme: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  activated() {
    window.addEventListener("scroll", this.handlerScroll);
  },
  deactivated(){
    window.removeEventListener("scroll",this.handlerScroll);
  },
  methods: {
    handlerScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 160;
          opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  line-height: 0.8rem;
  text-align: center;
  .header-back {
    color: white;
    font-size: 0.6rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: #00bcd4;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  top: 0;
  .heder-back {
    position: absolute;
    left: 0.1rem;
    font-size: 0.5rem;
    color: #fff;
  }
}
</style>