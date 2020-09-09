<template>
  <div class="gantt-app-view" :style="`width: ${viewWidth}px;height:${viewHeight}px;margin:auto;`">
    <div class="container__1PWP" style="box-sizing: content-box;">
      <div 
        ref="ganttBody" 
        id="gantt-body" 
        class="body__3LBc gantt__3Xim"
        :width="viewWidth" 
        :height="viewHeight">
        <div :class="{ scrolling__1B1k: guestureGrantBodyMove }" class="scroll-indicator__3aij" style="left: -8px; width: 8px;"></div>
        <header>
          <div ref="timeAxisRender" @wheel.prevent="wheel" class="time-axis__3meF" style="left: 0px; width: 1332px;">
            <div  class="render-chunk__28qu" :style="`transform: translateX(-${translateX}px;`">
              <div 
                v-for="(item, key) in getMonthYearListPx()" 
                :key="key" 
                class="major__2rd6" 
                :style="`width: ${item.width}px; left: ${item.left}px;`"
              >
                <div class="label__RLd1">{{item.label}}</div>
              </div>
              <div
                v-for="(dayItem) in getdayMonthListPx()"
                class="minor__11Xd" 
                :class="{weekends__1EmY: dayItem.isWeek}"
                :key="dayItem.key"
                :style="`width: 30px; left:${dayItem.left}px;`"
               >
                <div class="label__RLd1">{{ dayItem.label }}</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div
            class="selection-indicator__3rr6" 
            v-show="showSelectionIndicator" 
            :style="`display: none; height: 28px; top: ${selectionIndicatorTop}px;`"
          ></div>
          <!-- <div
            ref="chartView"
            @wheel.prevent="wheel"
            @mouseup="shadowGesturePressup"
            @mouseenter.prevent="onMouseEnter"
            @mousemove.prevent="deOnMouseMove"
            @mouseleave="showSelectionIndicator = false"
            class="chart__3nGi" 
            :style="`left:0px;height:${svgViewH}px;width:${viewWidth}px;`"
          > -->
          <div
            ref="chartView"
            @wheel.prevent="wheel"
            @mouseup="shadowGesturePressup"
            @mouseenter.prevent="onMouseEnter"
            @mousemove="deOnMouseMove"
            @mouseleave="showSelectionIndicator = false"
            class="chart__3nGi" 
            :style="`left:0px;height:${svgViewH}px;width:${viewWidth}px;`"
          >
            <svg class="chart-svg-renderer__7ors"
              xmlns="http://www.w3.org/2000/svg" 
              version="1.1" 
              :width="viewWidth" 
              :height="svgViewH" 
              :viewBox="`${translateX}.0076633333 0 ${viewWidth} ${svgViewH}`"
            >
              <template v-for="(item) in getdayMonthListPx()">
                <g v-if="item.isWeek" :key="item.key" stroke="#f0f0f0">
                  <path :d="`M${item.left}.5,0 L${item.left},${svgViewH}`"></path>
                  <rect fill="#F7F7F7" opacity="0.5" stroke-width="0" :x="item.left" y="0" width="30" :height="svgViewH"></rect>
                </g>
                <g v-else :key="item.key" stroke="#f0f0f0">
                  <path :d="`M${item.left}.5,0 L${item.left},${svgViewH}`"></path>
                </g>
              </template>
              <g
                v-if="showDragToolShadow" 
                fill="rgba(204, 236, 255, 0.3)" 
                stroke="#87D2FF"
              >
                <path v-show="shadowGestBarLeft" :d="`M${shadowGestBarLeft},0 L${shadowGestBarLeft},${svgViewH}`"></path>
                <rect :x="dragToolShadowX" y="0" :width="dragToolShadowW" :height="svgViewH" stroke-width="0"></rect>
                <path v-show="shadowGestBarRight" :d="`M${shadowGestBarRight},0 L${shadowGestBarRight},${svgViewH}`"></path>
              </g>
            </svg>
            <div class="render-chunk__22Ez" :style="`height: 178px; transform:translateX(-${translateX}px;`">
              <template v-for="(bar, index) in barList" >
                <task-bar-thumb
                  v-if="getshowTaskBar(bar.width, bar.translateX, translateX)"
                  :key="index"
                  :label="bar.label"
                  :viewWidth="viewWidth"
                  :viewTranslateX="translateX"
                  :translateX="bar.translateX" 
                  :translateY="bar.translateY"
                  :width="bar.width"
                  @timeTranslateLocation="locaTimeTranslate"
                ></task-bar-thumb>
                <task-bar
                  v-else 
                  :key="index"
                  :label="bar.label"
                  :width="bar.width"
                  :translateX="bar.translateX" 
                  :translateY="bar.translateY" 
                  :showDragBar="getShowBar(bar.translateY, selectionIndicatorTop)"
                  @gesturePress="(event, type) => shadowGesturePress(event, type, bar)" 
                  @gesturePressup="(event, type) => shadowGesturePressup(event, type, bar)"
                  @gestureBarPress="(event) => shadowGestureBarPress(event, bar)" 
                  @gestureBarPressup="(event) => shadowGestureBarPressup(event, bar)"
                ></task-bar>
              </template>
            </div>
          </div>
        </main>
        <time-indicator
          :guestureGrantBodyMove="guestureGrantBodyMove"
          :viewTranslateX="translateX"
          :viewWidth="viewWidth"
          :pxUnitAmp="pxUnitAmp"
          @timeTranslateLocation="locaTimeTranslate"
        ></time-indicator>
        <time-axis-scale-select
          v-model="viewTypeObj"
          :viewWidth="viewWidth"
          :view-type-list="viewTypeList" 
          :defaultValue="viewTypeObj" 
        ></time-axis-scale-select>
      </div>
    </div>  
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import dayjs from "dayjs"; // 导入日期js
// const uuidv4 = require("uuid/v4"); // 导入uuid生成插件
import isBetween from "dayjs/plugin/isBetween";
// import weekday from 'dayjs/plugin/weekday';
import TaskBar from './task-bar';
import TaskBarThumb from './task-bar-thumb';
import TimeIndicator from './time-indicator.vue';
import TimeAxisScaleSelect from './time-axis-scale-select.vue';

