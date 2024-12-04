import utils from "@/lib/utils";

const userAuth = {
    token: {
        set(token) {
            utils.storage.setSession("access_token", token);
        },
        get() {
            return utils.storage.getSession("access_token");
        }
    },
    uid: {
        set(uid) {
            utils.storage.setSession("uid", uid);
        },
        get() {
            return utils.storage.getSession("uid");
        }
    },
    role: {
        set(role) {
            utils.storage.setSession("role", JSON.stringify(role));
        },
        get() {
            return utils.storage.getSession("role")?JSON.parse(utils.storage.getSession("role")):"";
        }
    },

};

export default userAuth;
