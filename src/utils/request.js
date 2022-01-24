import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://127.0.0.1'
})
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `${user}`
  }
  console.log(config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default request
