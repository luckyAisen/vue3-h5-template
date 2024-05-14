<template>
  <div class="theme">
    <van-nav-bar title="主题切换" />

    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="主题"
      placeholder="选择主题"
      @click="showPicker = true"
    />

    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        title="选择主题"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

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
import { useAppStore } from '@/stores/modules/app';

import type { AppTheme } from '@/types';

defineOptions({
  name: 'ThemeIndex'
});

type Column = {
  text: string;
  value: AppTheme;
};

const appStore = useAppStore();

const fieldValue = ref('');

const init = () => {
  const column = columns.value.find((it) => it.value === appStore.storageColor);
  fieldValue.value = column?.text || '';
};

const showPicker = ref(false);

const columns = ref<Column[]>([
  { text: '浅色', value: 'light' },
  { text: '深色', value: 'dark' },
  { text: '跟随系统', value: 'auto' }
]);

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
  appStore.setTheme(selectedOptions[0].value);
};

init();
</script>

<style lang="scss" scoped></style>
