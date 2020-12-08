<template>
  <div style="width:100%;height:100vh;">
    <tsGantt
      :data="data"
      :columns="columns" 
      @onTaskCreate="onTaskCreate"
      @onTaskChangeContent="onTaskChangeContent"
      @onTaskDelete="onTaskDelete"
      @onTaskIndent="onTaskIndent"
      @onTaskTimeChange="onTaskTimeChange"
      @onDragSort="onDragSort"
    ></tsGantt>
  </div>
</template>

<script>
import TsGantt from "@/components";

/** 时间列表 **/

/**
 * onRowCreate // 任务创建
 * onRowDelete // 任务删除
 * onRowIndent  // 任务缩进
 * onRowChangeName  // 任务修改
 */

const dataList = [
  {
    executor: null,
    content: '绘制表盘设计逻辑',
    startDate: '2020-07-01 08:02:02',
    endDate: '2020-07-02 18:00:00',
    collapsed: false,
    children: [],
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
        endDate: '2020-07-02 18:00:00',
        collapsed: false,
        children: [],
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
    children: [],
  },
  {
    executor: null,
    content: '阅读喜欢的书📚',
    startDate: '2020-08-18',
    endDate: '2020-08-19', 
    collapsed: false,
    children: [],
  },
  {
    executor: null,
    content: '三体',
    startDate: '2020-10-18',
    endDate: '2020-10-19', 
    collapsed: false,
    children: [],
  },
  {
    executor: null,
    content: '预订纪念日餐厅',
    startDate: '2020-07-01',
    endDate: '2020-09-06', 
    collapsed: false,
    children: [],
  },
  {
    executor: null,
    content: '绘制表盘设计逻辑"',
    startDate: '2020-08-20',
    endDate: '2020-09-06', 
    collapsed: false,
    children: [],
  },
];

const columns = [
  {
    width: 260,
    minWidth: 210,
    name: 'content',
    visible: true,
    keepVisible: true,
    sortable: true,
  },
  {
    width: 100,
    minWidth: 52,
    name: 'executor',
    visible: true,
    keepVisible: false,
    sortable: true,
  },
  {
    width: 120,
    minWidth: 70,
    name: 'endDate',
    visible: true,
    keepVisible: false,
    sortable: true,
  },
  {
    width: 100,
    minWidth: 70,
    name: 'fs',
    visible: true,
    keepVisible: false,
    sortable: false,
  },
];
export default {
  name: "app",
  data() {
    return {
      data: dataList,
      columns,
    };
  },
  methods: {
    /**
     * 创建任务 
     * parent: 父任务
     * task: 当前任务
     */
    onTaskCreate(parent, task) {
      console.log(parent, task, 'onTaskCreate>>>>>>>>>>>>');
    },
    /**
     * 任务修改
     * task: 任务数据
     * content: 修改的内容
     * oldContent: 
     */
    onTaskChangeContent(task, content, oldContent) {
      console.log(parent, content, oldContent, 'onTaskChangeContent>>>>>>>>>');
    },
    /**
     * 删除任务
     * task 删除当前任务
     */
    onTaskDelete(task) {
      console.log(task, 'onTaskDelete >>>>>>>>>>>>>>>>>');
    },
    /**
     * 任务左右移动
     * parent 父级任务
     * task 当前任务
     */
    onTaskIndent(parent, task) {
      console.log(parent, task, 'onTaskIndent>>>>>>>>>>>>');
    },
    /**
     * 时间发生变更
     */
    onTaskTimeChange(task, startDate, endDate) {
      console.log(task, startDate, endDate, 'onTaskTimeChange>>>>>>>>>');
    },
    /**
     * 任务层级上下拖拽逻辑
     */
    onDragSort(preParent, parentTask, preIndex, index, handleTask) {
      console.log(preParent, parentTask, preIndex, index, handleTask, 'onDragSort>>>>>>');
    }
  },
  components: {
    TsGantt,
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 25px 0;
}

html, body {
}
</style>
