<template>
  <div class="gantt-app-view" :style="`width: ${width}px;height:${viewHeight}px;margin:auto;`">
    <svg-symbol></svg-symbol>
    <div class="container__1PWP" style="box-sizing: content-box;">
      <div 
        ref="ganttBody" 
        id="gantt-body" 
        class="body__3LBc gantt__3Xim"
        :width="width" 
        :height="viewHeight">
        <div :class="{ scrolling__1B1k: guestureGrantBodyMove }" class="scroll-indicator__3aij" style="left: -8px; width: 8px;"></div>
        <header>
          <table-header 
            :collapsed="collapsed"
            :width="tableWidth" 
            @onAllRowOpen="onAllRowOpen"
          ></table-header>
          <div 
            ref="timeAxisRender" 
            @wheel.prevent="wheel" 
            class="time-axis__3meF" 
            :style="`left: ${tableWidth}px; width: ${viewWidth}px;`"
          >
            <div  class="render-chunk__28qu" :style="`transform: translateX(-${translateX}px;`">
              <div 
                v-for="(item, key) in getMajorList()" 
                :key="key" 
                class="major__2rd6" 
                :style="`width: ${item.width}px; left: ${item.left}px;`"
              >
                <div class="label__RLd1">{{item.label}}</div>
              </div>
              <div
                v-for="(dayItem) in getMinorList()"
                class="minor__11Xd" 
                :class="{
                  weekends__1EmY: dayItem.isWeek, 
                  highlight__3NdW: dayItem.isHighlight && viewTypeObj.key === 'day'
                }"
                :key="dayItem.key"
                :style="`width: ${dayItem.width}px; left:${dayItem.left}px;`"
               >
                <div class="label__RLd1">{{ dayItem.label }}</div>
                <div v-if="dayItem.isHighlight && viewTypeObj.key === 'day'" class="highlight-bg__1mPp"></div>
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
          <table-body
            :selectionIndicatorTop="selectionIndicatorTop"
            :table-width="tableWidth" 
            :dataList="barList" 
            :table-height="svgViewH" 
            @mousemove="deOnMouseMove"
            @onRowOpen="onRowOpen"
          ></table-body>
          <div
            ref="chartView"
            @wheel.prevent="wheel"
            @mouseup="shadowGesturePressup"
            @mouseenter.prevent="onMouseEnter"
            @mousemove="deOnMouseMove"
            @mouseleave="showSelectionIndicator = false"
            class="chart__3nGi" 
            :style="`left:${tableWidth}px;height:${svgViewH}px;width:${viewWidth}px;`"
          >
            <svg class="chart-svg-renderer__7ors"
              xmlns="http://www.w3.org/2000/svg" 
              version="1.1" 
              :width="viewWidth" 
              :height="svgViewH" 
              :viewBox="`${translateX} 0 ${viewWidth} ${svgViewH}`"
            >
              <template v-for="(item) in getMinorList()">
                <g v-if="item.isWeek" :key="item.key" stroke="#f0f0f0">
                  <path :d="`M${item.left}.5,0 L${item.left},${svgViewH}`"></path>
                  <rect fill="#F7F7F7" opacity="0.5" stroke-width="0" :x="item.left" y="0" :width="item.width" :height="svgViewH"></rect>
                  <rect v-if="item.isHighlight" fill="#FFA941" opacity="0.3" stroke-width="0" :x="item.highlightX" y="0" :width="item.highlightW" :height="svgViewH"></rect>
                </g>
                <g v-else :key="item.key" stroke="#f0f0f0">
                  <path :d="`M${item.left}.5,0 L${item.left},${svgViewH}`"></path>
                  <rect v-if="item.isHighlight" fill="#FFA941" opacity="0.3" stroke-width="0" :x="item.highlightX" y="0" :width="item.highlightW" :height="svgViewH"></rect>
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
                  v-if="getshowTaskBar(bar.width, bar.translateX, translateX) && !bar.invalidDateRange"
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
                  :stepGesture="bar.stepGesture"
                  :invalidDateRange="bar.invalidDateRange"
                  :dateTextFormat="bar.dateTextFormat"
                  :showDragBar="bar.getHovered(bar.translateY, selectionIndicatorTop)"
                  @gesturePress="(event, type) => shadowGesturePress(event, type, bar)" 
                  @gestureBarPress="(event) => shadowGestureBarPress(event, bar)" 
                  @gestureBarPressup="(event) => shadowGestureBarPressup(event, bar)"
                ></task-bar>
              </template>
              <template v-for="(bar, key) in barList.filter(item => item.invalidDateRange)">
                <invalid-task-bar 
                  :key="barList.length + key"
                  :translateX="translateX"
                  :top="bar.translateY"
                  :left="bar.translateX"
                  :startXRectBar="bar.startXRectBar"
                  :dateTextFormat="bar.dateTextFormat"
                  :setShadowShow="bar.setShadowShow"
                  :setInvalidTaskBar="(left, width) => bar.setInvalidTaskBar(bar, left, width)"
                  @gesturePress="(event, type) => shadowGesturePress(event, type, bar)" 
                >
                </invalid-task-bar>
              </template>
            </div>
          </div>
        </main>
        <divider-split @showTable="showTable" :left="tableWidth"></divider-split>
        <time-indicator
          :guestureGrantBodyMove="guestureGrantBodyMove"
          :viewTranslateX="translateX"
          :viewWidth="viewWidth"
          :pxUnitAmp="pxUnitAmp"
          @timeTranslateLocation="locaTimeTranslate"
        ></time-indicator>
        <time-axis-scale-select
          v-model="viewTypeObj"
          :guestureGrantBodyMove="guestureGrantBodyMove"
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
import weekOfYear from "dayjs/plugin/weekOfYear";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import isBetween from "dayjs/plugin/isBetween";
import advancedFormat from "dayjs/plugin/advancedFormat";
import isLeapYear from "dayjs/plugin/isLeapYear";
import weekday from 'dayjs/plugin/weekday';

