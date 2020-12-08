<template>
  <div
    class="scrollable__3FQe" 
    @mousemove="mousemove"
    @mouseup="gesturePressup"
    :style="`width: ${tableWidth}px; height: ${tableHeight}px;`"
  > 
    <div
      ref="bodyView"
      class="body__38O5 view-compact__1L78"
      :style="`width: ${tableWidth}px ; height: ${tableHeight}px`"
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
            @mousedown="(event) => dispatchGesture('mouseDown', event)"
            @mouseover="handleMouseOver(columns[key], true)" 
            @mouseout="handleMouseOver(columns[key], false)"  
          ></div>
        </div>
      </div>
      <template v-for="(barInfo, index) in rowDataList">
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
                  <task-menu
                    :barInfo="barInfo" 
                    @deleteTask="(closeFn) => deleteTask(barInfo, closeFn)"
                    @insertTask="() => insertTask(barInfo)"
                    @inserChildTask="inserChildTask"
                    @moveRightTask="moveRightTask"
                    @moveLeftTask="moveLeftTask"
                  ></task-menu>
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
                <RowHandleWrap
                  :barInfo="barInfo"
                  @rowHandleClick="rowHandleClick"
                  @gesturePress="gesturePress" 
                >
                  <i></i>
                </RowHandleWrap>
              </div>
            </div>
            <div class="body-cell__OUd5 content">
              <div 
                v-if="getContentReadOnly(barInfo)" 
                class="text__aNJc"
                @click="editTaskContent(barInfo)"
              >
                <div class="ellipsis hinted">
                  <span>{{barInfo.label}}</span>
                </div>
              </div>
              <template v-else>
                <Input :value="barInfo.label" :barInfo="barInfo" />
              </template>
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
            :style="`width: ${columns[1].width}px;`"
          >
            <div class="body-cell__OUd5 executor__1eK3 hasPermission empty">
              <span 
                data-role="avatar"
                class="avatar__1gRA avatar-xsmall__pF8f avatar-circle__3q2Y gantt-app-outline-executor-avatar"
                shape="circle"
                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABGlBMVEWmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqapqamtra2zs7O6urrAwMDCwsLDw8PExMTFxcXGxsbKysrMzMzS0tLY2Nje3t7f39/i4uLk5OTm5ubp6ent7e3v7+/x8fH09PT5+fn6+vr9/f3+/v7///9sumsYAAAAQHRSTlMABAUGExQWFxkaGxwlJikqTk9QUVdYW1xmaXBxcnV2enuNjo+TlJW2t7jLzM7P0NjZ2+zt7vHy8/T19vj5+vz+SWi1rwAAAhZJREFUGBmFwQ1b0mAUBuATirYyJZMCib6WikIqqUwxt6e5aeEGCoQ4Pf//byS6C8/7buB9U8LcilnZ2Ts+3tupmCtz9IzZ0pYDwdkqzdJkL78eIuHou0HpXpQtpLLKGUqxUMNEP5Yo4e0BprCWSVOwMZVdIEURzyqSkLOh8IMwDH0Xkp2jsUULgtuJ+FHXg2AtUiyzDcGL+EkAYTtDj8oQ3CFLHoRP9MCwILRZMYBgGTSyBsGNWOVDWKd72SYEnzUhhGaWiFYh+awJIa0SURWSz5oQ0hbRnAPJZY0PyTEoD1XEKg+K92RC4Q5Z5UFhUgWKkDVdKDaoDkXImj4UdWpAEbCmA0WDoHIHrIg8qAi6PguRC9UvakATstCF5ifVoTllIYCmThXo2jw2gG6DTCQMOBadQmdSHgktjrWR8IHmHeh8joXQOQZRFbqQY13oqkS0Cl2fY5ELzUciyjahCnisA1UzS/fWoQhZ6LiQ1mnEsPDE77NiGOCJZdCDMmJu0OeEYXiK2Cd6lKlhxOtEnK7bwkgtQ7GFAyAY8BTD8Dcab2gsZ+OSp7qEnSOhCFzwFBdAkRQFG61bnuCuBbtAmuUDeD1O1fNgvaOEhRrw5x8nDP4C20uUYuZzEzi7umPh7uoMaH6ZoXSvvh0COG/3rm9ub2+ue+1zAEdrr2mybKnqQHCqpSw9Yz5vbu7un5zs726a+XnS/QfUNwZ8HxlD9AAAAABJRU5ErkJggg==&quot;);">
              </span>
              <span class="text">{{barInfo.task._cacheData ? '' : '待认领'}}</span>
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
            <div class="body-cell__OUd5 date__hqPF hasPermission">
              <span class="text">{{barInfo.task._cacheData ? '' : barInfo._dateFormat(barInfo.task.endDate)}}</span>
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
            <div class="body-cell__OUd5 lead-dependency__3cgD empty__28lE">
              <span class="text__3Q8b">{{barInfo.task._cacheData ? '' : '待填写'}}</span>
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
      </template>
      <div class="row__29JV" :style="`top: ${(rowDataList.length * rowHeight + 4)}px; height: 28px;`">
        <div class="cell__3xqP resize-default__2DLj resizable__3OIa" :style="`width: ${columns[0].width}px;`">
          <div class="row-before__3blm" style="padding-left: 56px;">
            <div class="row-index__3xNX"></div>
            <div class="row-indentation__2dHs" style="background-size: 38px; width: 0px;"></div>
            <div class="row-menu-and-toggler___F4q"></div>
          </div>
          <div class="foot__1A82 gantt-app-outline-foot">
            <button 
              class="textbtn-color-blue__361l" 
              type="button" 
              data-role="text-button"
              @click="addCacheTask()"
            >
              <i class="next-icon next-icon-plus next-medium">
                <svg viewBox="0 0 1024 1024">
                  <use xlink:href="#at-plus"></use>
                </svg>
              </i>
              <span>添加新任务</span>
            </button>
          </div>
          <div class="handle__cGEN right" data-role="handle"></div>
        </div>
        <div class="cell__3xqP resize-default__2DLj resizable__3OIa" :style="`width: ${columns[1].width}px;`">
          <div class="handle__cGEN right" data-role="handle"></div>
        </div>
        <div class="cell__3xqP resize-default__2DLj resizable__3OIa" :style="`width: ${columns[2].width}px;`">
          <div class="handle__cGEN right" data-role="handle"></div>
        </div>
        <div class="cell__3xqP resize-default__2DLj resizable__3OIa" :style="`width: ${columns[3].width}px;`">
          <div class="handle__cGEN right" data-role="handle"></div>
        </div>
      </div>
      <div v-show="rowDataList[handleIndex]" class="mask__3CAH" @mousemove="gestureMove"></div>
      <div v-if="rowDataList[handleIndex]" class="drag-indicator__1C3_" :style="`left: ${handleLeft}px; top: ${handleTop}px;`"></div>
    </div>
  </div>
