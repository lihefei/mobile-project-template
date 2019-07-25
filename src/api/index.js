/**
 * API集中管理
 * 以模业务块分割
 * 命名格式：请求类型_接口名称，统一大写
 */

const api = {
    /* 定位 */
    location: {
        GET_TEST: '/getTest', //get测试
        POST_TEST: '/setTest' //post测试
    }
};
export default api;
