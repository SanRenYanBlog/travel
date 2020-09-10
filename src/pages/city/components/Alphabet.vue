<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handlerLetterClick"
      @touchstart="hanlerTouchStart"
      @touchmove="handlerTouchMove"
      @touchend="handlerTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  methods: {
    handlerLetterClick(e) {
      let letter = e.target.innerText;
      this.$emit("touchGetLetter", letter);
    },
    hanlerTouchStart() {
      this.touchStatus = true;
    },
    handlerTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 83;
        const index = Math.floor((touchY - startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("touchGetLetter", this.letters[index]);
        }
      }
    },
    handlerTouchEnd() {
      this.touchStatus = false;
    },
  },
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
    color: #00bcd4;
  }
}
</style>