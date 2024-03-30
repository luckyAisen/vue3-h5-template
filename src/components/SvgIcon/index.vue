<template>
  <div
    v-if="isExternalIcon"
    :style="styleExternalIcon"
    class="svg-icon svg-external-icon"
    v-bind="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="svgName" :fill="svgColor" />
  </svg>
</template>

<script setup lang="ts">
import { RegExternal } from '@/utils';

import type { SvgIconProps } from './type';

defineOptions({
  name: 'SvgIcon'
});

const props = defineProps<SvgIconProps>();

const isExternalIcon = computed(() => RegExternal.test(props.name));

const styleExternalIcon = computed(() => ({
  mask: `url(${props.name}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
}));

const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className;
  } else {
    return 'svg-icon';
  }
});

const svgName = computed(() => `#icon-${props.name}`);

const svgColor = computed(() => props.color);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: currentcolor;
  vertical-align: -0.15em;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentcolor;
  mask-size: cover !important;
}
</style>
