<template>
  <van-tabbar v-model="active" fixed route @change="handleChange">
    <van-tabbar-item
      v-for="(attr, index) in $props.option"
      :key="index"
      v-bind="attr"
    >
      {{ attr.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
export default {
  name: "LayoutNav",
};
</script>

<script lang="ts" setup>
import type { TabbarItemProps } from "vant";
import { ref } from "vue";

export interface Props {
  option: Partial<{ title: string } & TabbarItemProps>[];
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "tabbar-change", name: TabbarItemProps["name"]): void;
}>();

const active = ref(0);

const handleChange = (name: TabbarItemProps["name"]) => {
  $emit("tabbar-change", name);
};
</script>
