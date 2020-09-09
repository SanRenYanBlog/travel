<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props:["iconList"],
  data(){
    return {
      swiperOptions:{
        autoplay: false
      }
      
    }
  },
  computed:{
    pages(){
      const pages = []
      this.iconList.forEach((item,index)=>{
        let page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>

<style lang="scss" scoped>
.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  // background-color: #eee;
  .icon {
    float: left;
    width: 25%;
    padding-bottom: 25%;
    // background-color: transparent;
    position: relative;
    .icon-img {
      text-align: center;
      position: absolute;
      top: 0.4rem;
      left: 0;
      right: 0;
      border-bottom: 0.44rem;
      // background-color: transparent;
      img {
        width: 40%;
      }
    }
    .icon-desc {
      position: absolute;
      bottom: 0.25rem;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
}
</style>