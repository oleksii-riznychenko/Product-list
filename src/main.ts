import Vue from 'vue';
import { setupWorker } from 'msw';
import App from './App.vue';
import router from './router';
import store from './store';
import { handlers } from './mocks/handlers';

const worker = setupWorker(...handlers);

worker.start().then();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