</template>
<script>
import Hammer from 'hammerjs';
import TaskMenu from './task-menu';

const indent = 38;
const getCacheData = ()  => {
  return {
    executor: null,
    content: '',
    startDate: null,
    endDate: null,
    collapsed: false,
    children: [],
    _cacheData: true, // 标识是否属于缓存数据
    _canEdit: false,  // 控制输入框
  }; 
}
const Input = {
  props: {
    value: {
      type: String,
      default: '',
    },
    barInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    /**
     * 触发失焦事件完成任务添加
     */
    onBlur() {
      let value = this.$refs.input.value.trim();
      this.$parent.completeInput(this.barInfo, value);
    },
    /**
     * 按键事件触发
     */
    keydown($event) {
      // enter 按键
      if (
        !(
          !$event.type.indexOf("key") &&
          this._k($event.keyCode, "enter", 13, $event.key, "Enter")
        )
      ) {
        return this.onKeydownEnter($event);
      }

      // shift + tab 组合按键
      if (
        !(
          !$event.type.indexOf("key") &&
          this._k($event.keyCode, "tab", 9, $event.key, "Tab")
        ) && 
        $event.shiftKey 
      ) {
        return this.onKeyShiftTab($event);
      }

      // Tab 按键
      if (
        !(
          !$event.type.indexOf("key") &&
          this._k($event.keyCode, "tab", 9, $event.key, "Tab")
        )
      ) {
        return this.onKeyTab($event);
      }

    },
    /**
     * enter 事件按下并且 添加新纪录 连续添加任务
     */
    onKeydownEnter() {
      const input = this.$refs.input;
      const value = input.value;
      if (!value.trim()) return;
      input.blur();
      this.$parent.$nextTick(() => {
        this.$parent.addCacheTask(this.barInfo._parent);
      });
    },
    /**
     * Tab 和 Shift 组合键 按下
     */
    onKeyShiftTab($event) { 
      $event.preventDefault();

      // 处在任务添加状态排除
      if (this.$parent.cacheRow) return;

      this.$parent.moveLeftTask(this.barInfo);
    },
    /**
     * tab按键按下
     */
    onKeyTab($event) {
      $event.preventDefault();

      // 处在任务添加状态排除
      if (this.$parent.cacheRow) return;
      
      // 开始向右侧移动
      this.$parent.moveRightTask(this.barInfo);
    }
  },
  mounted() {
    const input = this.$refs.input;
    input.setSelectionRange(this.value.length, this.value.length);
    input.focus();
  },
  render(h) {
    return h('input',
      {
        staticClass: 'input__Q-pw input-hover__35mM input-size-normal__3P2H input__3gEb gantt-app-outline-content-input',
        attrs: {
          attrplaceholder: "输入任务标题",
          'data-role': 'input',
          value: this.value,
        },
        on: {
          blur: this.onBlur,
          keydown: this.keydown,
        },
        ref: 'input',
      }
    )
  }
};

