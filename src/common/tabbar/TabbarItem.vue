<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon">
        <img src="~/assets/img/tabbar/ic_tab_home_unselected.png" alt />
      </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">
        <img src="~assets/img/tabbar/ic_tab_home_selected.png" alt />
      </slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text">
        <div>首页</div>
        <!-- :style="color:{activeColor}" -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
    return {
      // isActive: true
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    },
    defaultColor: {
      type: String,
      default: "#666666"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor }
        : { color: this.defaultColor };
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  /* 均等平分 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去掉图片底部的间距 */
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: #ff0000;
} */
</style>
