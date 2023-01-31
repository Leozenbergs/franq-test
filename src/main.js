import Vue from 'vue'
import App from './App.vue'

import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import vuetify from './plugins/vuetify'
import './plugins/axios'
import i18n from './i18n'
import router from './router'

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import store from './store'

Amplify.configure(awsconfig);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];
Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
