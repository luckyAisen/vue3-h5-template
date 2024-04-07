<template>
  <van-config-provider :theme="theme" :style="containerStyles">
    <div class="van-safe-area-top van-safe-area-bottom app-container">
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <div v-if="hasTab" class="layout-footer">
        <TabBar :option="tabberOption" @tabbar-change="handleChange">
          <template #nav-home="{ props }">
            <SvgIcon
              name="nav-home"
              :color="
                props.active
                  ? 'var(--van-tabbar-item-active-color) '
                  : 'var(--van-tabbar-item-text-color)'
              "
            />
          </template>

          <template #nav-info="{ props }">
            <SvgIcon
              name="nav-info"
              :color="
                props.active
                  ? 'var(--van-tabbar-item-active-color) '
                  : 'var(--van-tabbar-item-text-color)'
              "
            />
          </template>

          <template #nav-theme="{ props }">
            <SvgIcon
              :name="appStore.theme === 'dark' ? 'nav-light' : 'nav-dark'"
              :color="
                props.active
                  ? 'var(--van-tabbar-item-active-color) '
                  : 'var(--van-tabbar-item-text-color)'
              "
            />
          </template>

          <template #nav-fetch="{ props }">
            <SvgIcon
              name="nav-fetch"
              :color="
                props.active
                  ? 'var(--van-tabbar-item-active-color) '
                  : 'var(--van-tabbar-item-text-color)'
              "
            />
          </template>
        </TabBar>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/modules/app';
import TabBar from './components/TabBar/index.vue';

import type { TabbarItemProps } from 'vant';
import type { LayoutNavProps } from './components/TabBar/type';

defineOptions({
  name: 'Layout'
});

const route = useRoute();

const appStore = useAppStore();

appStore.watchTheme();

const { theme } = storeToRefs(appStore);

const hasTab = computed(() => route.meta.showTab);

const containerStyles = computed(() => {
  const styles = {};
  if (unref(hasTab)) {
    styles['padding-bottom'] = 'var(--van-tabbar-height)';
  }

  return styles;
});

const tabberOption: LayoutNavProps['option'] = [
  {
    title: '主页',
    name: 'nav-home',
    to: {
      name: 'Home'
    }
  },
  {
    title: '项目信息',
    name: 'nav-info',
    to: {
      name: 'Info'
    }
  },
  {
    title: '请求',
    name: 'nav-fetch',
    to: {
      name: 'Fetch'
    }
  },
  {
    title: '主题',
    name: 'nav-theme',
    to: {
      name: 'Theme'
    }
  }
];

const handleChange = (v: TabbarItemProps['name']) => {
  console.log('tabbar name:', v);
};
</script>

<style lang="scss" scoped></style>