const RowHandleWrap = {
  props: {
    barInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    rowHandleClick(event) {
      this.$emit('rowHandleClick', event, this.barInfo);
    },
    /**
     * 初始化行拖拽事件
     */
    initGesture() {
      const rowHandle = this.$refs.rowHandle;
      const rowHandleHam = new Hammer(rowHandle);

      const press = (event) => {
        this.$emit('gesturePress', event, this.barInfo);
      }

      const pressup = (event) => {
        this.$emit('gesturePressup', event, this.barInfo);
      }

      rowHandleHam.on('press', (event) => press(event));
      rowHandleHam.on('pressup', (event) => pressup(event));

      this.destroyGesture = () => {
        rowHandleHam.destroy();
      }
    }
  },
  beforeDestroy() {
    this.destroyGesture();
  },
  mounted() {
    this.initGesture();
  },
  render(h) {
    return h('div', 
      {
        staticClass: 'body-row-handle__3YUe clickable__1NNN',
        ref: 'rowHandle',
        on: {
          click: this.rowHandleClick
        }
      },
      this.$slots.default
    )
  }
};

export default {
  components: {
    Input,
    TaskMenu,
    RowHandleWrap,
    // aDropdown,
    // TaskMenu,
    // elDropdown,
    // elDropdownMenu,
    // elDropdownItem,
  },
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
      cacheIdx: -1,
      cacheRow: null,
      handleIndex: -1, // 拖动条触发索引位置
      targetHandleIndex: -1, // 拖动条移动后所处索引位置
      handleTop: 0,   // 拖动条上下位置
      handleLeft: 61, // 拖动条左右位置
      handleNextIndex: -1, // 拖动条拖动后索引
      handleNextIndent: 0, // 拖动条拖动后缩进值
    }
  },
  watch: {
    cacheRow(val) {
      if (val) {
        const dataList = this.$parent.dataList;
        let parent = this.cacheRow._parent;
        let children = [];

        if (!parent)  {
          children = dataList;
        } else {
          !parent.children && (parent.children = []);
          children = parent.children;
        }

        children.splice(this.cacheIdx, 0, this.cacheRow);
        this.$parent.barList = this.$parent.getBarList();
      }
    }
  },
  computed: {
    rowDataList() {
      return this.dataList;
    }
  },
  methods: {
    getContentReadOnly(barInfo) {
      const task = barInfo.task;
      const readonly = !(task._cacheData || task._canEdit);
      return readonly;
    },
    clearCacheRow() {
      this.cacheIdx = -1;
      this.cacheRow = null;
    },
    /**
     * 插入子任务
     */
    inserChildTask(barInfo) {
      const task = barInfo.task;
      task.collapsed = false;
      this.addCacheTask(task);
    },
    /**
     * 添加数据缓存
     * index 添加数据的位置
     */
    addCacheTask(parent = null) {
      if (this.cacheRow) return;

      this.cacheRow = getCacheData();
      this.cacheRow._parent = parent;

      if (!parent) {
        this.cacheIdx = this.$parent.dataList.length;
      } else {
        this.cacheIdx = (parent.children || []).length;
      }
    },
    /**
     * 完成数据的添加操作
     */
    completeAdd(barInfo, value) {
      const task = this.cacheRow;
      const parent = barInfo._parent;

      // 完成添加操作
      barInfo.label = value;
      task.content = value;
      task._canEdit = false;
      task._cacheData = false;

      this.cacheIdx = -1;
      this.cacheRow = null;
      
      // 如果值不为空
      if (value) {
        this.$parent.$emit('onTaskCreate', (parent ? {...parent} : null), {...task});
        return;
      }

      if (!parent) {
        this.$parent.dataList.splice(this.cacheIdx, 1);
      } else {
        parent.children.splice(this.cacheIdx, 1);
      }


      this.$parent.barList = this.$parent.getBarList();
    },
    /**
     * 完成编辑操作
     */
    completeEdit(barInfo, value) {
      const task = barInfo.task;
      const label = barInfo.label;
      barInfo.label = value;
      task.content = value;
      task._canEdit = false;
      task._cacheData = false;

      if (label !== value) {
        this.$parent.$emit('onTaskChangeContent', { ...task }, value, label);
      }
    },
    /**
     * 完成任务添加编辑操作
     * cacheRow 临时添加缓存数据
     * cacheRow 需要添加的位置
     * vlaue 添加输入框编辑的内容
     */
    completeInput(barInfo, value) {
      if (this.cacheRow) {
        this.completeAdd(barInfo, value);
      } else {
        this.completeEdit(barInfo, value);
      }
    },
    /**
     * 对内容触发编辑操作
     */
    editTaskContent(barInfo) {
      const task = barInfo.task;
      task._canEdit = true;
      this.$forceUpdate();
    },
    /**
     * 触发删除操作
     */
    deleteTaskAction() {},
    /**
     * 完成对数据的删除
     */
    deleteTask(barInfo, closeFn) {
      const index = barInfo._index;
      if (barInfo._parent) {
        barInfo._parent.children.splice(index, 1);
      } else {
        this.$parent.dataList.splice(index, 1);
      }

      this.$parent.barList = this.$parent.getBarList();
      this.$parent.$emit('onTaskDelete', { ... barInfo.task });

      closeFn && closeFn();
    },
    /**
     * 插入同级别新任务
     */
    insertTask(barInfo) {
      if (!barInfo._parent) return;
      this.addCacheTask(barInfo._parent);
      this.cacheRow._depth = barInfo._depth;
    },
    /**
     * 向右侧移动任务
     * barInfo 任务信息
     */
    moveRightTask(barInfo) {
      // 必须有上一个兄弟节点
      let index = barInfo._index;
      if (index <= 0) return;

      // 获取坐标与父级
      const parent = barInfo._parent;

      // 获取所有兄弟任务
      let children;
      if (parent) {
        children = parent.children || [];
      } else {
        children = this.$parent.dataList;
      } 

      // 获取上一个兄弟任务
      let preSibTask = children[index - 1];
      children.splice(index, 1);

      if (!preSibTask.children)
        preSibTask.children = [];

      // 删除原先位置 挪动到新的位子上去
      preSibTask.children.push(barInfo.task);
      this.$parent.barList = this.$parent.getBarList();
      this.$parent.$emit('onTaskIndent', preSibTask ? {...preSibTask} : null, {...barInfo.task});
    },
    /**
     * 向左侧移动任务
     * barInfo 任务信息
     */
    moveLeftTask(barInfo) {
      // 最左侧元素不进行位移
      let depth = barInfo._depth;
      if (depth <= 0) return;

      // 获取父级及爷爷级别的节点
      const parent = barInfo._parent;
      if (!parent) return;
      const ancestor = parent._parent;

      // 获取兄弟节点和父级兄弟节点
      let sibList = parent.children;
      let parentChildren;
      if (ancestor) {
        parentChildren = ancestor.children;
      } else {
        parentChildren = this.$parent.dataList;
      }
     
      // 开始移动移动元素
      let index = barInfo._index;
      sibList.splice(index, 1);
      parentChildren.push(barInfo.task);
      this.$parent.barList = this.$parent.getBarList();
      this.$parent.$emit('onTaskIndent', ancestor ? {...ancestor} : null, {...barInfo.task});
    },
    getIndent(depth) {
      return this.indent * depth;
    },
    getShowTrigger(barInfo) {
      return barInfo._childrenCount > 0;
    },
    rowTrigger(barInfo) {
      this.$emit('onRowOpen', barInfo.task, !barInfo._collapsed);
    },
    handleMouseOver(column, isOver) {
      const type = isOver ? 'mouseOver' : 'mouseLeave';
      this.layGesture(type, column)
    },
    dispatchGesture(type, event) {
      this.layGesture(type, event);
    },

    gesturePress(event, barInfo) {
      const baseLeft = 56;   // 基础偏移值
      const leftMargin = 61; // 中心点基础偏移值
      const topMargin = 4;   // 垂直方向基础偏移值
      const rowH = 28;       // 行高
      const indentStep = 38; // 行缩进值

      // 手势状态
      this._gestureStatus = 'press';

      // 根据数据下标获取位置
      const getHandleTop = (index) => {
        if (this.dataList.length === 0) return 0;

        const barInfo = this.dataList[index];
        if (!barInfo) {
          index = this.dataList.length - 1;
        } 

        return index * rowH + topMargin + rowH;
      }

      // 根据缩进值获取Left值
      const getHandleLeftByIndent = (indent) => {
        return indent * indentStep + leftMargin;
      }

      // 根据鼠标的offsetX获取行缩进值
      const getHandleIndentByOffsetX = (index, offsetX) => {
        if (this.dataList.length === 0) return 0;

        const barInfo = this.dataList[index];
        if (!barInfo) {
          index = this.dataList.length - 1;
        }

        offsetX = (offsetX - baseLeft < 0) ? 0 : offsetX - baseLeft;

        let depth = barInfo._depth;
        let indent = Math.floor(offsetX / indentStep);

        if (indent > depth + 1) {
          indent = depth + 1;
        }

        return indent;
      }

      // 根据行索引获取Left值
      const getHandleLeftByIndex = (index) => {
        const barInfo = this.dataList[index];
        if (this.dataList.length === 0 || !barInfo) return leftMargin;
        
        return getHandleLeftByIndent(barInfo._depth);
      }

      const getNextHandleIndexByIndent = (index, indent) => {
        const barInfo = this.dataList[index];
        if (this.dataList.length === 0 || !barInfo) return 0;

        let nextIdx = index;
        while (!barInfo._collapsed && nextIdx < this.dataList.length) {
          if (nextIdx === index) {
            nextIdx ++;
            continue;
          }

          let barInfo = this.dataList[nextIdx];
          if(barInfo._depth > indent) {
            nextIdx ++;
          } else {
            break;
          }
        }

        if (nextIdx !== index) {
          index = nextIdx - 1;
        }

        return index;
      }

      // 根据鼠标位置获取数据下标
      const getHandleBarIndex = (top) => {
        const topMargin = 4;
        const rowH = 28;

        top = top - topMargin < 0 ? 0 : top - topMargin;
        let index = Math.floor(top / rowH);
        if (index >= this.dataList.length) {
          index = this.dataList.length - 1;
        }

        return index;
      }

      // TODO 鼠标移动 适当做节流优化
      const panMove = (event) => {
        // 根据鼠标Y坐标获取所处行索引
        const index = getHandleBarIndex(event.offsetY);
        this.targetHandleIndex = (this.dataList[index] || {})._flattenIndex;

        // 根据行索引及X坐标获取缩进值
        const nextIndent  = getHandleIndentByOffsetX(index, event.offsetX);
        this.handleNextIndent = nextIndent;

        // 根据缩进值获取左侧缩进位置
        this.handleLeft = getHandleLeftByIndent(nextIndent);

        // 根据所处行及缩进值获取插入的位置
        const nextIndex = getNextHandleIndexByIndent(index, nextIndent);
        this.handleNextIndex = nextIndex;
        this.handleTop = getHandleTop(nextIndex);
      };

      // 行的折叠状态
      this._handleOpen = !barInfo._collapsed;

      // 如果当前行未折叠 进行折叠操作
      if (this._handleOpen && this.getShowTrigger(barInfo)) this.rowTrigger(barInfo);

      // 记录数据下标 
      this.handleIndex = barInfo._flattenIndex; 
      this.targetHandleIndex = barInfo._flattenIndex;
      this.handleNextIndex = barInfo._flattenIndex;
      this.handleNextIndent = barInfo._depth;

      // 记录插入数据的位置
      this.handleTop = getHandleTop(this.handleIndex);
      this.handleLeft = getHandleLeftByIndex(this.handleIndex);
      this._panMove = panMove;
      
    },
    gestureMove(event) {
      // 手势为press状态不进行操作
      if (this._gestureStatus !== 'press') return;

      this._panMove && this._panMove(event);
    },
    gesturePressup() {
      if (this._gestureStatus !== 'press') return;

      // 获取移动的行数数据
      const handleBarInfo = this.rowDataList[this.handleIndex];

      // 恢复展开行的状态
      this._handleOpen && this.getShowTrigger(handleBarInfo) && this.rowTrigger(handleBarInfo);

      // 要拖动数据索引
      const handleIndex = this.handleIndex;
      // 鼠标位置所处的数据索引
      const targetHandleIndex = this.targetHandleIndex;
      // 数据需要移动到位置数据索引
      const handleNextIndex = this.handleNextIndex;
      // 数据缩进的位置
      const handleNextIndent = this.handleNextIndent;

      this.handleIndex = -1;
      delete this._gestureStatus;

      // 获取父级任务
      const getParentTask = (targetHandleIndex, handleNextIndent) => {
        // 视图数据
        const dataList = this.dataList;
        // 鼠标所触发的行数据
        const targetBar = dataList[targetHandleIndex];
        if (!targetBar) return null;

        // 父任务
        const targetTask = targetBar.task;
        // 缩进值
        const depth = targetBar._depth;

        // 同级别缩进值和父子关系
        if (depth === handleNextIndent) {
          return targetTask._parent;
        } else if (depth < handleNextIndent) {
          return targetTask;
        }

        // 向上查找父亲
        let index = targetHandleIndex;
        while(index >= 0 && index < dataList.length) {
          let task = dataList[index].task;

          if (task._depth === handleNextIndent) {
            return task._parent;
          }

          if (task._depth < handleNextIndent) {
            return task;
          }

          index --;
        }

        return null;
      }
      const getTargetTask = (targetHandleIndex) => {
        // 视图数据
        const dataList = this.dataList;
        // 鼠标所触发的行数据
        const targetBar = dataList[targetHandleIndex];
        if (!targetBar) return null;

        return targetBar.task;
      }

      // 获取移动数据
      const getHandleTask = (handleIndex) => {
        // 视图数据
        const dataList = this.dataList;

        // 鼠标所触发的行数据
        const handleBar = dataList[handleIndex];
        if (!handleBar) return null;

        return handleBar.task;
      }

      // 需要移动数据
      const handleTask = getHandleTask(handleIndex);
      // 需要插入的行数据
      const parentTask = getParentTask(targetHandleIndex, handleNextIndent);
      // 鼠标所处位置的行数据
      const targetTask = getTargetTask(targetHandleIndex);
      
      // 父级原始节点
      const preParent = handleTask._parent;

      // 执行删除数据逻辑
      if (!handleTask) return;
      if (handleTask === targetTask && handleNextIndent >= targetTask._depth) return;

      let children = this.$parent.dataList;
      if (handleTask._parent) {
        children = handleTask._parent.children || [];
      } 

      handleTask._parent = parentTask;  // 切换父子关系
      children.splice(handleTask._index, 1);
      let index = 0;

      // 父子关系插入行数据
      if (parentTask === targetTask) {
        parentTask.children.unshift(handleTask);
      } else {
        // 取出子元素
        children = this.$parent.dataList;
        if (parentTask) {
          children = parentTask.children;
        }

        // 根据插入的父子关系 来判断插入位置
        if (handleNextIndent > targetTask._depth) {
          children.unshift(handleTask);
        } else { 
          // 根据邻近的兄弟元素 获取插入的位置
          let sibTask = this.dataList[handleNextIndex + 1]; 
          let splitIdx = sibTask ? sibTask._index : children.length;
          if (!sibTask || sibTask._depth < handleNextIndent) {
            children.push(handleTask);
            index = children.length - 1;
          } else {
            let appendChildren = children.splice(splitIdx);
            children.push(handleTask, ...appendChildren);
            index = splitIdx;
          }
        } 
      }

      this.$parent.barList = this.$parent.getBarList();

      // console.log(parentTask, handleTask, index, '>>>>>>>>>>>>>>>');
      this.$parent.$emit('onDragSort', preParent, parentTask, handleTask._index, index, handleTask);
    },
    mousemove(event) {
      this.$emit('mousemove', event);
      // this.gestureMove(event);
    },
    rowHandleClick(event, barInfo) {
      if (this._gestureStatus === 'press') return;

      this.$parent.$emit('onToDetail', barInfo.task)
    },
  },
  mounted() {
    document.body.addEventListener('mouseup', this.gesturePressup);
  },
  beforeDestroy() {
    document.body.removeEventListener('mouseup', this.gesturePressup);
    this.bodyHammer && this.bodyHammer.destroy();
  },
}
</script>