import axios from 'axios'
axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://localhost:3000'
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'http://exchangen.52jzsj.com/',
  // baseURL: "http://192.168.1.117:9503",
  // http://192.168.1.117:9503
  timeout: 50000,
  'Content-Type': 'application/x-www-form-urlencoded'
})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data)
    config.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export default {
  instance,
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */

  fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params
        })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  post(url, data = {}, opt) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, opt)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  },

  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  },

  /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
}
