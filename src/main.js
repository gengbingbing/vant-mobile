import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import 'vant/lib/index.css'
import { Lazyload } from 'vant';

Vue.config.productionTip = false
Vue.use(Lazyload)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
