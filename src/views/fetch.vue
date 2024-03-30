<template>
  <div class="fetch">
    <van-nav-bar title="请求事例" />

    <van-cell-group>
      <van-cell
        v-for="(item, index) in requestList"
        :key="index"
        class="index-cell-item"
        :title="item.title"
      >
        <template #value>
          <van-button
            v-if="item.loading"
            type="warning"
            size="small"
            class="!mr-4"
            @click="onAbort(item)"
          >
            取消请求
          </van-button>
          <van-button
            :type="item.type"
            size="small"
            :loading="item.loading"
            loading-text="请求中..."
            @click="onFetch(item)"
          >
            发起请求
          </van-button>
        </template>
      </van-cell>
    </van-cell-group>

    <div
      v-if="content"
      class="w-[90%] m-auto p-4 my-5 bg-[--vt-color-fill-3] rounded-[--vt-border-radius-3] leading-8"
    >
      <p>成功请求内容:</p>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { normalRequest, notFoundRequest, errorRequest } from '@/api/modules/demo';

import type { ButtonType } from 'vant';

defineOptions({
  name: 'FetchIndex'
});

type CellItem = {
  title: string;
  value: string;
  type: ButtonType;
  loading: boolean;
  controller: any;
};

const content = ref<any>();

const requestList = ref<CellItem[]>([
  {
    title: '正常请求',
    value: '1',
    type: 'primary',
    loading: false,
    controller: null
  },
  {
    title: '失败请求(404)',
    value: '2',
    type: 'danger',
    loading: false,
    controller: null
  },
  {
    title: '失败请求(500)',
    value: '3',
    type: 'danger',
    loading: false,
    controller: null
  }
]);

const onFetch = async (item: CellItem) => {
  const controller = new AbortController();
  item.controller = controller;

  if (item.value === '1') {
    try {
      item.loading = true;
      const res = await normalRequest({
        signal: controller.signal
      });
      content.value = res;
    } catch (err) {
      return Promise.reject(err);
    } finally {
      item.loading = false;
    }
  }

  if (item.value === '2') {
    try {
      item.loading = true;
      await notFoundRequest({
        signal: controller.signal
      });
    } catch (err) {
      return Promise.reject(err);
    } finally {
      item.loading = false;
      content.value = null;
    }
  }

  if (item.value === '3') {
    try {
      item.loading = true;
      await errorRequest({
        signal: controller.signal
      });
    } catch (err) {
      return Promise.reject(err);
    } finally {
      item.loading = false;
      content.value = null;
    }
  }
};

const onAbort = (item: CellItem) => {
  if (item.controller) {
    item.controller.abort();
  }
  item.loading = false;
  content.value = null;
};
</script>
