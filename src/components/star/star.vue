<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="(itemClass,index) in itemClasses" :class="itemClass"></span>
  </div>
</template>

<script>
// 星星个数 默认：5
const LENGTH = 5;
// 全亮状态
const CLS_ON = 'on';
// 灰色状态
const CLS_OFF = 'off';
// 半亮状态
const CLS_HALF = 'half';

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      // size 24 36 48
      return 'star-' + this.size;
    },
    itemClasses() {
      let result = [];
      // this.score 向下取整
      let score = Math.floor(this.score * 2) / 2;
      console.log('score:' + score);
      let hasDecimal = score % 1 !== 0;
      console.log('hasDecimal:' + hasDecimal);
      let integer = Math.floor(score);
      console.log('integer:' + integer);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      console.log('result:' + result);
      return result;
    }
  }
};
</script>

<style lang="scss">
@import "../../common/sass/base.scss";
.star{
  font-size: 0;
  &.star-24{
    .star-item{
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include bg-image("star24_on");
      }
      &.half{
        @include bg-image("star24_half");
      }
      &.off{
        @include bg-image("star24_off");
      }
    }
  }
  &.star-36{
    .star-item{
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include bg-image("star36_on");
      }
      &.half{
        @include bg-image("star36_half");
      }
      &.off{
        @include bg-image("star36_off");
      }
    }
  }
  &.star-48{
    .star-item{
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include bg-image("star48_on");
      }
      &.half{
        @include bg-image("star48_half");
      }
      &.off{
        @include bg-image("star48_off");
      }
    }
  }
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
  }
}
</style>
