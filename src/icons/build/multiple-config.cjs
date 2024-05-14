// svg 压缩配置文件
module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(id|class|t|p-id|width|height)'
      }
    }
  ]
};
