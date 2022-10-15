/**
 * https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md
 */
import type { PluginOption } from "vite";
import compressPlugin from "vite-plugin-compression";

/**
 * 使用 gzip 或者 brotli 来压缩资源
 */
export function configCompressPlugin(
  compress: "gzip" | "brotli" | "none",
  deleteOriginFile = "false"
) {
  const compressList = compress.split(",");
  const plugins: PluginOption[] = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile: deleteOriginFile === "true",
      })
    );
  }

  if (compressList.includes("brotli")) {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: deleteOriginFile === "true",
      })
    );
  }
  return plugins;
}
