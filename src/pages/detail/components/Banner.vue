<template>
  <div>
    <div class="banner" @click="handlerBannerClick">
      <img class="banner-img" :src="bannerImg" alt />
      <div class="banner-info">
        <div class="banner-title">深圳西部硅谷</div>
        <div class="banner-number">
          <span class="iconfont icon-icon-test19 inco"></span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="imgs" :gallaryImgs="gallaryImgs" v-if="showGallary" @closeGallary="handlerCloseGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  neme: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  components: {
    CommonGallary,
    FadeAnimation,
  },
  updated() {
    console.log(this.sightName);
    console.log(this.bannerImg);
    console.log(this.gallaryImgs);
  },
  data() {
    return {
      imgs: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599748816403&di=6985b6aabed7338d4a9ca8ac69c9165a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090953_zUcaS.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599748816403&di=6985b6aabed7338d4a9ca8ac69c9165a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090953_zUcaS.jpeg",
      ],
      showGallary: false,
    };
  },

  methods: {
    handlerBannerClick() {
      this.showGallary = true;
    },
    handlerCloseGallary() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    .banner-title {
      flex: 1;
      color: #fff;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.4rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.4rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-radius: 0.2rem;
      .inco {
        padding-right: 0.1rem;
      }
    }
  }
}
</style>