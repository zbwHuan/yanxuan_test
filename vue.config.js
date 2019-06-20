
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 去掉path前面的/api
        }
      }
    }
  }
}
