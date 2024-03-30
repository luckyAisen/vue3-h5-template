# svg-icon - SVG 图标使用说明

1. 需要使用的 SVG ICON 放入 `src/icons/svg` 文件夹进行压缩

2. 执行压缩命令命令

```shell
# 适用于单色 svg：
pnpm run svgo

# 适用于彩色 svg：
pnpm run svgo-color
```

3、复制压缩好的 ICON 到 `svg` 文件夹内使用

4、使用 ⬇️⬇️⬇️⬇️ 方法

```html
<svg-icon name="fileName" />
```
