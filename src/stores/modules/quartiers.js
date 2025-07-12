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
        let data = await client.get('quartiers');
        cxt.commit("SET_ALL", data);
        return data;
    },
    async getOne(cxt, id) {
        let data = await client.get('quartiers/' + id);
        cxt.commit("SET_ONE", data.data);
        return data;
    },
    async create(cxt, payload) {
        let { data } = payload.id ? await client.put('quartiers/' + payload.id, payload) : await client.post('quartiers', payload);
        cxt.commit("SET_ONE", data);
        if (payload.id) {
            payload.id = null;
        }
        return data;
    },
    async del(cxt, id) {
        let { data } = await client.delete('quartiers/'+id);
        cxt.commit("SET_ONE", data);
        return data;
    },
    async getAllP({ commit }, params = {}) {
        const { page = 0, size = 10, sort = '', nom, villeId } = params;
        const queryParams = new URLSearchParams({
            page,
            size,
            sort,
            ...(nom && { nom }),
            ...(villeId && { villeId }),
        }).toString();
        let data  = await client.get(`quartiers/search?${queryParams}`);
        commit("SET_ALL", data)
        return data;
    },
    async getByVille({ commit }, villeId) {
        let data = await client.get(`quartiers/ville/${villeId}`);
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