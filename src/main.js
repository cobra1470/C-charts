// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import sideBar from '@/components/common/sideBar'
import headerBar from '@/components/common/headerBar'

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.component("side-bar", sideBar);
Vue.component("header-bar", headerBar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
