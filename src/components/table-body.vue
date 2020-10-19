<template>
  <div 
    class="scrollable__3FQe" 
    :style="`width: ${tableWidth}px; height: ${tableHeight}px;`"
  >
    <div 
      class="body__38O5 view-compact__1L78"
      @mouseenter.prevent="onMouseEnter"
      @mousemove="event => $emit('mousemove', event)"
      @mouseleave="onMouseLeave"
      style="width: 616px; height: 285px;"
    >
      <div class="row__29JV" style="top: 0px; height: 4px;">
        <div 
          v-for="(item, key) in columns" 
          :key="key" 
          class="cell__3xqP resizable__3OIa" 
          :class="columns[key]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
          :style="`width: ${item.width}px;`">
          <div 
            class="handle__cGEN right" 
            data-role="handle"
            @mouseover="handleMouseOver(columns[key], true)" 
            @mouseout="handleMouseOver(columns[key], false)"  
          ></div>
        </div>
      </div>
      <template v-for="(barInfo, index) in dataList">
        <div 
          :key="index"
          data-row="robot-guide" 
          class="row__29JV" 
          :class="{hovered: barInfo.getHovered(barInfo.translateY, selectionIndicatorTop) && showSelectionIndicator}"
          :style="`top: ${barInfo.translateY - 10}px; height: ${rowHeight}px;`" 
        >
          <div 
            class="cell__3xqP resizable__3OIa" 
            :class="columns[0]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
            :style="`width: ${columns[0].width}px;`"
          >
            <div class="row-before__3blm" style="padding-left: 56px;">
              <div class="row-index__3xNX" title="1" style="width: 24px;">{{index + 1}}</div>
              <div class="row-indentation__2dHs" :style="`background-size: ${indent}px; width: ${getIndent(barInfo._depth)}px;`"></div>
              <div class="row-menu-and-toggler___F4q">
                <div class="row-menu__QRiG">
                  <div class="menu-trigger__2YZ4">
                    <span class="icon__YImk icon dls-icon icon-more" data-role="icon"></span>
                  </div>
                </div>
                <div v-if="getShowTrigger(barInfo)" @click="rowTrigger(barInfo)" class="row-toggler__3rTS">
                  <div class="body-row-toggler__wvWq" :class="{collapsed: barInfo._collapsed}">
                    <i class="next-icon next-icon-triangle-down-s next-medium">
                      <svg viewBox="0 0 1024 1024">
                        <use xlink:href="#at-triangle-down-s"></use>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
              <div class="row-handle__210U">
                <div class="body-row-handle__3YUe clickable__1NNN"><i></i></div>
              </div>
            </div>
            <div class="body-cell__OUd5 content" data-id="5f4da2f552f5c40044a554cc">
              <div class="text__aNJc">
                <div class="ellipsis hinted" :data-title="barInfo.label">{{barInfo.label}}</div>
              </div>
            </div>
            <div 
              class="handle__cGEN right" 
              data-role="handle"
              @mouseover="handleMouseOver(columns[0], true)" 
              @mouseout="handleMouseOver(columns[0], false)"  
            ></div>
          </div>
          <div 
            class="cell__3xqP resizable__3OIa" 
            :class="columns[1]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
            :style="`width: ${columns[1].width}px;`"
          >
            <div class="body-cell__OUd5 executor__1eK3 hasPermission empty"><span data-role="avatar"
                class="avatar__1gRA avatar-xsmall__pF8f avatar-circle__3q2Y gantt-app-outline-executor-avatar"
                shape="circle"
                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABGlBMVEWmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqapqamtra2zs7O6urrAwMDCwsLDw8PExMTFxcXGxsbKysrMzMzS0tLY2Nje3t7f39/i4uLk5OTm5ubp6ent7e3v7+/x8fH09PT5+fn6+vr9/f3+/v7///9sumsYAAAAQHRSTlMABAUGExQWFxkaGxwlJikqTk9QUVdYW1xmaXBxcnV2enuNjo+TlJW2t7jLzM7P0NjZ2+zt7vHy8/T19vj5+vz+SWi1rwAAAhZJREFUGBmFwQ1b0mAUBuATirYyJZMCib6WikIqqUwxt6e5aeEGCoQ4Pf//byS6C8/7buB9U8LcilnZ2Ts+3tupmCtz9IzZ0pYDwdkqzdJkL78eIuHou0HpXpQtpLLKGUqxUMNEP5Yo4e0BprCWSVOwMZVdIEURzyqSkLOh8IMwDH0Xkp2jsUULgtuJ+FHXg2AtUiyzDcGL+EkAYTtDj8oQ3CFLHoRP9MCwILRZMYBgGTSyBsGNWOVDWKd72SYEnzUhhGaWiFYh+awJIa0SURWSz5oQ0hbRnAPJZY0PyTEoD1XEKg+K92RC4Q5Z5UFhUgWKkDVdKDaoDkXImj4UdWpAEbCmA0WDoHIHrIg8qAi6PguRC9UvakATstCF5ifVoTllIYCmThXo2jw2gG6DTCQMOBadQmdSHgktjrWR8IHmHeh8joXQOQZRFbqQY13oqkS0Cl2fY5ELzUciyjahCnisA1UzS/fWoQhZ6LiQ1mnEsPDE77NiGOCJZdCDMmJu0OeEYXiK2Cd6lKlhxOtEnK7bwkgtQ7GFAyAY8BTD8Dcab2gsZ+OSp7qEnSOhCFzwFBdAkRQFG61bnuCuBbtAmuUDeD1O1fNgvaOEhRrw5x8nDP4C20uUYuZzEzi7umPh7uoMaH6ZoXSvvh0COG/3rm9ub2+ue+1zAEdrr2mybKnqQHCqpSw9Yz5vbu7un5zs726a+XnS/QfUNwZ8HxlD9AAAAABJRU5ErkJggg==&quot;);"></span><span
                class="text">待认领</span></div>
            <div 
              class="handle__cGEN right" 
              data-role="handle"
              @mouseover="handleMouseOver(columns[1], true)" 
              @mouseout="handleMouseOver(columns[1], false)"  
            ></div>
          </div>
          <div 
            class="cell__3xqP resizable__3OIa" 
            :class="columns[2]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
            :style="`width: ${columns[2].width}px;`"
          >
            <div class="body-cell__OUd5 date__hqPF hasPermission">
              <span class="text">{{barInfo._dateFormat(barInfo.task.endDate)}}</span>
            </div>
            <div 
              class="handle__cGEN right" 
              data-role="handle"
              @mouseover="handleMouseOver(columns[2], true)" 
              @mouseout="handleMouseOver(columns[2], false)"  
            ></div>
          </div>
          <div 
            class="cell__3xqP resizable__3OIa" 
            :class="columns[3]._isHandleOver ? 'resize-active__1t-e' : 'resize-default__2DLj'"
            :style="`width: ${columns[3].width}px;`"
          >
            <div class="body-cell__OUd5 lead-dependency__3cgD empty__28lE">
              <span class="text__3Q8b">待填写</span>
            </div>
            <div 
              class="handle__cGEN right" 
              data-role="handle"
              @mouseover="handleMouseOver(columns[3], true)" 
              @mouseout="handleMouseOver(columns[3], false)"  
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
const indent = 38;
export default {
  props: {
    showSelectionIndicator: {
      type: Boolean,
      default: false,
    },
    selectionIndicatorTop: {
      type: Number,
      default: 0,
    },
    rowHeight: {
      type: Number,
      default: 28,
    },
    tableWidth: {
      type: Number,
      default: 616,
    },
    tableHeight: {
      type: Number,
      default: 285,
    },
    dataList: {
      type: Array,
      default: () => [] 
    },
    columns: {
      type: Array,
      default: () => [] 
    },
    layGesture: {
      type: Function,
      default: () => () => {}
    }
  },
  data() {
    return {
      indent,
    }
  },
  watch: {
  },
  methods: {
    getIndent(depth) {
      return this.indent * depth;
    },
    getShowTrigger(barInfo) {
      return barInfo._childrenCount> 0;
    },
    rowTrigger(barInfo) {
      this.$emit('onRowOpen', barInfo.task, !barInfo._collapsed);
    },
    onMouseEnter(event) {
      this.$emit('onMouseEnter', event);
    },
    onMouseLeave(event) {
      this.$emit('onMouseLeave', event);
    },
    handleMouseOver(column, isOver) {
        const type = isOver ? 'mouseOver' : 'mouseLeave';
        this.layGesture(type, column)
      },
    dispatchGesture(type, event) {
      this.layGesture(type, event);
    }
  }
}
</script>