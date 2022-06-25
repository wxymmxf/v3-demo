# v3-demo
## Contents
[1.Project create](#1Project-create)    
  [presets](#presets)  
  [push project to github](#push-project-to-github)  
[2.Config eslint](#2Config-eslint)   
  [config prettier](#config-prettier)  
  [config eslint](#config-eslint)  
[3.Distributed dynamic route](#3Distributed-dynamic-route)  
  [config alias](#config-alias)  
  [route files](#route-files)  
[4.Add Element Plus](#4Add-Element-Plus)   
[5.Init CSS](#5Init-CSS)  
[6.Custom Svg Icon](#6Custom-Svg-Icon)   
  [Install](#Install-Svg)  
  [SvgIcon component](#SvgIcon-component)  
  [Config Svg](#Config-Svg)   
  [Html](#Html)  



## 1.Project create
### presets:  
* Babel, ESlint, Router, Vuex, Sass  
* Vue3.0  
* no history mode  
* ESlint(Prettier, Lint on save, Lint and fix on commit)  
* config in package.json
```
vue create v3-demo
```
### push project to github
```
git remote add origin https://github.com/wxymmxf/v3-demo.git
git branch -M main
git push -u origin main
```
## 2.Config eslint
### config prettier

1. add .prettierrc file
2. install prettier eslint plug in vscode
3. restart vscode
4. search "save" in settings.json, checked "Format on save"
5. press alt+shift+f and select "Prettier ESLint" as default formatter  
   ctrl+s and alt+shift+f work for prettier  
   reference link  
   https://blog.csdn.net/qq_45029735/article/details/119062320  
   https://github.com/vuejs/core/blob/main/.prettierrc  
   https://prettier.io/docs/en/options.html 
6. config lintOnSave: 'warning' in vue.config.js

### config eslint
package.json  
关闭文件名驼峰检查
```
"rules": {
   "vue/multi-word-component-names": "off"
}
```
## 3.Distributed dynamic route
modules:  
```
src/ele
src/v3
```
### config alias
vue.config.js  
```
module.exports = defineConfig({
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    .set('@v3', resolve('src/modules/v3'))
    .set('@ele', resolve('src/modules/ele'))
  }
})
```
### route files
router/index.js  
router/ele.routes.js  
router/v3.routes.js  
```
router/index.js:
const routerList = []
function importAll(r) {
  r.keys().forEach(key => {
    routerList.push(r(key).default)
  })
}
importAll(require.context('./', false, /\.routes.js/))

const routes = [
  ...routerList
]
```
## 4.Add Element Plus
install  
```
npm install element-plus @element-plus/icons-vue -S
```
main.js  
```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
```
## 5.Init CSS
src/assets/css/index.scss  
src/assets/css/_reset.scss  
src/assets/css/diy-element-plus.scss  
src/assets/css/global.scss  

main.js
```
import './assets/css/index.scss'
```
## 6.Custom Svg Icon
### Install Svg
```
npm install svg-sprite-loader -D
```
### SvgIcon component
src/components/common/SvgIcon.vue
```
<svg :class="svgClass" aria-hidden="true">
  <use :xlink:href="iconName" />
</svg>
```
### Config Svg
main.js  
```
import SvgIcon from '@/components/common/SvgIcon.vue'
const req = require.context('@/assets/svgIcons/svg', false, /\.svg$/)
req.keys().map(req)

app.component('svg-icon', SvgIcon)
```
vue.config.js  
```
module.exports = defineConfig({
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
```
### Html
```
<svg-icon iconClass="edit" />
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
