<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="list.length>0" ref="wrapper">
      <ul class="list">
        <li v-for="item in list" :key="item.id" class="list-item border-bottom">{{item.name}}</li>
        <!-- <li v-show="(keyword!==''&&list.length===0)" class="list-item border-bottom">未找到</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  updated() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              this.keyword !== "" &&
              (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1)
            ) {
              result.push(value);
            }
          });
        }
        console.log(result);
        if(result.length == 0 && this.keyword){
          result.push({
            id:-1,
            name:"未查询到该关键字",
            speel:""
          });
          console.log(result);
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #00bcd4;
  height: 0.8rem;
  padding: 0 0.2rem;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.2rem;
    height: 0.66rem;
    text-align: center;
  }
}
.search-content {
  z-index: 11;
  position: absolute;
  top: 5.9em;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: hidden;
  .list {
    padding: 0 0.2rem;
    .list-item {
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .border-bottom {
      &::before {
        background: #eee;
      }
    }
  }
}
</style>