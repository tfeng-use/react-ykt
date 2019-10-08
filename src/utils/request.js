import axios from "axios";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: 'https://api.soeasyit.cn:9002',
  timeout: 60000 // request timeout
});

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    if (getToken()) {
      // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      config.headers.Authorization = getToken();
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data
    try {
      if (res.status !== 200) {
        alert(res.message)
      } else {
        return response.data;
      }
    } catch (error) {
      console.log(error)
    }
  },
  error => {
    try {
      const response = error.response;
      const info = response.data;
      if (response === undefined) {
        
      }
      if (response.status === 401 || info.status === 40101) {
        
      }
      if (response.status === 403) {

      }
      if (info.status === 30101) {

      }
      if (response.status === 504) {

      }
      if (response.status === 500) {
      }
      return Promise.reject(error);
    } catch (error) {
      console.log(error)
    }
  }
);

export default service;
