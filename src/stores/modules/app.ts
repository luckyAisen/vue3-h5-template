import { defineStore } from 'pinia';
import { useStorage, usePreferredDark } from '@vueuse/core';

import { AppEnum } from '@/enums/appEnum';
import { store } from '@/stores';

import type { AppTheme } from '@/types';

export const useAppStore = defineStore(
  'appStore',
  () => {
    const systemDark = usePreferredDark();

    const theme = ref(useStorage<AppTheme>(AppEnum.APP_THEME, systemDark.value ? 'dark' : 'light'));

    const setTheme = (appTheme: AppTheme) => {
      theme.value = appTheme;
    };

    const watchTheme = () => {
      watch(
        () => theme.value,
        (val) => {
          document.documentElement.setAttribute('theme', val);
        },
        {
          immediate: true
        }
      );
    };

    return {
      systemDark,
      theme,
      setTheme,
      watchTheme
    };
  },
  {
    persist: true
  }
);

export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
