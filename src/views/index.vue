<template>
  <div class="doc-theme-container">
    <van-cell center title="切换深色模式">
      <template #right-icon>
        <van-switch v-model="darkMode" @change="changeTheme" />
      </template>
    </van-cell>

    <p>
      vant 4 开始支持动态主题切换和深色模式，具体使用请查看 vant 4
      <a
        href="https://youzan.github.io/vant/v4/#/zh-CN/config-provider"
        target="_blank"
      >
        官网文档
      </a>
    </p>

    <p>
      如果你想实时预览配置后的主题，可以使用
      <a href="https://github.com/Aisen60/vant-theme" target="_blank">
        vant-theme 主题工具
      </a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "ThemeIndex",
};
</script>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, unref } from "vue";

import { useAppStore } from "@/stores/modules/app";

const appStore = useAppStore();

const { theme } = storeToRefs(appStore);

const darkMode = ref(theme.value === "dark");

const changeTheme = () => {
  const t = unref(theme) === "light" ? "dark" : "light";
  appStore.toggleTheme(t);
};
</script>

<style lang="less" scoped>
.doc-theme-container {
  padding: 20px;
  line-height: 1.5;

  a {
    color: var(--app-primary-color);
  }
}
</style>
