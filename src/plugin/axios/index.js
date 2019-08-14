import axios from 'axios';

// 创建一个 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 60000, // 请求超时时间
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
    // 发送失败
        console.log(error);
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data;
        // if (response.headers['x-auth-token']) {
        //     util.cookies.set('uuid', response.headers['x-auth-token']);
        //     util.cookies.set('token', response.headers['x-auth-token']);
        // }
        // 这个状态码是和后端约定的
        const { code } = dataAxios;
        // 根据 code 进行判断
        if (code === undefined) {
            // 如果没有 code 代表这不是项目后端开发的接口
            return dataAxios;
        } else {
            // 有 code 代表这是一个后端接口 可以进行进一步的判断
            switch (code) {
            case '00':
                return dataAxios.data;
            case 'S00000200':
                // hideLoading();
                return dataAxios.data;
            case '00030022':
                return errorCreate(`${dataAxios.msg}`);
            default:
                // 不是正确的 code
                // errorCreate(`${dataAxios.msg}: ${response.config.url}`);
                errorCreate(`${dataAxios.msg}`);
                break;
            }
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.data.code) {
            case 'E00010408':
                error.message = `${error.response.data.msg}`;
                return;
            default:
                error.message = `${error.response.data.msg}`;
                break;
            }
        }
        errorLog(error);
        return Promise.reject(error);
    }
);

export default service;
