import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import global css
import './assets/css/index.scss'

// import ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import custom <svg-icon>
import SvgIcon from '@/components/common/SvgIcon.vue' // svg组件
const req = require.context('@/assets/svgIcons/svg', false, /\.svg$/)
req.keys().map(req)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('svg-icon', SvgIcon).use(ElementPlus).use(store).use(router).mount('#app')
