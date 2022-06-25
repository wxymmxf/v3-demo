const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  lintOnSave: 'warning',
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('@v3', resolve('src/modules/v3')).set('@ele', resolve('src/modules/ele'))
  }
})
