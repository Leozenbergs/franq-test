import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import axios from './plugins/axios'
import vuetify from './plugins/vuetify'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import i18n from './i18n'

Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
