import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(vClickOutside);
Vue.use(VueClipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