import { flattenDeep } from '../util/array';
// import weekday from 'dayjs/plugin/weekday';
import TaskBar from './task-bar';
import invalidTaskBar from './invalid-task-bar';
import TaskBarThumb from './task-bar-thumb';
import TimeIndicator from './time-indicator.vue';
import TimeAxisScaleSelect from './time-axis-scale-select.vue';

import Hammer from 'hammerjs';
import TableHeader from './table-header';
import TableBody from './table-body';
import SvgSymbol from './svg-symbol';
import DividerSplit from './divider-split';

import '@/assets/css/icons.css';
import '@/assets/css/cds.css';
import '@/assets/css/gantt.css';


dayjs.extend(weekday)
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);

window.dayjs = dayjs;
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

// const pxUnitAmp = (60 * 60 * 24 / 30) * 1000;
const rowHeight = 28;

// const barList = [
//   { translateY: 42, translateX: 554780, width: 90, label: '绘制表盘设计逻辑' },
//   { translateY: 70, translateX: 554810, width: 120, label: '阅读喜欢的📚' },
//   { translateY: 98, translateX: 554810, width: 120, label: '三体'},
// ];

const dataList = [
  {
    executor: null,
    content: '绘制表盘设计逻辑',
    startDate: '2020-07-01 08:02:02',
    endDate: '2020-07-02',
    collapsed: false,
  },
  {
    executor: null,
    content: '甘特图实现',
    startDate: '2016-12-01',
    endDate: '2016-12-31', 
    collapsed: false,
    children: [
      {
        executor: null,
        content: '绘制表盘设计逻辑',
        startDate: '2020-07-01 08:02:02',
        endDate: '2020-07-02',
        collapsed: false,
      },
      {
        executor: null,
        content: '绘制表盘设计逻辑2',
        startDate: '2020-07-01 08:02:02',
        endDate: '2020-07-02',
        collapsed: false,
        children: [
          {
            executor: null,
            content: '甘特图实现2',
            startDate: null,
            endDate: null, 
            collapsed: false,
          },
          {
            executor: null,
            content: '阅读喜欢的书📚',
            startDate: '2020-08-18',
            endDate: '2020-08-19', 
            collapsed: false,
          },
        ]
      },
    ],
  },
  {
    executor: null,
    content: '甘特图实现2',
    startDate: null,
    endDate: null, 
    collapsed: false,
  },
  {
    executor: null,
    content: '阅读喜欢的书📚',
    startDate: '2020-08-18',
    endDate: '2020-08-19', 
    collapsed: false,
  },
  {
    executor: null,
    content: '三体',
    startDate: '2020-08-20',
    endDate: '2020-08-25', 
    collapsed: false,
  },
  {
    executor: null,
    content: '预订纪念日餐厅',
    startDate: '2020-07-01',
    endDate: '2020-09-06', 
    collapsed: false,
  },
  {
    executor: null,
    content: '绘制表盘设计逻辑"',
    startDate: '2020-08-20',
    endDate: '2020-09-06', 
    collapsed: false
  },
];

