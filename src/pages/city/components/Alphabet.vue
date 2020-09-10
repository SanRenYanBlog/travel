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
      startY: 0,
      timer: null,
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
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
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
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 83;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("touchGetLetter", this.letters[index]);
          }
        }, 8);
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