import axios from 'axios';
import qs from 'qs';

/* 通用设置 */
axios.defaults.timeout = 1000 * 10; //请求超时设置，10秒超时
axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8'; //设置数据格式

/* 环境切换 */
const env = process.env.NODE_ENV; //获取环境
const envConfig = {
    development: '172.0.0.1', //开发环境
    dubug: '172.0.0.2', //调试环境
    production: '172.0.0.3' //生产环境
};
axios.defaults.baseURL = envConfig[env];

/* 请求拦截 */
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'XXXXXXXX'; //设置token(需要配合vuex使用)
        return config;
    },
    error => {
        return Promise.error(error);
    }
);

/* 响应拦截 */
axios.interceptors.response.use(
    response => (response.status === 200 ? Promise.resolve(response) : Promise.reject(response)), //状态码为200接口访问成功，其他抛出错误
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    alert('未登录');
                    break;
                case 403:
                    alert('登录过期，请重新登录');
                    break;
                case 404:
                    alert('网络请求不存在');
                    brack;
                default:
                    alert(error.response.data.message);
            }
            return Promise.reject(error.response);
        }

        return Promise.error(error);
    }
);

/**
 * post、put、patch共用请求
 * @param {String} type 请求类型
 * @param {String} url 请求的url地址
 * @param {Object} params 请求提交的参数
 */
function commonRequest(url, params, type, config) {
    return new Promise((resolve, reject) => {
        axios[type](url, qs.stringify(params), config).then(
            //qs序列化参数
            res => {
                resolve(res.data);
            },
            err => {
                reject(err.data);
            }
        );
    });
}

export default {
    /**
     * get请求
     * @param {String} url 请求的url地址
     * @param {Object} params 请求提交的参数
     */
    get(url, params, config) {
        return new Promise((resolve, reject) => {
            config = config || {};
            config.params = params;
            axios.get(url, config).then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err.data);
                }
            );
        });
    },
    /**
     * post请求
     * @param {String} url 请求的url地址
     * @param {Object} params 请求提交的参数
     */
    post(url, params, config) {
        return commonRequest(url, params, 'post', config);
    },
    /**
     * put请求
     * @param {String} url 请求的url地址
     * @param {Object} params 请求提交的参数
     */
    put(url, params, config) {
        return commonRequest(url, params, 'put', config);
    },
    /**
     * delete请求
     * @param {String} url 请求的url地址
     * @param {Object} params 请求提交的参数
     */
    delete(url, params, config) {
        return new Promise((resolve, reject) => {
            config = config || {};
            config.params = params;
            axios.delete(url, config).then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err.data);
                }
            );
        });
    },
    /**
     * patch请求
     * @param {String} url 请求的url地址
     * @param {Object} params 请求提交的参数
     */
    patch(url, params, config) {
        return commonRequest(url, params, 'patch', config);
    }
};
