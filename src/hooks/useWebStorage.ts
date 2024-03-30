import { serializers, serializerType } from '@/utils';

export const useWebStorage = (s: Storage = window.localStorage) => {
  const getStorage = <T>(key: string): T | null => {
    const rawInit = s.getItem(key);
    if (rawInit) {
      let type;
      try {
        type = serializerType(JSON.parse(rawInit));
      } catch {
        type = serializerType(rawInit);
      }
      return serializers[type].read(rawInit);
    }
    return null;
  };
  const setStorage = (key: string, raw: any): void => {
    const type = serializerType(raw);
    s.setItem(key, serializers[type].write(raw));
  };
  const clearStorage = () => {
    s.clear();
  };
  const clearWebCache = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  };

  return {
    getStorage,
    setStorage,
    clearStorage,
    clearWebCache
  };
};
