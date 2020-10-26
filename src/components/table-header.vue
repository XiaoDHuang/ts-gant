<template>
  <div 
    class="scrollable__3FQe"
    :style="`width: ${width}px; height: 56px;`"
  >
    <div class="head__NLQw" :style="`width: ${width}px; height: 56px;`">
      <div class="row__29JV" style="height: 56px;">
        <div 
          class="cell__3xqP resizable__3OIa" 
          :class="columns[0]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
          :style="`width: ${columns[0].width}px;}`"
        >
          <div class="config__3_dc">
            <div class="head-row-index__24Rh">
              <i class="next-icon next-icon-gear next-medium">
                <svg
                  viewBox="0 0 1024 1024">
                  <use xlink:href="#at-gear"></use>
                </svg>
              </i>
            </div>
          </div>
          <div class="head-cell__cL1U">
            <span class="ellipsis__315v sortable___z3_">任务标题</span>
          </div>
          <div class="suffix__1j4D" @click="onAllRowOpen" aria-haspopup="true" aria-expanded="false">
            <i
              :class="collapsed ? 'next-icon-chevrons-expand-vertical' : 'next-icon-chevrons-collapsed-vertical'"
              class="next-icon next-medium">
              <svg viewBox="0 0 1024 1024">
                <use :xlink:href="collapsed ? '#at-chevrons-expand-vertical' : '#at-chevrons-collapse-vertical' "></use>
              </svg>
            </i>
           </div>
          <div 
            class="handle__cGEN right" 
            data-role="handle"
            @mousedown="(event) => dispatchGesture('mouseDown', event)"
            @mouseover="handleMouseOver(columns[0], true)" 
            @mouseout="handleMouseOver(columns[0], false)"  
          ></div>
        </div>
        <div 
          class="cell__3xqP resizable__3OIa" 
          :class="columns[1]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
          :style="`width: ${columns[1].width}px;`">
          <div class="head-cell__cL1U">
            <span class="ellipsis__315v sortable___z3_">执行者</span>
          </div>
          <div 
            class="handle__cGEN right" 
            data-role="handle"
            @mousedown="(event) => dispatchGesture('mouseDown', event)"
            @mouseover="handleMouseOver(columns[1], true)" 
            @mouseout="handleMouseOver(columns[1], false)"  
          ></div>
        </div>
        <div 
          class="cell__3xqP resizable__3OIa" 
          :class="columns[2]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
          :style="`width: ${columns[2].width}px;`"
        >
          <div class="head-cell__cL1U">
            <span class="ellipsis__315v sortable___z3_">
              截止时间
              <i
                class="next-icon next-icon-triangle-up-s next-medium">
                <svg viewBox="0 0 1024 1024">
                  <use xlink:href="#at-triangle-up-s"></use>
                </svg>
              </i>
            </span>
          </div>
          <div 
            class="handle__cGEN right" 
            data-role="handle"
            @mousedown="(event) => dispatchGesture('mouseDown', event)"
            @mouseover="handleMouseOver(columns[2], true)" 
            @mouseout="handleMouseOver(columns[2], false)"  
          ></div>
        </div>
        <div 
          class="cell__3xqP resizable__3OIa" 
          :class="columns[3]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
          :style="`width: ${columns[3].width}px;`"
        >
          <div class="head-cell__cL1U">
            <span class="ellipsis__315v">前置依赖</span>
          </div>
          <div 
            class="handle__cGEN right"
            data-role="handle"
            @mousedown="(event) => dispatchGesture('mouseDown', event)"
            @mouseover="handleMouseOver(columns[3], true)" 
            @mouseout="handleMouseOver(columns[3], false)"  
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false,
      },
      width: {
        type: Number,
        default: 660,
      },
      height: {
        type: Number,
        default: 56,
      },
      columns: {
        type: Array,
        default: () => [] 
      },
      isHandleOver: {
        type: Boolean,
        default: false,
      },
      layGesture: {
        type: Function,
        default: () => () => {}
      }
    },
    data() {
      return {
        hovered: '',
      };
    },
    methods: {
      onAllRowOpen() {
        this.$emit('onAllRowOpen');
      },
      handleMouseOver(column, isOver) {
        const type = isOver ? 'mouseOver' : 'mouseLeave';
        this.layGesture(type, column);
      },
      dispatchGesture(type, event) {
        this.layGesture(type, event);
      }
    },
    mounted() {
      this._gesture = this.layGesture();
    }
  }
</script>