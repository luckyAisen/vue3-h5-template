<template>
  <van-tabbar v-model="active" fixed route @change="handleChange">
    <van-tabbar-item v-for="(item, index) in props.option" :key="index" v-bind="item">
      <template v-if="$slots[item.name]" #icon="{ active }">
        <slot :name="item.name" :props="{ active, ...item }" />
      </template>
      <span>
        {{ item.title }}
      </span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import type { LayoutNavProps } from './type';
import type { TabbarItemProps } from 'vant';

defineOptions({
  name: 'LayoutNav'
});

const props = defineProps<LayoutNavProps>();

const emit = defineEmits<{
  (e: 'tabbar-change', name: TabbarItemProps['name']): void;
}>();

const active = ref(0);

const handleChange = (name: TabbarItemProps['name']) => {
  emit('tabbar-change', name);
};
</script>
