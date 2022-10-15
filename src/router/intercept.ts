import { useTitle } from "@vueuse/core";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { router } from "./index";

const docTitle = useTitle();

const setTitle = (title?: string) => {
  docTitle.value = `${title} - ${import.meta.env.VITE_APP_TITLE}`;
};

router.beforeEach(
  async (to: RouteLocationNormalized, _, next: NavigationGuardNext) => {
    setTitle((to.meta.title || "") as string);
    next();
  }
);
