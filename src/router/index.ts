import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from './router.config';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
