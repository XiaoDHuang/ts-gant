<template>
  <div 
    class="divider__3vA4"
    :class="{ 'vertical-disabled__J9XJ': layIsHandleOver }"
    :style="`left: ${left}px;`" 
    @click="click">
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
    layIsHandleOver: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    click() {
      this.$emit('showTable')
      // console.log(1111111111);
    }
  }
}
</script>