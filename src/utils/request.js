import axios from "axios";
 
let request = axios.create({
  baseURL: "/api"
});
 
request.interceptors.request.use((config) => {
  return config;
});
 
request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  () => {
    alert("服务器响应数据失败");
  }
);
export default request;