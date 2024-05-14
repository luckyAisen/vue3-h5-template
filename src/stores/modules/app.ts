import { defineStore } from 'pinia';
import { useStorage, useColorMode } from '@vueuse/core';
import { AppEnum } from '@/enums/appEnum';
import { store } from '@/stores';

import type { AppTheme } from '@/types';

export const useAppStore = defineStore(
  'appStore',
  () => {
    const { system: systemColor, store: storeColor } = useColorMode();

    const storageColor = useStorage<AppTheme>(AppEnum.APP_THEME, storeColor.value);

    const theme = computed(() => {
      return storageColor.value == 'auto' ? systemColor.value : storageColor.value;
    });

    const setTheme = (appTheme: AppTheme) => {
      storageColor.value = appTheme;
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
      systemColor,
      storeColor,
      storageColor,
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
