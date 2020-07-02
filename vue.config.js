const path = require('path')

module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/assets/css/variable.less")] // 引入全局样式变量
    }
  }
}
