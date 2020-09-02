import tsGantt from "./gantt-chart-drag.vue";

tsGantt.install = function(Vue) {
  Vue.component(tsGantt.name, tsGantt);
}; 
export default tsGantt;
