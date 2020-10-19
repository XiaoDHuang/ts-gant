<template>
  <button 
    @click="timeTranslateLocation"
    :class="{scrolling__3E94: guestureGrantBodyMove}"
    class="btn-type-secondary__h-_i move-to-today__uxgP btn-size-smaller__zaJ7" 
    type="button" 
    data-role="button" 
    :style="`left: ${left}; right: ${right};${display}`
  ">
    <span v-if="type === 'left'" class="icon__YImk icon dls-icon icon-circle-arrow-left-o" data-role="icon"></span>
    <span>今天</span>
    <span v-if="type === 'right'" class="icon__YImk icon dls-icon icon-circle-arrow-right-o" data-role="icon"></span>
  </button>
</template>
<script>
import dayjs from "dayjs"; // 导入日期js
export default {
  props: {
    viewTranslateX: {
      type: Number,
      default: 554780
    },
    tableWidth: {
      type: Number,
      default: 0,
    },
    viewWidth: {
      type: Number,
      default: 1322
    },
    pxUnitAmp: {
      type: Number,
      default: 0
    },
    guestureGrantBodyMove: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    curTranslateX() {
      return Math.floor(dayjs(new Date().valueOf()).hour(0).minute(0).second(0).valueOf() / this.pxUnitAmp);
    },
    type() {
      let type = 'right';
      if (this.curTranslateX < this.viewTranslateX) {
        type = 'left';
      }
      return type;
    },
    left() {
      return this.type=== 'left' ? `${this.tableWidth}px` : 'unset'
    },
    right() {
      return this.type === 'right' ? 111 + 'px' : 'unset';
    },
    display() {
      let isOverLeft = this.curTranslateX < this.viewTranslateX;
      let isOverRight = this.curTranslateX > this.viewTranslateX + this.viewWidth;
      return (isOverLeft || isOverRight) ? '' : 'display: none';
    }
  },
  methods: {
    timeTranslateLocation() {
      const translateX = this.curTranslateX - (this.viewWidth / 2); 
      this.$emit('timeTranslateLocation', translateX);
    }
  }  
}
</script>