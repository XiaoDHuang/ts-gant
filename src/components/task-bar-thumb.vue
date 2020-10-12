<template>
  <div 
    v-on:click.stop
    :class="sideClass" 
    class="task-bar-thumb__2suT" 
    :style="`top: ${top}px; left: ${left}px;`"
  >
    <button class="btn-type-subtle__1YDY btn-size-smaller__zaJ7" @click="timeTranslateLocation" type="button" data-role="button">
      <div class="label__fdzT" v-if="type === 'right'" style="left: 0px;">{{label}}</div>
      <i v-if="type === 'left'" class="icon__YImk icon dls-icon icon-triangle-right-s" data-role="icon"></i>
      <i v-if="type === 'right'" class="icon__YImk icon dls-icon icon-triangle-left-s" data-role="icon"></i>
      <div class="label__fdzT" v-if="type === 'left'" style="left: 0px;">{{label}}</div>
    </button>
  </div>
</template>
<script>
export default {
  name: 'task-bar-thumb',
  props: {
    viewWidth: {
      type: Number,
      default: 1332
    },
    viewTranslateX: {
      type: Number,
      default: 552410
    },
    label: {
      type: String,
      default: ''
    },
    translateX: {
      type: Number,
      default: 554810
    },
    translateY: {
      type: Number,
      default: 554810
    },
    width: {
      type: Number,
      default: 30
    }
  },
  computed: {
    left() {
      let left = this.viewTranslateX + 2;

      if (this.type === 'right') {
        left = this.viewTranslateX + this.viewWidth - 2;
      }

      return left;
    },
    top() {
      return this.translateY - 10;
    },
    type() {
      return this.getThumbType();
    },
    sideClass() {
      return this.type === 'left' ? ['left__3u5u'] : ['right__3MHd'];
    }
  },
  methods: {
     /**
     *  获取浮动文字的类型
     */
    getThumbType() {
      const rightSide = this.viewTranslateX + this.viewWidth;
      const right = this.translateX;

      return right - rightSide > 0 ? 'right' : 'left';
    },
    timeTranslateLocation() {
      let translateX1 = this.viewTranslateX + (this.viewWidth / 2);
      let translateX2 = this.translateX + this.width;

      let diffX = Math.abs(translateX2 - translateX1);
      let translateX = this.viewTranslateX + diffX;

      if (this.type === 'left') {
        translateX = this.viewTranslateX - diffX;
      }

      this.$emit('timeTranslateLocation', translateX);
    }
  }
}
</script>
<style>
</style>