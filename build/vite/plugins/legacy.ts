import legacyPlugin from "@vitejs/plugin-legacy";

/**
 * 为打包后的文件提供传统浏览器兼容性支持
 * https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
 */
export const configLegacyPlugin = (isBuild: boolean) => {
  if (!isBuild) return [];
  return legacyPlugin({
    targets: [
      "Android > 39",
      "Chrome >= 60",
      "Safari >= 10.1",
      "iOS >= 10.3",
      "Firefox >= 54",
      "Edge >= 15",
    ],
  });
};
