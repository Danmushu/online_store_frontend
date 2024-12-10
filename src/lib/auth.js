import utils from "@/lib/utils";

const userAuth = {
    token: {
        // 将 token 存储在会话存储中，键为 "access_token"
        set(token) {
            utils.storage.setSession("access_token", token);
        },
        // 从会话存储中获取 "access_token" 对应的值
        get() {
            return utils.storage.getSession("access_token");
        }
    },
    uid: {
        // 将 uid 存储在会话存储中，键为 "uid"
        set(uid) {
            utils.storage.setSession("uid", uid);
        },
        // 从会话存储中获取 "uid" 对应的值
        get() {
            return utils.storage.getSession("uid");
        }
    },
    role: {
        // 将 role 对象转换为JSON字符串并存储在会话存储中，键为 "role"
        set(role) {
            utils.storage.setSession("role", JSON.stringify(role));
        },
        // 从会话存储中获取 "role" 对应的值，如果存在，则将其从JSON字符串转换回对象
        get() {
            return utils.storage.getSession("role")?JSON.parse(utils.storage.getSession("role")):"";
        }
    },

};

export default userAuth;
