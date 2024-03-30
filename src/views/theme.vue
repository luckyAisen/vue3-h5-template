<template>
  <div class="theme">
    <van-nav-bar title="主题切换" />

    <van-cell center :title="title">
      <template #right-icon>
        <van-switch v-model="darkMode" @change="changeTheme" />
      </template>
    </van-cell>

    <p class="p-5 leading-7">
      Vant 4 开始支持动态主题切换和深色模式，具体使用请查看 Vant 4
      <a
        href="https://youzan.github.io/vant/v4/#/zh-CN/config-provider"
        target="_blank"
        class="text-[--van-primary-color]"
      >
        官网文档
      </a>
    </p>

    <p class="p-5 pt-0 leading-7">
      如果想实时预览配置后的主题，可以使用
      <a
        href="https://github.com/Aisen60/vant-theme"
        target="_blank"
        class="text-[--van-primary-color]"
      >
        Vant Theme 主题工具
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useAppStore } from '@/stores/modules/app';

defineOptions({
  name: 'ThemeIndex'
});

const appStore = useAppStore();

const { theme } = storeToRefs(appStore);

const title = computed(() => (theme.value === 'dark' ? '切换亮色模式' : '切换深色模式'));

const darkMode = ref(theme.value === 'dark');

const changeTheme = () => {
  const t = unref(theme) === 'light' ? 'dark' : 'light';
  appStore.setTheme(t);
};
</script>

<style lang="scss" scoped></style>
