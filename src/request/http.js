import axios from 'axios';

// 创建axios实例
let instance = axios.create({
    timeout: 1000 * 12
});

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    instance.defaults.baseURL = 'http://127.0.0.1/';
} else if (process.env.NODE_ENV === 'production') {
    instance.defaults.baseURL = 'http://10.73.241.190:8080/';
}

export default instance;
