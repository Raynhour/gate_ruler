const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@mocks': path.resolve(__dirname, './tests/mocks')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/scssSharing.scss";`
      }
    }
  }
}
