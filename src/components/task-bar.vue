<template>
  <div
    v-on:click.stop
    class="task-bar__2VdE"
    :class="invalidDateRange ? 'invalid-date-range__sobT': 'overdue__1gSA'"
    :style="`transform: translate(${translateX}px, ${translateY}px);`"
  >
    <div>
      <template v-if="showDragBar">
        <div v-if="stepGesture !== 'moving'" class="dependency-handle__1Idl" style="left: -34px; width: 12px;">
          <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <circle class="outer__3o8A" stroke="#87D2FF" fill="#FFFFFF" cx="6" cy="6" r="5.5">
              </circle>
              <circle class="inner__7vSG" fill="#87D2FF" cx="6" cy="6" r="2"></circle>
            </g>
          </svg>
        </div>
        <div v-if="stepGesture !== 'moving'" class="dependency-handle__1Idl right__1vCc" :style="`left: ${width + 28}px; width: 12px;`">
          <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <circle class="outer__3o8A" stroke="#87D2FF" fill="#FFFFFF" cx="6" cy="6" r="5.5"></circle>
              <circle class="inner__7vSG" fill="#87D2FF" cx="6" cy="6" r="2"></circle>
            </g>
          </svg>
        </div>
        <div ref="leftHander" class="resize-handle__3s57 left__2J1_" style="left: -14px;"></div>
        <div ref="rightHander" class="resize-handle__3s57 right__1LvQ" :style="`left: ${width + 2}px;`"></div>
        <div class="resize-bg__2eMo compact__3dEj" :style="`width: ${width + 30 }px; left: -14px;`"></div>
      </template>
      <div ref="barEl" class="bar__BPW0" style="">
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1" 
          :width="width + 1" 
          :height="height + 1" 
          :viewBox="`0 0 ${width + 1} ${height + 1}`">
          <path :fill="themeColor[0]" :stroke="themeColor[1]" :d="`
              M${width - 2},0.5
              l-${width - 5},0
              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934
              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066
              l0,5.3
            
              c0.03256,0.38255 0.20896,0.724 0.47457,0.97045
              c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013
              l4,0

              l${width - 12},0
            
              l4,0
              c0.41421,0 0.78921,-0.16789 1.06066,-0.43934
              c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066
          
              l0,-5.3
              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045
              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z
            `" 
            class="default__3VGg"></path>
        </svg>
      </div>
    </div>
  <div v-if="stepGesture !== 'moving'" class="label__fdzT icon" :style="`left:${width + 45}px;`">{{label}}</div>
  <div v-if="stepGesture === 'moving'" class="date-text__3DHM" :style="`left: ${width + 16}px;`">{{dateTextFormat(translateX + width)}}</div>
  <div v-if="stepGesture === 'moving'" class="date-text__3DHM" :style="`right: ${width + 16}px;`">{{dateTextFormat(translateX)}}</div>
  </div>
</template>
<script>
import Hammer from 'hammerjs';
import dayjs from 'dayjs';

export default {
  name: 'task-bar',
  props: {
    label: {
      type: String,
      default: ''
    },
    selectTop: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 121 
    },
    height: {
      type: Number,
      default: 8
    },
    translateX: {
      type: Number,
      default: 554810
    },
    showDragBar: {
      type: Boolean,
      default: false
    },
    translateY: {
      type: Number,
      default: 88
    },
    stepGesture: {
      type: String,
      default: 'end',
    },
    dateTextFormat: {
      type: Function,
      default: () => '',
    },
    invalidDateRange: {
      type: Boolean,
      default: false,
    },
    resizeHander: {
      type: Function,
      default: () => {},
    }
  },
  data() {
    return {
      // showDragBar: false
    }
  },
  watch: {
    showDragBar(val) {
      if (val) {
        this.$nextTick(() => this.initGesture());
      } else {
        this.destroyGesture && this.destroyGesture();
        this.destroyGesture = null;
      }
    }
  },
  computed: {
    /**
     * 获取颜色
     */
    themeColor() {
      if (this.translateX + this.width >= dayjs().valueOf() / this.$parent.pxUnitAmp) {
        return ['#95DDFF', '#64C7FE'];
      }

      return ['#FD998F', '#F96B5D'];
    }
  },
  methods: {
    /**
     * 初始化箭头拖拽功能
     */
    initGesture() {
      const leftHander = this.$refs.leftHander;
      const rightHander = this.$refs.rightHander;

      const leftHam = new Hammer(leftHander);
      const rightHam = new Hammer(rightHander);
      // let baseX = 0;
      const press = (event, type) => {
        this.$emit('gesturePress', event, type);
      }

      const pressup = (event, type) => {
        this.$emit('gesturePressup', event, type);
      }

      leftHam.on('press', (event) => press(event, 'left'));
      leftHam.on('pressup', (event) => pressup(event, 'left'));

      rightHam.on('press', (event) => press(event, 'right'));
      rightHam.on('pressup', (event) => pressup(event, 'right'));

      this.destroyGesture = () => {
        leftHam.destroy();
        rightHam.destroy();
      }
    },
    /**
     * 初始化条状图初始化
     */
    initGestureBar() {
      const barEl = this.$refs.barEl;
      const barHam = new Hammer(barEl);

      const press = (event) => {
        this.$emit('gestureBarPress', event);
      }

      const pressup = (event) => {
        this.$emit('gestureBarPressup', event);
      }

      barHam.on('press', press);
      barHam.on('pressup', pressup);
      this.destroyGestureBar = () => {
        barHam.destroy();
      }
    },
  },
  beforeDestroy() {
    this.destroyGestureBar();
    this.destroyGesture && this.destroyGesture();
  },
  mounted() {
    this.initGestureBar();
  },
}
</script>
<style>

</style>