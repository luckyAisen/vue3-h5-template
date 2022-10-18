<template>
  <van-config-provider :theme="theme" :style="containerStyles">
    <div class="van-safe-area-top van-safe-area-bottom app-container">
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <div v-if="hasTab" class="layout-footer">
        <tab-bar :option="tabberOption" @tabbar-change="handleChange" />
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts">
export default {
  name: "LayoutIndex",
};
</script>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import type { TabbarItemProps } from "vant";
import { computed, unref } from "vue";
import { RouterView, useRoute } from "vue-router";

import { useAppStore } from "@/stores/modules/app";

import TabBar, { type Props as TabberProps } from "./components/TabBar.vue";

const route = useRoute();

const appStore = useAppStore();

appStore.watchTheme();

const { theme } = storeToRefs(appStore);

const hasTab = computed(() => route.meta.showTab);

const containerStyles = computed(() => {
  const styles = {};
  if (unref(hasTab)) {
    styles["padding-bottom"] = "var(--van-tabbar-height)";
  }

  return styles;
});

const tabberOption: TabberProps["option"] = [
  {
    title: "文档",
    icon: "home-o",
    to: {
      name: "Home",
    },
  },
  {
    title: "主题",
    icon: "setting-o",
    to: {
      name: "Theme",
    },
  },
];

const handleChange = (v: TabbarItemProps["name"]) => {
  console.log("tabbar name:", v);
};
</script>

<style lang="less" scoped>
@import "@/styles/github-markdown-light.less";
@import "@/styles/github-markdown-dark.less";

.markdown-body {
  background-color: var(--app-background) !important;
  padding: 32px;
  word-break: break-all;
  font-size: 32px !important;
  line-height: 1.5;
  word-wrap: break-word;

  :deep a {
    color: var(--app-primary-color);
  }

  :deep ol,
  :deep ul {
    list-style: disc;
    padding-left: 32px;
  }
}
</style>