import Hammer from 'hammerjs';


import '@/assets/css/icons.css';
import '@/assets/css/cds.css';
import '@/assets/css/gantt.css';

dayjs.extend(isBetween);

// console.log(TimeIndicator, '>>>>>>>');
/*
 **************定义字段类型****************
 // 列字段名称
 interface Column {
   minWidth: number,
   prop: string,
   sortable: boolean,
   width: width
 }
 type ColumnList = Column[]
*/

const aTick = ("function" === typeof requestAnimationFrame) ? requestAnimationFrame : 
  e => setTimeout(() => e(Date.now()), 1e3 / 60);

const pxUnitAmp = (60 * 60 * 24 / 30) * 1000;
const rowHeight = 28;

const barList = [
  { translateY: 42, translateX: 554780, width: 90, label: '绘制表盘设计逻辑' },
  { translateY: 70, translateX: 554810, width: 120, label: '阅读喜欢的📚' },
  { translateY: 98, translateX: 554810, width: 120, label: '三体'},
];

const viewTypeList = [
  {
    key: "day",
    label: "日",
    value: 2880
  },
  {
    key: "week",
    label: "周",
    value: 3600
  },
  {
    key: "month",
    label: "月",
    value: 14400
  },
  {
    key: "quarter", 
    label: "季",
    value: 86400
  },
  {
    key: "halfYear", 
    label: "年",
    value: 64800
  }
]
/** 时间定位相关逻辑 */
const locationModule = {
  locaTimeTranslate(translateX) {
    this.translateX = translateX;
  }
};