const startDate = '2020-07-01';

// 视图日视图、周视图、月视图、季视图、年视图
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
    value: 115200
  }
];

/** 时间定位相关逻辑 */
const locationModule = {
  locaTimeTranslate(translateX) {
    this.translateX = translateX;
  }
};

/** 排版相关逻辑 */
const layout = {
  showTable() {
    if (this.tableWidth > 0) {
      this.tableWidth = 0;
    } else {
      this.tableWidth = 616;
    }

    this.viewWidth = this.gantW - this.tableWidth;
  },
}
const taskEvent = {
  onRowAdd() {},
  onRowAddChild() {},
  onColumnSort() {},
  onTaskCreate() {},

  onRowOpen(task, collapsed) {
    task.collapsed = collapsed;
    this.barList = this.getBarList();
  },
  onAllRowOpen() {
    this.collapsed = !this.collapsed;
    this.barList.forEach((item) => {
      item.task.collapsed = this.collapsed;
    });

    this.barList = this.getBarList();
    this.$forceUpdate();
  },
  onColumnToggle() {}
}

export default {
  name: "tsGantt",
  components: {
    SvgSymbol,
    DividerSplit,
    TaskBar,
    TableHeader,
    TableBody,
    invalidTaskBar,
    TimeIndicator,
    TaskBarThumb,
    TimeAxisScaleSelect
  },
  data() {
    const viewTypeObj = viewTypeList[0];
    const translateX = dayjs(startDate).valueOf() / (viewTypeObj.value * 1000);
    const gantW = this.width; 
    const viewWidth = 704;
    const tableWidth = 616;
    const collapsed = this.dataList.every(bar => bar.collapsed);

    return {
      gantW,
      viewWidth,
      viewHeight: this.height,
      tableWidth,
      viewTypeList, 
      cellUnit: 30,
      wheelDis: 0,
      translateX, 
      viewTypeObj,

      selectionIndicatorTop: 0,
      showSelectionIndicator: false,
      
      // 拖拽阴影相关参数
      gestureKeyPress: false,
      shadowGestSide: 'right',
      shadowGestBarLeft: 0,
      shadowGestBarRight: 0,
      showDragToolShadow: false,
      dragToolShadowX: 0,
      dragToolShadowW: 0,
      isShadowGesturePress: false,

      guestureGrantBodyMove: false,
      // 数据部分
      barList: [],
      collapsed,
    };
  },
  props: {
    width: {
      type: Number,
      default: 1320
    },
    height: {
      type: Number,
      default: 418,
    },
    dataList: {
      type: Array,
      default() {
        return dataList;
      }
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
      const timeamp = this.pxUnitAmp * translateX;
      return timeamp;
    },
    pxUnitAmp() {
      return this.viewTypeObj.value * 1000;
    },
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
    
   
    getBarList() {
      const pxUnitAmp = this.pxUnitAmp;
      const minStamp = 11 * pxUnitAmp;
      const height = 8;
      const baseTop = 14;
      const topStep = 28;
      
      // TODO 后期需优化 增加上周下周等内容
      const dateTextFormat = (startX) => {
        return dayjs(startX * pxUnitAmp).format('YYYY-MM-DD');
      }

      // 获取鼠标位置所在bar大小及位置
      const startXRectBar = (startX) => {
        let date = dayjs(startX * pxUnitAmp);
        const dayRect = () => {
          const stAmp = date.startOf('day');
          const endAmp = date.endOf('day');
          const left = stAmp / pxUnitAmp;
          const width = (endAmp - stAmp) / pxUnitAmp; 
          
          return {
            left, 
            width,
          }
        }
        const weekRect = () => {
          // week 注意周日为每周第一天 ????????
          if (date.$W === 0) {
            date = date.add(-1, 'week');
          }

          const left = date.weekday(1).startOf('day').valueOf() / pxUnitAmp;
          const width = (7 * 24 * 60 * 60 * 1000 - 1000) / pxUnitAmp; 

          return {
            left,
            width,
          }
        }
        const monthRect = () => {
          const stAmp = date.startOf('month').valueOf();
          const endAmp = date.endOf('month').valueOf();
          const left = stAmp / pxUnitAmp;
          const width = (endAmp - stAmp) / pxUnitAmp;

          return {
            left,
            width
          }
        }

        const map = {
          day: dayRect,
          week: weekRect, 
          month: weekRect,
          quarter: monthRect,
          halfYear: monthRect
        };

        return map[this.viewTypeObj.key]()
      };

      // 设置阴影位置
      const setShadowShow = (left, width, isShow) => {
        this.showDragToolShadow = isShow;
        this.shadowGestBarLeft = left;
        this.shadowGestBarRight = left + width;
        this.dragToolShadowX = left;
        this.dragToolShadowW = width;
      }
      
      // 设置任务
      const setInvalidTaskBar = (barInfo, left, width) => {
        barInfo.translateX = left;
        barInfo.width = width;
        barInfo.invalidDateRange = false;

        this.showDragToolShadow = true;
        this.shadowGestBarLeft = left + width;
        this.shadowGestBarRight = 0; 

        this.dragToolShadowX = left;
        this.dragToolShadowW = width;

        barInfo.stepGesture = 'moving';
      }
      /**
       * 根据选中行高度 显示对应条状工具条
       */
      const getHovered = (top, selectionIndicatorTop) => {
        let baseTop = top - (top % rowHeight);
        let isShow = (selectionIndicatorTop >= baseTop && selectionIndicatorTop <= baseTop + rowHeight);

        return isShow;
      }

      const getDataList = () => {
        return flattenDeep(this.dataList) 
      };

      const dataList = getDataList();

      return dataList.map((item, index) => {
        let startAmp = dayjs(item.startDate || 0).valueOf();
        let endAmp = dayjs(item.endDate || 0).valueOf();

        // 开始结束日期相同默认一天
        if (Math.abs(endAmp - startAmp) < minStamp) {
          startAmp = dayjs(item.startDate || 0).valueOf();
          endAmp = dayjs(item.endDate || 0).add(minStamp, 'millisecond').valueOf();
        }

        let width = (endAmp - startAmp ) / pxUnitAmp;
        let translateX = startAmp / pxUnitAmp;
        let translateY = baseTop + index * topStep;

        return {
          task: item,
          translateX,
          translateY,
          width,
          height,
          label: item.content,
          stepGesture: 'end', // start(开始）、moving(移动)、end(结束)
          invalidDateRange: !item.endDate || !item.startDate,  // 是否为有效时间区间
          dateTextFormat,  //TODO 日期格式化函数 后期根据当前时间格式化为上周下周,
          startXRectBar,   // 鼠标位置 获取创建bar位置及大小
          setShadowShow,
          setInvalidTaskBar,
          getHovered,
          _collapsed: item.collapsed,
          _depth: item._depth,
          _childrenCount: !item.children ? 0 : item.children.length,
        }
      })
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

      // 移动空隙参数
      const space = 5;
      const { translateX, width } = barInfo;

      const getMoveStep = (isLeft, isShrink, barInfo) => {
        const { translateX, width } = barInfo;
        const startX = isLeft ? translateX : translateX + width;
        const startDate = dayjs(startX * this.pxUnitAmp);

        const getDayStep = () => {
          let endDate = startDate.startOf('day');
          if ((isLeft && isShrink) || (!isLeft && !isShrink)) {
            endDate = endDate.endOf('day');
          }

          let step = 24 * 60 * 60 * 1000 / this.pxUnitAmp;
          let diff = Math.abs(endDate.valueOf() / this.pxUnitAmp - startX)
          if (diff > space) {
            step = diff;
          }

          return step;
        }
        const getWeekStep = () => {
          let endDate = startDate.weekday(1).hour(0).minute(0).second(0);
          if ((isLeft && isShrink) || (!isLeft && !isShrink)) {
            endDate = endDate.weekday(7).hour(23).minute(59).second(59);
          }
          
          let step = 7 * 24 * 60 * 60 * 1000 / this.pxUnitAmp;
          let diff = Math.abs(endDate.valueOf() / this.pxUnitAmp - startX);
          if (diff > space) {
            step = diff;
          }

          return step;
        }
        const getMonthStep = () => {
          let month = -1;
          let endDate2 = startDate.startOf('month');
          // 向右侧移动
          if ((isLeft && isShrink) || (!isLeft && !isShrink)) {
            month = 1;
            endDate2 = startDate.endOf('month');
          }

          const endDate = startDate.add(month, 'month');
          let step = Math.abs(endDate.valueOf() / this.pxUnitAmp - startX);

          const diff = Math.abs(endDate2.valueOf() / this.pxUnitAmp - startX);
          if (diff > 5) {
            step = diff;
          }

          return step;
        }

        const map = {
          day() {
            return getDayStep();
          },
          week() {
            return getWeekStep();
          },
          month() {
            return getWeekStep();
          },
          quarter() {
            return getMonthStep();
          },
          halfYear() {
            return getMonthStep();
          }
        }
        
        const step = map[this.viewTypeObj.key]();
        return step;
      }      

      let barLeft = (type === 'left') ? translateX : translateX + width;
      this.dragToolShadowX = translateX;
      this.dragToolShadowW = width;
      this.shadowGestBarLeft = barLeft;
      this.isPointerPress = true;

      const sideType = type;
      const isLeft = sideType === 'left';
      // const step = getMoveStep(isLeft);
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

        // 每次step可能不一样， 动态计算 如：每月可能30或31天
        const step = getMoveStep(isLeft, isShrink, barInfo);

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
          barInfo.stepGesture = 'moving';
        });
      }
      /**
       * 跟随鼠标拖动扩大阴影
       */
      const moveExpandStep = (moveDis, step, pointerX) => {

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
          barInfo.stepGesture = 'moving';
        })
      };

      const panStart = () => {
        barInfo.stepGesture = 'start';
      };

      const panMove = (event) => {
        setBarShadowPosition(event)
      };

      const panEnd = () => {
        this.isPointerPress = false;
        this.showDragToolShadow = false;

        this.chartHammer.off('panstart', panStart);
        this.chartHammer.off('panmove', panMove);
        this.chartHammer.off('panend', panEnd);
        this.shadowGestBarLeft = 0;
        this.shadowGestBarRight = 0;
        barInfo.stepGesture = 'end';
      }

      this.chartHammer.on('panstart', panStart);
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
          barInfo.stepGesture = 'moving';
        }
      };

      layoutShadow(width, translateX, barLeft, barRight);

      const panStart = (event) => {
        startX = event.center.x;
        barInfo.stepGesture = 'start';
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
        barInfo.stepGesture = 'end';
      }
      
      this.chartHammer.on('panstart', panStart);
      this.chartHammer.on('panmove', panMove);
      this.chartHammer.on('panend', panEnd);
    },
    shadowGestureBarPressup(event, barInfo) {
      this.gestureKeyPress = false;
      barInfo.stepGesture = 'end';
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

      aTick(() => this.translateX += event.deltaX);

      this._wheelTimer = setTimeout(() => {
        this.guestureGrantBodyMove = false;
      }, 100);
    },

    getDurationAmp() {
      const clientWidth = this.viewWidth;
      return this.pxUnitAmp * clientWidth; 
    },
    getMajorList() {
      const majorFormatMap = {
        'day': 'YYYY年 MM月',
        'week': 'YYYY年 MM月',
        'month': 'YYYY年',
        'quarter': 'YYYY年',
        'halfYear': 'YYYY年',
      };

      const translateAmp = this.translateAmp;
      const endAmp = translateAmp + this.getDurationAmp();
      const key = this.viewTypeObj.key;
      const format = majorFormatMap[key];

      const getNextDate = (start) => {
        if (key === 'day' || key === 'week') {
          return start.add(1, 'month');
        } else {
          return start.add(1, 'year');
        }
      }

      const setStart = (datejs) => {
        if (key === 'day' || key === 'week') {
          return datejs.startOf('month');
        } else {
          return datejs.startOf('year');
        }
      }

      const setEnd = (start) => {
        if (key === 'day' || key === 'week') {
          return start.endOf('month');
        } else {
          return start.endOf('year');
        }
      }
      
      // 初始化当前时间
      let curDate = dayjs(translateAmp);
      let dateMap = new Map(); 

      // 对可视区域内的时间进行迭代
      while(curDate.isBetween(translateAmp - 1, endAmp + 1)) {
        let majorKey = curDate.format(format);
        let start = curDate;
        let end = setEnd(start);

        if (dateMap.size !== 0 ) {
          start = setStart(curDate);
        }

        if (!dateMap.has(majorKey)) {
          dateMap.set(majorKey, {
            label: majorKey,
            startDate: start,
            endDate: end 
          });
        }

        // 获取下次迭代的时间
        start = setStart(curDate);
        curDate = getNextDate(start);
      }

      return this.majorAmp2Px([ ...dateMap.values() ]);
    },
    getMinorList() {
      const minorFormatMap = {
        'day': 'YYYY-MM-D',
        'week': 'YYYY-w周',  // format W 不知道为什么不支持周，文档却说支持,
        'month': 'YYYY-MM月',
        'quarter': 'YYYY-第Q季',
        'halfYear': 'YYYY-',
      };
      const fstHalfYear = [0, 1, 2, 3, 4, 5];

      const startAmp = this.translateAmp;
      const endAmp = startAmp + this.getDurationAmp();
      const format = minorFormatMap[this.viewTypeObj.key];

      const getNextDate = (start) => {
        const map = {
          day() {
            return start.add(1, 'day');
          },
          week() {
            return start.add(1, 'week');
          },
          month() {
            return start.add(1, 'month');
          },
          quarter() {
            return start.add(1, 'quarter');
          },
          halfYear() {
            return start.add(6, 'month');
          }
        }

        return (map[this.viewTypeObj.key])();
      }
      const setStart = (datejs) => {
        const map = {
          day() {
            return datejs.startOf('day');
          },
          week() {
            return datejs.weekday(1).hour(0).minute(0).second(0);
          },
          month() {
            return datejs.startOf('month');
          },
          quarter() {
            return datejs.startOf('quarter');
          },
          halfYear() {
            if (fstHalfYear.includes(datejs.month())) { 
              return datejs.month(0).startOf('month');
            } else {
              return datejs.month(6).startOf('month');
            }
          }
        }

        return (map[this.viewTypeObj.key])();
      }
      const setEnd = (start) => {
        const map = {
          day() {
            return start.endOf('day');
          },
          week() {
            return start.weekday(7).hour(23).minute(59).second(59);
          },
          month() {
            return start.endOf('month');
          },
          quarter() {
            return start.endOf('quarter');
          },
          halfYear() {
            if (fstHalfYear.includes(start.month())) { 
              return start.month(5).endOf('month');
            } else {
              return start.month(11).endOf('month');
            }
          }
        }

        return (map[this.viewTypeObj.key])();
      }
      const getMinorKey = (datejs) => {
        if (this.viewTypeObj.key === 'halfYear') {
          return datejs.format(format) + (fstHalfYear.includes(datejs.month()) ? '上半年' : '下半年');
        }

        return datejs.format(format);
      } 

      // 初始化当前时间
      let curDate = dayjs(startAmp);
      let dateMap = new Map(); 
      
      while(curDate.isBetween(startAmp - 1, endAmp + 1)) {
        let minorKey = getMinorKey(curDate);

        let start = setStart(curDate);
        let end = setEnd(start);
        if (!dateMap.has(minorKey)) {
          dateMap.set(minorKey, {
            label: minorKey.split('-').pop(),
            startDate: start,
            endDate: end,
            key: end 
          })
        }

        curDate = getNextDate(start);
      }

      return this.minorAmp2Px([ ...dateMap.values() ]);
    },
    majorAmp2Px(ampList) {
      const pxUnitAmp = this.pxUnitAmp;
      // for(let i = 0)
      const list = ampList.map(item => {
        const startDate = item.startDate;
        const endDate = item.endDate;
        const label = item.label;

        let left = (startDate.valueOf() / pxUnitAmp); 
        let width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;

        return {
          label,
          left,
          width
        }
      });
      
      return list;
    },
    minorAmp2Px(ampList) {
      const pxUnitAmp = this.pxUnitAmp;
      const curDate = dayjs().startOf('day');
      let highlightW = 4;
      let highlightX = curDate.valueOf() / pxUnitAmp;
      if(this.viewTypeObj.key === 'day') {
        highlightW = 8;
        highlightX = highlightX + 11;
      }

      const list = ampList.map(item => {
        let startDate = item.startDate.hour(0).minute(0).second(0);
        let endDate = item.endDate.hour(23).minute(59).second(59);

        let label = item.label;
        let left = Math.ceil(startDate.valueOf() / pxUnitAmp);
        let width = Math.ceil((endDate.valueOf() - startDate.valueOf()) / pxUnitAmp);

        let isWeek = false;
        if (this.viewTypeObj.key === 'day') {
          isWeek = [0, 6].includes(startDate.$W);
        }

        let isHighlight = false;
        let curSt = curDate.valueOf();
        let startSt = startDate.valueOf();
        let endSt = endDate.valueOf();
        if(curSt >= startSt && curSt <= endSt) {
          isHighlight = true;
        } 

        return {
          label,
          left,
          width,
          isWeek,
          isHighlight,
          highlightW,
          highlightX,
        }
      });

      return list;
    },
    ...locationModule,
    ...layout,
    ...taskEvent,
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
        aTick(() => this.translateX = translateX - event.deltaX);
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
    viewTypeObj() {
      this.translateX = dayjs(startDate).valueOf() / (this.viewTypeObj.value * 1000);
      this.barList = this.getBarList();
    }
  },
  created() {
    this.deOnMouseMove = debounce(this.onMouseMove, 5)
  },
  mounted() {
    this.barList = this.getBarList();

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
