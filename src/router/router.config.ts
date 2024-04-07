import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Home',
        component: () => import('@/views/index.vue'),
        meta: { title: '主页', showTab: true }
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info.vue'),
        meta: { title: '项目', showTab: true }
      },
      {
        path: '/fetch',
        name: 'Fetch',
        component: () => import('@/views/fetch.vue'),
        meta: { title: '请求', showTab: true }
      },
      {
        path: '/theme',
        name: 'Theme',
        component: () => import('@/views/theme.vue'),
        meta: { title: '主题', showTab: true }
      }
    ]
  }
];
