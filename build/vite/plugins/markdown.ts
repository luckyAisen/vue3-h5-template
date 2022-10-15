import Markdown from "vite-plugin-md";

/**
 * vite-plugin-md 可以将 md 当做 vue 组件使用
 * https://github.com/antfu/vite-plugin-md
 */
export const configMarkdownPlugin = () => {
  return Markdown({
    markdownItOptions: {
      typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
    },
  });
};
