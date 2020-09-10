<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @touchGetLetter="handlerGetLetter"></city-alphabet>
  </div>
</template>
s
<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handlerGetCityInfo);
    },
    handlerGetLetter(letter) {
      this.letter = letter;
    },
    handlerGetCityInfo(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style>
</style>