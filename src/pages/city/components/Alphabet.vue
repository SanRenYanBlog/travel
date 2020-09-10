<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
    cities:Object
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: #00BCD4;
  }
}
</style>