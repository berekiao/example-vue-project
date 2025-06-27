import { login, register} from "@/http/auth";
import { getToken, setToken, removeToken } from "@/helpers/auth";

const state = () => ({
    access_token: getToken(),
    user: JSON.parse(localStorage.getItem("userConnected")) || null,
    roles: [],
    loginStatus: "",
});

const mutations = {
    SET_ACCESS_TOKEN: (state, token) => {
        setToken(token)
        state.access_token = token;
    },
    SET_USER: (state, user) => {
        state.user = user;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    SET_LOGIN_STATUS: (state, loginStatus) => {
        state.loginStatus = loginStatus;
    },
    LOGOUT: (state) => {
        removeToken();
        localStorage.removeItem("userConnected"); // Supprimer l'utilisateur du localStorage
        state.access_token = null;
        state.user = null;
        state.roles = [];
        state.loginStatus = "loggedOut";
    },
};

const actions = {
    // user login
    login(context, payload) {
        const { usernameOrEmail, password } = payload;
        return new Promise((resolve, reject) => {
            login({ usernameOrEmail, password })
                .then((response) => {
                    const access = response;
                    context.commit("SET_ACCESS_TOKEN", access.token);
                    context.commit("SET_USER", access); // Mettre à jour l'utilisateur dans le store et localStorage
                    context.commit("SET_ROLES", access.roles); // Mettre à jour les rôles
                    context.commit("SET_LOGIN_STATUS", "success");
                    resolve(response);
                })
                .catch((error) => {
                    context.commit("SET_LOGIN_STATUS", "failed");
                    reject(error);
                });
        });
    },

    getInfo({ commit }) {
        return new Promise((resolve, reject) => {
            const user = JSON.parse(localStorage.getItem("userConnected"));
            if (user) {
                commit("SET_USER", user);
                commit("SET_ROLES", user.roles);
                resolve(user);
            } else {
                reject("User not found in localStorage");
            }
        });
    },

    register(context, payload) {
        return new Promise((resolve, reject) => {
            register(payload)
                .then((response) => {
                    if (response?.status === false) resolve(response);
                    const access = response.body;
                    //context.commit("SET_USER", access);
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    /* registerGoogle(context, payload) {
        return new Promise((resolve, reject) => {
            registerGoogle(payload)
                .then((response) => {
                    if (response?.status === false) resolve(response);
                    const access = response.body;
                    //context.commit("SET_USER", access);
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    loginGoogle(context, payload) {
        return new Promise((resolve, reject) => {
            loginGoogle(payload)
                .then((response) => {
                    if (response?.status === false) resolve(response);
                    const access = response.body;
                    context.commit("SET_ACCESS_TOKEN", access.token);
                    context.commit("SET_USER", access); // Mettre à jour l'utilisateur dans le store et localStorage
                    context.commit("SET_ROLES", access.roles); // Mettre à jour les rôles
                    context.commit("SET_LOGIN_STATUS", "success");
                    resolve(response);
                })
                .catch((error) => {
                    context.commit("SET_LOGIN_STATUS", "failed");
                    reject(error);
                });
        });
    }, */

    logout(context) {
        context.commit("LOGOUT");
    },

    /* resetToken({ commit }) {
        return new Promise((resolve) => {
            commit("SET_ROLES", []);
            removeToken();
            resolve();
            location.reload()
        });
    }, */
};

const getters = {
    getLoginStatus(state) {
        return state.loginStatus;
    },
    roles(state) {
        return state.roles;
    },
    isUserRole: (state) => (value) => {
        return state.roles.some((role) => role.name === value);
    },
    token(state) {
        return state.access_token;
    },
    profile(state) {
        return state.user;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};