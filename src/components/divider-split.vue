<template>
  <div class="divider__3vA4"  :style="`left: ${left}px;`" @click="click">
    <hr>
    <div class="icon-wrapper__1ugp" style="top: 157.5px;">
      <i class="arrow__3Sjh" :class="{reverse__3bNw: !(left > 0)}"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    left: {
      type: Number,
      default: 616,
    },
  },
  methods: {
    click() {
      this.$emit('showTable')
      // console.log(1111111111);
    }
  }
}
</script>