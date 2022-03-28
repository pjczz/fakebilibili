import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import _ from 'lodash'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()//想要使用$bus 就需要使用vue的原型
Vue.prototype.$axiosbili = axios
Vue.prototype.$lodash = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
