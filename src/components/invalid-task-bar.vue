<template>
  <div
    @mouseenter="triggerEnter"
    @mouseleave="triggerLeave"
    @mousemove="triggerMove"
    @mousedown="triggerDown"
  >
    <div 
      class="task-row-trigger__1Xhy"
      ref="trigger"
      :style="`left: ${translateX}px; transform: translateY(${top - ((rowH - barH) / 2)}px);`"
    ></div>
    <div 
      v-if="isShow"
      class="block__1ibh" 
      aria-haspopup="true" 
      aria-expanded="false" 
      :style="`left: ${barLeft}px; width: ${Math.ceil(barWidth)}px; transform: translateY(${top}px); background-color: rgb(149, 221, 255); border-color: rgb(100, 199, 254);`"
    >
      <div class="date__7am6" :style="`right: ${Math.ceil(barWidth + 6)}px;`">{{dateTextFormat(barLeft)}}</div>
      <div class="date__7am6" :style="`left: ${Math.ceil(barWidth + 6)}px;`">{{dateTextFormat(barLeft + barWidth)}}</div>
    </div>
  </div> 
</template>
<script>
export default {
  props: {
    rowH: {
      type: Number,
      default: 28,
    },
    barH: {
      type: Number,
      default: 8,
    },
    translateX: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0,
    },
    left: {
      type: Number,
      default: 0,
    },
    startXRectBar: {
      type: Function,
      default: () => ({left: 0, width: 11})
    },
    dateTextFormat: {
      type: Function,
      default: () => '',
    },
    setShadowShow: {
      type: Function,
      default: () => {}
    },
    setInvalidTaskBar: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    const { left, width } = this.startXRectBar(this.translateX);
    return {
      isShow: false,
      barLeft: left,
      barWidth: width, 
      startX: 0,
    }
  },
  methods: {
    triggerMove(event) {
      const pointerX = this.translateX + (event.clientX - this.startX); 
      const { left, width } = this.startXRectBar(pointerX);

      this.barLeft = left;
      this.barWidth = width;
      this.setShadowShow(left, Math.ceil(width), true)
    },
    triggerLeave() {
      this.isShow = false;
      this.setShadowShow(0, 0, false);
    },
    triggerDown(event) {
      this.setInvalidTaskBar(this.barLeft, this.barWidth);
      this.$emit('gesturePress', event, 'right');
    },
    triggerEnter() {
      this.isShow = true;
      this.startX = this.$refs.trigger.getBoundingClientRect().left;
    },
  },
}
</script>