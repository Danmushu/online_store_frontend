import axios from "axios";
import auth from "@/lib/auth";
import { ElNotification as $notify } from "element-plus";

let BASE_API = window.API.DEV_SERVER;

const request = axios.create({
    baseURL: BASE_API,
    timeout: 2 * 60 * 1000
});
// todo
// 添加请求拦截器
request.interceptors.request.use(
    function(config) {
        if (
            config.url.indexOf("/login") === -1 &&
            config.url.indexOf("upload") === -1
        ) {
            //在请求头中添加Token
            config.headers["X_ACCESS_TOKEN"] = auth.token.get();
            config.headers["X_UID"] = auth.uid.get();

            //在请求头中修改Content-Type为json,默认为form-data


        }
        //记录操作日志

        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function(response) {
        /* 请求之后拦截器 */
        const status = response.status;
        if (status === 200) {
            return Promise.resolve(response.data);
        } else if (status === 400) {
            $notify.error({
                title: "请求出错",
                message: response.data.msg,
                timeout: 2000
            });
            return Promise.reject(response.data.msg);
        } else if (status === 401) {
            $notify.error({
                title: "登录状态失效,请重新登录",
                message: "无效的令牌或会话已过期",
                timeout: 3000
            });
            //跳到登录
            sessionStorage.clear();
            var jump_url = `${window.location.origin}${window.location.pathname}#/login`;
            var a = document.createElement("a");
            a.setAttribute("href", jump_url);
            a.click();
            document.getElementsByTagName("body")[0].appendChild(a);

            return Promise.reject(response.data.msg);
        } else if (status === 404) {
            $notify.error({
                title: "请求出错",
                message: response.data.msg,
                timeout: 2000
            });
            return Promise.reject(response.data.msg);
        } else if (status === 500) {
            $notify.error({
                title: "服务器打瞌睡了",
                message: response.data.msg,
                timeout: 2000
            });
            return Promise.reject(response.data.msg);
        } else {
            $notify.error({
                title: "请求出错",
                message: response.data.msg,
                timeout: 2000
            });
            return Promise.reject(response.data.msg);
        }
    },
    function(error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        $notify.error({
            title: "请求出错",
            message: error,
            timeout: 2000
        });

        return Promise.reject(error);
    }
);

export default request;
