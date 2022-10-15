import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/",
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../../README.md"),
        meta: { title: "首页", showTab: true },
      },
      {
        path: "/theme",
        name: "Theme",
        component: () => import("@/views/index.vue"),
        meta: { title: "主题", showTab: true },
      },
    ],
  },
];
