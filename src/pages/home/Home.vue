<template>
  <div>
    <home-header :cities="cities"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      lastCity:'',
      cities: [],
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo() {
      // axios.get("/api/city.json").then(this.getHomeInfoSucc);
      axios.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if(res.ret && res.data){
        const data = res.data;
        // this.cities = data.cities;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    },
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city
  },
  activated (){
    if(this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo();
    }
  }
};
</script>

<style>
</style>
