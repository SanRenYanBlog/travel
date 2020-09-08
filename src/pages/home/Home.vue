<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/HomeSwiper";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  },
};
</script>

<style>
</style>
