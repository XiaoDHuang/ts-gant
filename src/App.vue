<template>
  <div style="width:100%;height:100vh;display:flex;flex-flow:column;overflow:hidden;">
    <tsGantt 
      @onTaskCreate="onTaskCreate"
      @onTaskChangeContent="onTaskChangeContent"
      @onTaskDelete="onTaskDelete"
      @onTaskIndent="onTaskIndent"
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

export default {
  name: "app",
  data() {
    return {
      data: [
        {
          id: "1",
          pid: "0",
          name: "旅行",
          startDate: "2019-09-07",
          realStartDate: "2019-09-10",
          endDate: "2019-10-31",
          realEndDate: "2019-10-19",
          children: [
            {
              id: "1-1",
              pid: "1",
              name: "云台之间",
              startDate: "2019-09-10",
              endDate: "2019-09-13",
              children: [
                {
                  id: "1-1-1",
                  pid: "1-1",
                  name: "日落云巅",
                  startDate: "2019-09-10",
                  endDate: "2019-09-13"
                }
              ]
            },
            {
              id: "1-2",
              pid: "1",
              name: "天空之镜",
              startDate: "2019-09-17",
              endDate: "2019-09-22"
            },
            {
              id: "1-3",
              name: "蓬莱之岛",
              pid: "1",
              startDate: "2019-09-25",
              endDate: "2019-09-30"
            },
            {
              id: "1-4",
              pid: "1",
              name: "西塘之南",
              startDate: "2019-10-03",
              endDate: "2019-10-07"
            },
            {
              pid: "1",
              id: "1-5",
              name: "凤凰之缘",
              startDate: "2019-10-11",
              endDate: "2019-10-19"
            }
          ]
        },
        {
          id: "2",
          name: "租房子",
          startDate: "2019-09-20",
          endDate: "2019-10-31"
        }
      ], // 数据
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
