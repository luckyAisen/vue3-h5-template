<template>
  <div class="p-5 home-index">
    <div class="flex items-center justify-center">
      <img src="/logo.png" class="w-36 h-36s" />
    </div>

    <div class="p-3 my-5 bg-[--vt-color-fill-3] rounded-[--vt-border-radius-3] leading-8">
      一个基于 Vite、Vue3、TypeScript、Vue Router、Pinia、Vant 4 等构建的移动端开发模板。
    </div>

    <van-cell-group class="index-cell-group">
      <van-cell v-for="(item, index) in profileList" :key="index" class="index-cell-item">
        <template #title>
          <SvgIcon :name="item.icon" className="text-[40px]" />
        </template>

        <template #value>
          <p>{{ item.text }}</p>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeIndex'
});

const profileList = ref([
  {
    icon: 'pnpm',
    text: 'pnpm 作为包管理器，节省磁盘空间。'
  },
  {
    icon: 'eslint',
    text: 'Eslint + Pettier + stylelint + husky 统一开发规范。'
  },
  {
    icon: 'vite',
    text: 'Vite 构建工具。'
  },
  {
    icon: 'vue',
    text: 'Vite Vue3 + TypeScript，使用 Composition Api 组织代码。'
  },
  {
    icon: 'vue',
    text: 'Vue Router 路由管理器。'
  },
  {
    icon: 'pinia',
    text: 'Pinia 状态管理库。'
  },
  {
    icon: 'vant',
    text: 'Vant 4 作为 UI 组件库，支持按需引入、深色模式、动态切换主题。'
  },
  {
    icon: 'tailwind-css',
    text: 'Tailwind CSS 原子类的 CSS 框架。'
  },
  {
    icon: 'umi-request',
    text: 'Fetch(umi-request) 封装和接口管理。'
  },
  {
    icon: 'vw',
    text: 'VM(postcss-mobile-forever 或者 postcss-px-to-viewport-8-plugin) 适配方案。'
  },
  {
    icon: 'svg',
    text: 'SVG 图标自动注册组件。'
  },
  {
    icon: 'console',
    text: 'VConsole 开发者调试面板。'
  },
  {
    icon: 'vue-devTools-next',
    text: 'Vue DevTools Next 下一代开发者工具'
  },
  {
    icon: 'env',
    text: '多环境支持。'
  },
  {
    icon: 'gzip',
    text: '打包资源 gzip 压缩。'
  }
]);
</script>

<style lang="scss" scoped>
.home-index {
  .index-cell-group {
    --van-cell-value-color: var(--vt-color-text-1);

    .index-cell-item {
      display: flex;
      align-items: center;

      :deep(.van-cell__title) {
        flex: none;
        padding-right: var(--vt-size-3);
        text-align: left;
      }

      :deep(.van-cell__value) {
        flex: 1;
        text-align: left;
      }
    }
  }
}
</style>
