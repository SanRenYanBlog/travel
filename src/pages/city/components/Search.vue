<template>
  <div class="search">
      <input type="text" class="search-input" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
    name:"CitySearch",
}
</script>

<style lang="scss" scoped>
.search{
  background-color:#00bcd4;
  height: 0.8rem;
  padding: 0 .2rem;
  .search-input{
    box-sizing: border-box;
    width: 100%;
    padding: 0 .2rem;
    height: .66rem;
    text-align: center;
  }
}
</style>