module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "@jonny1994/postcss-px-to-viewport": {
      unitToConvert: "px", // 需要转换的单位，默认为"px"
      viewportWidth: 750, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [".ignore", ".hairlines"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      rules: [
        [
          /\/node_modules\/vant\//, // 路径的正则或者字符串
          (pixels, parsedVal, prop) => {
            if (prop.includes("font")) {
              return parsedVal * 2 + "vmin";
            }
            return parsedVal * 2 + "vw";
          },
        ],
      ],
    },
  },
};
