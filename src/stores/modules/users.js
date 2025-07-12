import client from '@/http/request';

const state = () => ({
    all: [],
    one: {}
});

const getters = {
    all: state => state.all,
    one: state => state.one
};

const mutations = {
    SET_ALL: (state, obj) => {
        state.all = obj;
    },
    SET_ONE: (state, obj) => {
        state.one = obj;
    },
};

const actions = {
    async getAll(cxt) {
        let data = await client.get('users');
        cxt.commit("SET_ALL", data);
        return data;
    },
    async getOne(cxt, id) {
        let data = await client.get('users/' + id);
        cxt.commit("SET_ONE", data.data);
        return data;
    },
    async create(cxt, payload) {
        let { data } = payload.id ? await client.put('users/' + payload.id, payload) : await client.post('users/creer', payload);
        cxt.commit("SET_ONE", data);
        if (payload.id) {
            payload.id = null;
        }
        return data;
    },
    async del(cxt, id) {
        let { data } = await client.delete('users/'+id);
        cxt.commit("SET_ONE", data);
        return data;
    },
    async getAllP({ commit }, params = {}) {
        const { page = 0, size = 10, sort = '', nom, prenom, email, contact, role } = params;
        const queryParams = new URLSearchParams({
            page,
            size,
            sort,
            ...(nom && { nom }),
            ...(prenom && { prenom }),
            ...(email && { email }),
            ...(contact && { contact }),
            ...(role && { role }),
        }).toString();
        let data  = await client.get(`users/search?${queryParams}`);
        commit("SET_ALL", data)
        return data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}; 