<template>
  <div class="wrap">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  name: "HomeSwoper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop:true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '../../../../static/img/swiper01.jpeg'
      },{
        id: '0002',
        imgUrl: '../../../../static/img/swiper02.jpeg'
      }]
    };
  },
};
</script> 

<style lang="scss" scoped>
.wrap >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.wrap {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background-color: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>