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
  data(){
    return {
      swiperOptions:{
        autoplay: false
      },
      iconList:[
        {
          id:'01',
          iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id:'02',
          iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id:'03',
          iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id:'04',
          iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id:'05',
          iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          desc: '自由行'
        },
        {
          id:'06',
          iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          desc: '海外酒店'
        },
        {
          id:'07',
          iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          desc: '低价机票'
        },
        {
          id:'08',
          iconUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          desc: '汽车票'
        },
        {
          id:'09',
          iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          desc: '低价机票'
        },
        {
          id:'10',
          iconUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          desc: '攻略'
        }
      ]
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