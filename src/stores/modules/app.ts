import { usePreferredDark, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { ConfigProviderTheme } from "vant";
import { unref, watch } from "vue";

import { StogeEnum } from "@/enums/appEnum";
import { store } from "@/stores";

import type { AppState } from "../types/app";

const systemIsDark = usePreferredDark();

const appTheme = useStorage<ConfigProviderTheme>(
  StogeEnum.APP_SETTING_THEME,
  unref(systemIsDark) ? "dark" : "light"
);

watch(systemIsDark, (isDark) => {
  appTheme.value = isDark ? "dark" : "light";
  const $appStore = useAppStore();
  $appStore.theme = appTheme.value;
});

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    theme: unref(appTheme),
  }),
  getters: {},
  actions: {
    toggleTheme() {
      appTheme.value = appTheme.value === "light" ? "dark" : "light";
      this.theme = appTheme.value;
    },
  },
});

// 外部使用函数
export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
