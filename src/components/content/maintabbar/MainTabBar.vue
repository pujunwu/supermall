<template>
  <Tabbar>
    <TabbarItem path="/home" activeColor="#0000ff" defaultColor="#333333">
      <img slot="item-icon" src="~assets/img/tabbar/ic_tab_home_unselected.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_home_selected.png" alt />
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="#0000ff" defaultColor="#333333">
      <img slot="item-icon" src="~assets/img/tabbar/ic_tab_message_unselected.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_message_selected.png" alt />
      <div slot="item-text">消息</div>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="#0000ff" defaultColor="#333333">
      <img slot="item-icon" src="~assets/img/tabbar/ic_tab_friend_unselected.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_friend_selected.png" alt />
      <div slot="item-text">朋友</div>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="#0000ff" defaultColor="#333333">
      <img slot="item-icon" src="~assets/img/tabbar/ic_tab_mine_unselected.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_mine_selected.png" alt />
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>

import Tabbar from "common/tabbar/Tabbar";
import TabbarItem from "common/tabbar/TabbarItem";

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style scoped>

</style>