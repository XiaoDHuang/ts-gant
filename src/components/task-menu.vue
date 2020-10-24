<template>
  <div class="menu-trigger__2YZ4" :class="{opened: visible}" @keydown.enter="() => {}">
    <a-dropdown 
      ref="dropdown" 
      v-model="visible" 
      :trigger="['click']"
      :overlayStyle="{ 'z-index': 1300 }"
    >
      <span class="icon__YImk icon dls-icon icon-more" data-role="icon"></span>
      <MenuWrap slot="overlay">
        <div v-if="visible" class="dropdown__u1N0 slide-enter-done" data-role="popup" x-placement="top-start">
          <div class="dropdown-container__1UDy">
            <div class="popup-menu__3OeO popup__2xg9">
              <div class="popup-menu-header__1u4j popup-head__291F">
                任务菜单
                <div>
                  <span @click="close" class="icon__YImk icon dls-icon icon-remove popup-menu-close__102T" data-role="icon"></span>
                </div>
              </div>
              <div class="separator-full__2UhN" data-role="separator">

              </div>
              <div class="popup-menu-view__fI0k popup-body__37yU">
                <ul v-if="!isDelete" class="menu__21sM main-view__KEvn" data-role="menu">
                  <li class="menu-item__dkeQ" data-role="menu-item">
                    <span class="text">点击进入任务详情</span>
                  </li>
                  <li 
                    v-if="barInfo._index > 0" 
                    @click="moveRightTask"
                    class="menu-item__dkeQ" 
                    data-role="menu-item">
                    <span class="text">向右缩进一级</span>
                    <span class="hotkey">
                      <b>tab</b>
                    </span>
                  </li>
                  <li 
                    v-if="barInfo._depth > 0" 
                    @click="moveLeftTask"
                    class="menu-item__dkeQ" 
                    data-role="menu-item"
                  >
                    <span class="text">向左提升一级</span>
                    <span class="hotkey"><b>shift</b>+<b>tab</b></span>
                  </li>
                  <li 
                    v-if="barInfo._depth > 0" 
                    class="menu-item__dkeQ" 
                    data-role="menu-item"
                    @click="insertTask"
                  >
                    <span class="text">插入新任务</span>
                    <span class="hotkey"><b>enter</b></span>
                  </li>
                  <li 
                    @click="inserChildTask"
                    class="menu-item__dkeQ" 
                    data-role="menu-item"
                  >
                    <span class="text">插入子任务</span>
                  </li>
                  <a class="popup-menu-link__wpP-">
                    <li class="menu-item__dkeQ" data-role="menu-item">
                      <span class="text">切换任务类型</span>
                    </li>
                  </a>
                  <li class="separator__3vM5" data-role="separator"></li>
                  <a class="popup-menu-link__wpP-">
                    <li @click="deleteTask" class="menu-item__dkeQ danger__2yG_" data-role="menu-item">
                      <span class="text">移到回收站</span>
                    </li>
                  </a>
                </ul>
                <div v-else class="archive__3_58">
                  <p>你确定要把 1 个任务移到回收站吗？</p>
                  <button
                    @click="confirmDelete"
                    class="btn-type-primary__2LYT btn-danger__1BqI btn-block__1VgC" 
                    type="button"
                    data-role="button"
                  >
                    <span>移到回收站</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MenuWrap>
    </a-dropdown>
  </div>
</template>
<script>
import aDropdown from 'ant-design-vue/lib/dropdown';
import Vue from 'vue';
import 'ant-design-vue/lib/dropdown/style/css';

const MenuMask = {
  props: {
    visible: {
      type: Boolean,
      default: false,
    }, 
  },
  render(h) {
    return h("div", {
      ref:"El",
      directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.visible,
            expression: "visible"
          }
      ],
      staticClass: "mask__1-FY"
    });
  },
};
let MenuMaskComponent = null;

const MenuWrap = {
  render(h) {
    return h('div', this.$slots.default);
  }
}

export default {
  name: 'task-menu',
  components: {
    aDropdown,
    MenuWrap,
  },
  props: {
    barInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      isDelete: false,
    }
  },
  watch: {
    visible(val) {
      MenuMaskComponent.visible = val;
      if (!val) {
        this.isDelete = false;
      }
    }
  },
  methods: {
    close() {
      this.visible = false;
    },
    deleteTask() {
      this.isDelete = true;
    },
    insertTask() {
      this.$emit('insertTask');
      this.visible = false;
    },
    inserChildTask() {
      this.$emit('inserChildTask', this.barInfo);
      this.visible = false;
    },
    /**
     * 任务向右边移动
     * barInfo 任务条数据
     */
    moveRightTask() {
      // 必须有上一个兄弟节点
      let index = this.barInfo._index;
      if (index <= 0) return;

      this.$emit('moveRightTask', this.barInfo);
      this.visible = false;
    },
    /**
     * 任务向左移动
     * barInfo 任务条数据
     */
    moveLeftTask() {
      let depth = this.barInfo._depth;
      if (depth <= 0) return;

      this.$emit('moveLeftTask', this.barInfo);
      this.visible = false;
    },
    confirmDelete() {
      this.$emit('deleteTask', () => {
        this.visible = false;
        this.isDelete = false;
        MenuMaskComponent.visible = false;
      });
    }
  },
  mounted() {
    if (!MenuMaskComponent) {
      const MenuMaskConstuctor = Vue.extend(MenuMask);
      MenuMaskComponent = new MenuMaskConstuctor();
      document.body.appendChild(MenuMaskComponent.$mount().$el);
    }
  },
}
</script>