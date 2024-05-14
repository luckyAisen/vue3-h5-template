// svg 压缩配置文件
module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|fill-rule|t|p-id|width|height)'
      }
    }
  ]
};
