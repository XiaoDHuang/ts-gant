<template>
  <div class="time-axis-scale-select__3fTI" v-clickoutside="hide">
    <div class="trigger__3NoY" @click="show">
      <div class="text__2O4S">{{value.label}}视图</div>
      <span class="icon next-icon icon-triangle-down-s next-medium"></span>
    </div>
    <div class="shadow__3n0C" :class="{scrolling__2c3k: guestureGrantBodyMove}"></div>
    <div v-if="!isHide" class="next-overlay-wrapper opened">
      <div class="next-loading next-loading-inline next-overlay-inner next-select-loading next-select-single-menu"
        aria-hidden="false" :style="`position: absolute; right: 15px; top: ${top}px;`">
        <div class="next-loading-wrap">
          <ul role="listbox" class="next-menu next-ver next-select-menu" aria-multiselectable="false">
            <li 
              v-for="(item, key) in viewTypeList"
              :key="key"
              role="option"
              tabindex="-1"
              @click="select(item)"
              class="next-menu-item next-selected next-select-menu-item"
            >
              <div class="next-menu-item-inner">
                <i :class="{'next-menu-icon-selected': isSelected(item.key)}" class="next-icon next-icon-tick next-medium">
                  <svg v-if="isSelected(item.key)" id="at-tick" viewBox="0 0 1024 1024">
                    <path 
                      d="M413.7472 768a29.5936 29.5936 0 0 1-21.6576-9.472l-229.5296-241.152a33.3824 33.3824 0 0 1 0-45.5168 29.696 29.696 0 0 1 43.4176 0l207.7696 218.368 404.2752-424.7552a29.5936 29.5936 0 0 1 43.4176 0 33.3824 33.3824 0 0 1 0 45.568l-425.984 447.488A29.5936 29.5936 0 0 1 413.696 768">
                    </path>
                  </svg>
                </i>
                <span class="next-menu-item-text" aria-selected="true">{{item.label}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Clickoutside from '../util/clickoutside';
export default {
  name: 'time-axis-scale-select',
  props: {
    viewWidth: {
      type: Number,
      default: 100
    },
    viewTypeList: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultValue: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    },
    guestureGrantBodyMove: {
      type: Boolean,
      default: false,
    }
  },
  directives: { Clickoutside },
  data() {
    return {
      isHide: true 
    }
  },
  computed: {
    left() {
      return this.viewWidth - 92;
    },
    top() {
      return 60;
    }
  },
  methods: {
    hide() {
      this.isHide = true;
    },
    show() {
      this.isHide = !this.isHide;
    },
    isSelected(key) {
      return this.value.key === key;
    },
    select(item) {
      this.isHide = true;
      this.$emit('input', item);
      this.$emit('change', item);
    }
  }
}
</script>