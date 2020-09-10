<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-wrap">
          <div
            class="button"
            v-for="item in hot"
            :key="item.id"
            @click="handerChangeCity(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="area">
        <div v-for="(item,key) in cities" :key="key">
          <div class="title border-topbottom" :ref="key">{{key}}</div>
          <div class="item-list">
            <div
              class="item border-bottom"
              v-for="itemInner in item"
              :key="itemInner.id"
              @click="handerChangeCity(itemInner.name)"
            >{{itemInner.name}}</div>
          </div>
        </div>
      </div>
      <!-- <div class="add"></div> -->
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState,mapMutations } from 'vuex';
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  methods: {
    handerChangeCity(newCity) {
      // this.$store.commit("changeCity", newCity);
      this.changeCity(newCity);
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  updated() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
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
    padding: 0.1rem 0;
  }
  .button-wrap {
    overflow: hidden;
    .button {
      width: 22%;
      margin: 0.1rem;
      padding: 0.1rem 0.2rem 0.1rem 0.3rem;
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
</style>