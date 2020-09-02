<template>
  <div class="gantt-app-view" style="height: 100%;width: 100%;">
    <div class="container__1PWP">
      <div ref="ganttBody" id="gantt-body" class="body__3LBc gantt__3Xim" :width="viewWidth" :height="viewHeight">
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
          <div class="chart__3nGi" :style="`left:0px;height:${svgViewH}px;width:${viewWidth}px;`">
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
            </svg>
          </div>
        </main>
      </div>
    </div>  
  </div>
</template>

<script>
import dayjs from "dayjs"; // 导入日期js
// const uuidv4 = require("uuid/v4"); // 导入uuid生成插件
import isBetween from "dayjs/plugin/isBetween";
// import weekday from 'dayjs/plugin/weekday';

import '@/assets/css/gantt.css';

import Hammer from 'hammerjs';

dayjs.extend(isBetween);
// dayjs.extend(weekday);

import {
  // deepClone,
  // flattenDeep,
  // getMin,
  // getMax,
  // flattenDeepParents,
  // regDeepParents
} from "@/util/array.js"; // 导入数组操作函数

const pxUnitAmp = (60 * 60 * 24 / 30) * 1000;

export default {
  name: "tsGantt",
  data() {
    return {
      viewWidth: this.width,
      viewHeight: this.height,
      cellUnit: 30,
      wheelDis: 0,
      translateX: 552410,
      format: 'YYYY年 MM月'
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
    }
  },
  methods: {
    wheel(event) {
      this.translateX += event.deltaX;
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
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    const timeAxisEl = this.$refs.timeAxisRender;
    const ha = new Hammer(timeAxisEl);
  
    let baseX = 0;
    const panStart = () => {
      baseX = this.translateX;
    }

    const panMove = (e) => {
      this.translateX = baseX - e.deltaX;
    }

    const panEnd = (e) => {
      this.translateX = baseX - e.deltaX;
      baseX = 0;
    }

    // ha.on('panstart', panStart);
    // ha.on('panmove', panMove);
    // ha.on('panend', panEnd);

    this.ha = ha;
  },
  beforeDestroy() {
    this.ha.destroy()
    // this.$af.destroy();
  }
};
</script>
<style>
/* @import url('./gantt.css'); */
</style>
