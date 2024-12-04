// 公共函数库

const commonUtils = {
    storage: {
        //设置sessionStorage
        setSession(key, value) {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            window.sessionStorage.setItem(key, value);
        },

        //获取sessionStorage
        getSession(key) {
            let value = window.sessionStorage.getItem(key);
            return value;
        },

        //删除sessionStorage
        removeSession(key) {
            window.sessionStorage.removeItem(key);
        },

        //设置localStorage
        setLocal(key, value) {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(key, value);
        },

        //获取localStorage
        getLocal(key) {
            let value = window.localStorage.getItem(key);
            return value;
        },

        //删除localStorage
        removeLocal(key) {
            window.localStorage.removeItem(key);
        }
    },
    cookie: {
        setCookie(key, value, expired_days) {
            var now_time = new Date(); // 获取时间
            now_time.setTime(now_time.getTime() + 24 * 60 * 60 * 1000 * expired_days); // 保存的天数
            // 字符串拼接cookie
            window.document.cookie =
                key + "=" + value + ";path=/;expires=" + now_time.toGMTString();
        },
        // 读取cookie
        getCookie(key) {
            if (document.cookie.length > 0) {
                var arr1 = document.cookie.split(";");
                for (let i = 0; i < arr1.length; i++) {
                    var arr2 = arr1[i].trim().split("=");
                    if (arr2[0] === key) {
                        return arr2[1];
                    }
                }
            }
        },
        // 清除cookie
        clearCookie() {
            setCookie("", "", -1);
        }
    },
    random: {
        //生成min-max范围内的随机整数
        getRandomNumber(min, max) {
            return parseInt(Math.random() * (max - min + 1) + min, 10);
        },
        //生成GUID(格式：yow04d2g-6o54-254h-6j1z-4t219h9v34pc)
        getGUID() {
            var times = [8, 4, 4, 4, 12];
            var baseStr = "abcdefg56789hijklm12389nopqrst45670uvwxyz12340";
            var gui = new Array();
            for (var i = 0; i < times.length; i++) {
                var guid = new Array();
                for (var j = 0; j < times[i]; j++) {
                    guid.push(baseStr.substr(this.getRandomNumber(1, baseStr.length), 1));
                }
                gui.push(guid.join(""));
            }
            return gui.join("-");
        },
        //生成一定长度的随机字串
        getRandomStr(length = 20) {
            var baseStr =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var str = "";
            for (let i = 0; i < length; i++) {
                str += baseStr.substr(this.getRandomNumber(1, baseStr.length), 1);
            }
            return str;
        },
        //获取雪花算法随机id
        getSnowFlakeId() {
            var baseStr = "123456789";
            var str = "";
            for (let i = 0; i < 18; i++) {
                str += baseStr.substr(this.getRandomNumber(1, baseStr.length), 1);
            }
            return parseInt(str);
        },
    },
    tree: {

        convertListToTree(list, pname = 'parentId') {
            list.forEach(function (item) {
                delete item.children;
            });
            var map = {};
            list.forEach(function (item) {
                map[item.id] = item;
            });
            var val = [];
            list.forEach(function (item) {
                var parent = map[item[pname]];
                if (parent) {
                    (parent.children || (parent.children = [])).push(item);
                } else {
                    val.push(item);
                }
            });
            return val;
        },
        //tree转list
        treeToList(tree, list = []) {
            tree.map((item) => {
                if (item.children && item.children.length > 0)
                    this.treeToList(item.children, list);
                item.children = null;
                list.push(item);
            });
            return list;
        },
    },
    list: {
        // 数组去重
        unique(arr, idName) {
            const res = new Map();
            return arr.filter(
                (arr) => !res.has(arr[idName]) && res.set(arr[idName], 1)
            );
        },
    },
    file: {
        //获取文件名的扩展名
        getExtention(filename) {
            var index1 = filename.lastIndexOf(".");
            var index2 = filename.length;
            var ext = filename.substring(index1, index2);
            return ext;
        },
    },
};

export default commonUtils;
