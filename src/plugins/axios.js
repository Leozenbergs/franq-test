"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';

const apiKey = '50753533'
let config = {
  baseURL: `https://api.hgbrasil.com/finance?format=json-cors&key=${apiKey}`,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // 
    return config;
  },
  function(error) {
    // 
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    localStorage.clear()
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;