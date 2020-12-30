import axios from 'axios'
import store from './store/store'
import router from './router'
import { getToken, getBaseUrl } from './localstorage-helper'

let myAxios = axios.create();
let url = 'https://jubelang.herokuapp.com'
let token = getToken()

if (token) {
  //  myAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // axios.defaults.params = {}
  // axios.defaults.params['access_token'] = token
}
if (url) {
  myAxios.defaults.baseURL = url
}

myAxios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error) {
    if (!error.response || error.response.status === 500) {
    }
    else if (error.response.status === 401) {
      store.dispatch("login/logout")
      router.push('/login')
    }
  }
  return Promise.reject(error)
})

// myAxios.interceptors.request.use(function(config) {
//   const token = cookie.get(__TOKEN_KEY__);

//   if ( token != null ) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// }, function(err) {
//   return Promise.reject(err);
// });

export default myAxios