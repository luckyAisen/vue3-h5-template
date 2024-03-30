export {};

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 路由标题
     */
    title?: string;
    /**
     * 是否显示 Tabbar 标签栏
     */
    showTab?: boolean;
  }
}
