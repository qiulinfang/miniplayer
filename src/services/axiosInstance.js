// src/http/axios.js
import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://dataiqs.com/api/netease/music/', // 设置基础URL
  timeout: 10000, // 设置超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }, // 默认请求头
});

// 请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么，比如添加token
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;