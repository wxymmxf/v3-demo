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
    config.module.rule('svg').exclude.add(resolve('src/assets/svgIcons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svgIcons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})
