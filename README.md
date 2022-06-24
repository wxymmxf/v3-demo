# v3-demo
## Contents
[1.Project create](#1Project-create)  
  [presets](#presets)
  [push project to github](#push-project-to-github)
[2.Config eslint](#2Config-eslint)   
  [config prettier](#config-prettier)
  [config eslint](#config-eslint)

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
