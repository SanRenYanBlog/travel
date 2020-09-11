<template>
  <div>
    <detail-banner
      :sightName = "sightName"
      :bannerImg = "bannerImg"
      :gallaryImgs = "gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  neme: "Deatil",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    
  },
  data() {
    return {
      list: [
        
      ],
      sightName : '',
      bannerImg : '',
      gallaryImgs: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios.get("/api/detail.json?id=",{
        params:{
          id : this.$route.params.id
        }
      }).then(this.handlerGetDataSucc)
    },
    handlerGetDataSucc(res){
      res = res.data
      if(res.ret && res.data){
        console.log(res.data);
        this.sightName = res.data.sightName;
        this.bannerImg = res.data.bannerImg;
        this.gallaryImgs = res.data.gallaryImgs;
        this.list = res.data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>