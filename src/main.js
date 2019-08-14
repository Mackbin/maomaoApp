import Vue from 'vue'
import App from './App.vue'
// 数据管理
import store from './stores'
// 路由
import router from '@/routers'
// vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