export default {
  name: "tsGantt",
  components: {
    TaskBar,
    TimeIndicator,
    TaskBarThumb,
    TimeAxisScaleSelect
  },
  data() {
    return {
      viewWidth: this.width,
      viewHeight: this.height,
      viewTypeObj: viewTypeList[0],
      viewTypeList,
      cellUnit: 30,
      wheelDis: 0,
      translateX: 552410,
      format: 'YYYY年 MM月',

      selectionIndicatorTop: 0,
      showSelectionIndicator: false,
      
      // 拖拽阴影相关参数
      gestureKeyPress: false,
      shadowGestSide: 'right',
      shadowGestBarLeft: 554810,
      shadowGestBarRight: 0,
      showDragToolShadow: false,
      dragToolShadowX: 554810,
      dragToolShadowW: 128,
      isShadowGesturePress: false,

      guestureGrantBodyMove: false,
      // 数据部分
      barList,
    };
  },
  props: {
    width: {
      type: Number,
      default: 1332
    },
    height: {
      type: Number,
      default: 418,
    }
  },
  computed: {
    svgViewH() {
      return this.viewHeight - 56;
    },
    /**
     * 时间起始偏移量
     */
    translateAmp() {
      const translateX = this.translateX;
      const timeamp = pxUnitAmp * translateX;
      return timeamp;
    },
    
    dayMonthList() {
      return [];
    },
    pxUnitAmp() {
      return pxUnitAmp;
    }
  },
  methods: {
    /** 
     * 鼠标进入图表区域
     */
    onMouseEnter() {
      this.chartViewTop = this.$refs.chartView.getBoundingClientRect().top;
    },
    /**
     * 光标在图表区域滑动 选中行进行移动对应行数据
     */
    onMouseMove(event) {
      if (!this.isPointerPress) {
        this.showSelectionBar(event);
      }
    },
    /**
     * 根据选中行高度 显示对应条状工具条
     */
    getShowBar(top, selectionIndicatorTop) {
      let baseTop = top - (top % rowHeight);
      let isShow = (selectionIndicatorTop >= baseTop && selectionIndicatorTop <= baseTop + rowHeight);

      return isShow;
    },
   
    /**
     * 是否显示任务条状图 
     */
    getshowTaskBar(width, translateX, timeTranslateX) {
      const rightSide = this.translateX + this.viewWidth;
      const right = translateX;

      return translateX + width < timeTranslateX || right - rightSide > 0;
    },
    /**
     * 手势按下的逻辑
     */
    shadowGesturePress(event, type, barInfo) {
      this.gestureKeyPress = true;
      const { translateX, width } = barInfo;
      let barLeft = (type === 'left') ? translateX : translateX + width;

      this.dragToolShadowX = translateX;
      this.dragToolShadowW = width;
      this.shadowGestBarLeft = barLeft;

      this.isPointerPress = true;
      const sideType = type;
      const step = this.cellUnit;
      const isLeft = sideType === 'left';
      const clientRect = event.target.getBoundingClientRect();
      const startX = isLeft ? clientRect.right : clientRect.left;

      const basePointerX = isLeft ? startX + width : startX - width;

      const setBarShadowPosition = (moveEv) => {
        const pointerX = moveEv.center.x;

        this.showDragToolShadow = true;
        const isShrink = getDragSideShrink(moveEv);
        const isExpand = getDragSideExpand(moveEv);

        const getShadowMoveDis = (baseX, pointerX) => {
          const moveDis = pointerX - baseX;
          return moveDis;
        } 

        const moveDis = getShadowMoveDis(startX, pointerX);

        if (isShrink) {
          moveShrinkStep(moveDis, step, pointerX);
        } 

        if (isExpand) {
          moveExpandStep(moveDis, step, pointerX);
        }
      }

      const getDragSideShrink = (moveEv) => {
        let direction = 0;
        if (moveEv.direction === 2) {
          direction = -1;
        } else if (moveEv.direction === 4) {
          direction = 1;
        }

        return (sideType === 'right' && direction < 0) || (sideType === 'left' && direction > 0);
      }
      const getDragSideExpand = (mouseEv) => {
        let direction = 0;
        if (mouseEv.direction === 2) {
          direction = -1;
        } else if (mouseEv.direction === 4) {
          direction = 1;
        }

        return (sideType === 'right' && direction > 0) || (sideType === 'left' && direction < 0);
      }
      /**
       * 跟随鼠标移动搜索阴影
       */
      const moveShrinkStep = (moveDis, step, pointerX) => {
        const isLeft = sideType === 'left';
        
        let translateX = this.dragToolShadowX;
        let width = this.dragToolShadowW;
        let barLeft = this.shadowGestBarLeft;
        
        if (isLeft) {
          translateX += step;
          width -= step;
          barLeft = translateX;
        } else {
          width -= step;
          barLeft = translateX + width;
        }
        
        const pointerDis = Math.abs(pointerX - basePointerX);
        if (pointerDis > width) return; 
        if (width <= step) return;

        aTick(() => {
          this.dragToolShadowW = width;
          this.dragToolShadowX = translateX;
          this.shadowGestBarLeft = barLeft;

          barInfo.translateX = translateX;
          barInfo.width = width;
        });
      }
      /**
       * 跟随鼠标拖动扩大阴影
       */
      const moveExpandStep = (moveDis, step, pointerX) => {
        const space = 5;

        let translateX = this.dragToolShadowX;
        let width = this.dragToolShadowW;
        let barLeft = this.shadowGestBarLeft;
        
        const pointerDis = Math.abs(pointerX - basePointerX);
        if (pointerDis < space || pointerDis < width) return;
      
        // 测试代码
        if (isLeft) {
          translateX -= step;
          width += step;
          barLeft = translateX;
        } else {
          width += step;
          barLeft = translateX + width;
        }

        aTick(() => {
          this.dragToolShadowW = width;
          this.dragToolShadowX = translateX;
          this.shadowGestBarLeft = barLeft;

          barInfo.translateX = translateX;
          barInfo.width = width;
        })
      };

      const panMove = (event) => {
        setBarShadowPosition(event)
      };
      const panEnd = () => {
        this.isPointerPress = false;
        this.showDragToolShadow = false;

        this.chartHammer.off('panmove', panMove);
        this.chartHammer.off('panend', panEnd);
        this.shadowGestBarLeft = 0;
        this.shadowGestBarRight = 0;
      }

      this.chartHammer.on('panmove', panMove);
      this.chartHammer.on('panend', panEnd);
    },
    /**
     * 手指抬起做一些清理操作
     */
    shadowGesturePressup() {
      this.gestureKeyPress = false;
    },
    /**
     * 手指按住任务条线触发事件
     */
    shadowGestureBarPress(event, barInfo) {
      this.gestureKeyPress = true;

      const step = this.cellUnit;
      let { translateX, width } = barInfo;
      let barLeft = translateX;
      let barRight = translateX + width;

      let startX = 0;
      let pointerX = 0;

      const layoutShadow = (width, translateX, barLeft, barRight) => {
        aTick(() => {
          this.dragToolShadowW = width;
          this.dragToolShadowX = translateX;
          this.shadowGestBarLeft = barLeft;
          this.shadowGestBarRight = barRight;

          barInfo.translateX = translateX;
        });
      };

      const setBarShadowPosition = (event) => {
        pointerX = event.center.x;
        const pointerDis = pointerX - startX;
        const direction = pointerDis > 0 ? 1 : -1; 
        const moveX = step * direction;

        if (Math.abs(pointerDis) >= step) {
          translateX = translateX + moveX;
          barLeft = translateX;
          barRight = translateX + width;
          layoutShadow(width, translateX, barLeft, barRight);
          startX = startX + moveX;
        }
      };

      layoutShadow(width, translateX, barLeft, barRight);

      const panStart = (event) => {
        startX = event.center.x;
      };

      const panMove = (event) => {
        this.showDragToolShadow = true;
        setBarShadowPosition(event);
      }

      const panEnd = () => {
        this.showDragToolShadow = false;
        this.chartHammer.off('panstart', panStart);
        this.chartHammer.off('panmove', panMove);
        this.chartHammer.off('panend', panEnd);
        this.shadowGestBarLeft = 0;
        this.shadowGestBarRight = 0;
      }
      
      this.chartHammer.on('panstart', panStart);
      this.chartHammer.on('panmove', panMove);
      this.chartHammer.on('panend', panEnd);
    },
    shadowGestureBarPressup() {
      this.gestureKeyPress = false;
    },
    /**
     * 计算位置
     */
    showSelectionBar(event) {
      /** TODO 增加节流机制更平滑 */
      const topMargin = 4;
      const rowH = 28;
      const offsetY = event.clientY - this.chartViewTop;

      if (offsetY < topMargin) {
        this.showSelectionIndicator = false;
        return;
      } else {
        let top = Math.floor((offsetY - 4) / rowH) * rowH + 4;
        this.showSelectionIndicator = true;
        this.selectionIndicatorTop = top;
      }
    },

    wheel(event) {
      if (this._wheelTimer) clearTimeout(this._wheelTimer);
      this.guestureGrantBodyMove = true;
      this.translateX += event.deltaX;

      this._wheelTimer = setTimeout(() => {
        this.guestureGrantBodyMove = false;
      }, 100);
    },
    getDurationAmp() {
      const clientWidth = this.viewWidth;
      return pxUnitAmp * clientWidth; 
    },
    /**
     *  获取可视区域月份
     */
    getMonthYearList() {
      const translateAmp = this.translateAmp;
      const endAmp = translateAmp + this.getDurationAmp();
      const format = this.format;
      // 初始化当前时间
      let curDate = dayjs(translateAmp);
      let curMonth = curDate.$M;
      let dateMap = new Map(); 

      // 对可视区域内的时间进行迭代
      while(curDate.isBetween(translateAmp - 1, endAmp + 1)) {
        let monthKey = curDate.format(format);
        if (!dateMap.has(monthKey)) {
          dateMap.set(monthKey, {
            label: monthKey,
            startDate: curDate,
          });
        }

        // 获取下次迭代的时间
        let iterDate = curDate.add(pxUnitAmp, 'millisecond');
        let iterMonth = iterDate.$M;

        // 设置当前月份最后时间
        if (iterMonth !== curMonth) {
          dateMap.get(monthKey).endDate = curDate.hour(23).minute(59).second(59);
        }

        // 记录迭代时间
        curDate = iterDate;
        curMonth = iterMonth;
      }

      let endMonth = curDate.$M;
      let endDate = curDate;
      // 把最后一个月时间迭代结束
      let iter = true;
      while( iter ) {
        let iterDate = endDate.add(pxUnitAmp, 'millisecond');
        if (iterDate.$M !== endMonth) {
          iter = false;
          break;
        }

        endDate = iterDate;
      }

      let monthKey = endDate.format(format);
      if (dateMap.has(monthKey)) {
        dateMap.get(monthKey).endDate = endDate.hour(23).minute(59).second(59);
      } 

      return [ ...dateMap.values() ]
    },
    /**
     * 获取可视区域月份排版数据
     */
    getMonthYearListPx() {
      const monthYearList = this.getMonthYearList();
      
      // for(let i = 0)
      const list = monthYearList.map(item => {
        const startDate = item.startDate;
        const endDate = item.endDate;
        const label = item.label;

        let left = (startDate.valueOf() / pxUnitAmp); 
        // let width = 900;
        let width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;

        return {
          label,
          left,
          width
        }
      });
      
      return list;
    },
    getdayMonthList() {
      const startAmp = this.translateAmp;
      const endAmp = startAmp + this.getDurationAmp();
      const format = 'YYYY-MM-DD';
      // 初始化当前时间
      let curDate = dayjs(startAmp);
      let dayMap = new Map(); 
      
      while(curDate.isBetween(startAmp - 1, endAmp + 1)) {
        let dayKey = curDate.format(format);
        if (!dayMap.has(dayKey)) {
          dayMap.set(dayKey, {
            label: curDate.$D,
            date: curDate,
            key: dayKey
          })
        }

        curDate = curDate.add(pxUnitAmp, 'millisecond');
      }

      return [ ...dayMap.values() ];
    },
    getdayMonthListPx() {
      const dayMonthList = this.getdayMonthList();

      const list = dayMonthList.map(item => {
        let date = item.date.hour(0).minute(0).second(0);
        let label = item.label;
        let left = date.valueOf() / pxUnitAmp;
        let isWeek = [0, 6].includes(date.$W);

        return {
          label,
          left,
          isWeek
        }
      });

      return list;
    },

    ...locationModule,

    initGrantBodyGesture() {
      const ganttBody = this.$refs.ganttBody;
      const gantBodyH = new Hammer(ganttBody);
      let translateX = this.translateX;

      const panStart = () => {
        if (this.gestureKeyPress) return;
        this.guestureGrantBodyMove = true;
        translateX = this.translateX;
      }

      const panMove = (event) => {
        if (this.gestureKeyPress) return;

        this.translateX = translateX - event.deltaX;
      }

      const panEnd = (event) => {
        if (this.gestureKeyPress) return;
        this.guestureGrantBodyMove = false;
        this.translateX = translateX - event.deltaX;
      }

      gantBodyH.on('panstart', panStart);
      gantBodyH.on('panmove', panMove);
      gantBodyH.on('panend', panEnd);
    },
  },
  watch: {
  },
  created() {
    this.deOnMouseMove = debounce(this.onMouseMove, 5)
  },
  mounted() {
    this.initGrantBodyGesture();

    const chartView = this.$refs.chartView;
    this.chartHammer = new Hammer(chartView);
    this.chartHammer.options.domEvents = true;
  },
  beforeDestroy() {
    // this.ha.destroy()
    // this.$af.destroy();
  }
};
</script>
<style>
/* @import url('./gantt.css'); */
/* import url(@/assets/fonts/tb-icons.woff2'; */
/* @import url('../assets/css/quarterly.css'); */
/* @import '../assets/css/icons.css'; */
/* @import '../assets/css/cds.css'; */
/* @import '../assets/css/gantt.css'; */

</style>
