<template>
  <div class="container" @click="handlerGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img
            class="gallary-img"
            :src="item"
            alt
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
      imgs: {
          type : Array,
          default () {
              return ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599748816403&di=6985b6aabed7338d4a9ca8ac69c9165a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090953_zUcaS.jpeg',
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599748816403&di=6985b6aabed7338d4a9ca8ac69c9165a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090953_zUcaS.jpeg']
          }
      },
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      },
    };
  },
  methods:{
      handlerGallaryClick(){
          this.$emit('closeGallary')
      }
  }
};
</script>

<style lang="scss" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  .wrapper {
    // overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      position: absolute;
      bottom: -1rem;
    }
  }
}
</style>