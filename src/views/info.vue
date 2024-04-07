<template>
  <div class="project-info">
    <van-nav-bar title="项目信息" />

    <div class="project-info-wrap">
      <van-cell-group v-for="group in groupList" :title="group.title" :key="group.value">
        <van-cell
          v-for="item in group.children"
          :key="item.value"
          :title="item.title"
          :value="item.value"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import pkg from '../../package.json';

defineOptions({
  name: 'ProjectInfo'
});

type GroupItem = {
  title: string;
  value: string;
  children?: GroupItem[];
};

const groupList = ref<GroupItem[]>([
  {
    title: '基本信息',
    value: '1',
    children: [
      {
        title: '项目名称',
        value: pkg.name
      },
      {
        title: '项目版本',
        value: pkg.version
      }
    ]
  },
  {
    title: '生产依赖',
    value: '2',
    children: []
  },
  {
    title: '开发依赖',
    value: '3',
    children: []
  }
]);

const init = () => {
  Object.entries(pkg.dependencies).forEach(([title, value]) => {
    groupList.value[1].children?.push({
      title,
      value
    });
  });

  Object.entries(pkg.devDependencies).forEach(([title, value]) => {
    groupList.value[2].children?.push({
      title,
      value
    });
  });
};

init();
</script>

<style lang="scss" scoped>
.project-info {
  // --van-cell-group-title-padding: var(--van-padding-xs) var(--van-padding-md);

  :deep(.van-cell-group__title) {
    background-color: #f8f8f8;
  }

  :deep(.van-cell-group) {
    .van-cell {
      .van-cell__value {
        flex: none;
      }
    }
  }
}

.van-theme-dark {
  .project-info {
    :deep(.van-cell-group__title) {
      // background-color: var(--vt-color-fill-3);
      background-color: var(--vt-color-bg-1);
    }
  }
}
</style>
