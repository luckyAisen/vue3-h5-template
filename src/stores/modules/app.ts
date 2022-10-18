// useStorage
import { usePreferredDark } from "@vueuse/core";
import { defineStore } from "pinia";
import type { ConfigProviderTheme } from "vant";
import { unref, watch } from "vue";

import { AppEnum } from "@/enums/appEnum";
import { store } from "@/stores";

import type { AppState } from "../types/app";

const systemIsDark = usePreferredDark();

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    theme: unref(systemIsDark) ? "dark" : "light",
  }),
  getters: {},
  actions: {
    /**
     * 监听系统主题变化
     */
    watchTheme() {
      watch(
        systemIsDark,
        (isDark) => {
          const theme = isDark ? "dark" : "light";
          const appStore = useAppStore();
          appStore.theme = theme;
          toggleHtmlElClass(isDark);
        },
        {
          deep: true,
          immediate: true,
        }
      );
    },
    toggleTheme(theme: ConfigProviderTheme) {
      this.theme = theme;
      toggleHtmlElClass(theme === "dark");
    },
  },
});

const toggleHtmlElClass = (isDark: boolean) => {
  const htmlEl = document.querySelector("html") as HTMLHtmlElement;
  if (isDark) {
    htmlEl.classList.remove(AppEnum.APP_THEME_LIGHT);
    htmlEl.classList.add(AppEnum.APP_THEME_DARK);
  } else {
    htmlEl.classList.remove(AppEnum.APP_THEME_DARK);
    htmlEl.classList.add(AppEnum.APP_THEME_LIGHT);
  }
};

// 外部使用函数
export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
