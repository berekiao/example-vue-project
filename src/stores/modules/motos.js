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
        let data = await client.get('motos');
        cxt.commit("SET_ALL", data);
        return data;
    },
    async getOne(cxt, id) {
        let data = await client.get('motos/' + id);
        cxt.commit("SET_ONE", data.data);
        return data;
    },
    async create(cxt, payload) {
        let { data } = payload.id ? await client.put('motos/' + payload.id, payload) : await client.post('motos', payload);
        cxt.commit("SET_ONE", data);
        if (payload.id) {
            payload.id = null;
        }
        return data;
    },
    async del(cxt, id) {
        let { data } = await client.delete('motos/'+id);
        cxt.commit("SET_ONE", data);
        return data;
    },
    async getAllMotoDisponible(cxt) {
        let data = await client.get('motos/disponibles');
        cxt.commit("SET_ALL", data);
        return data;
    },

    async getAllP({ commit }, params = {}) {
        const { page = 0, size = 10, sort = '', marque, modele, immatriculation, dateMaintenanceAfter, dateMaintenanceBefore } = params;
        const queryParams = new URLSearchParams({
            page,
            size,
            sort,
            ...(marque && { marque }),
            ...(modele && { modele }),
            ...(immatriculation && { immatriculation }),
            ...(dateMaintenanceAfter && { dateMaintenanceAfter }),
            ...(dateMaintenanceBefore && { dateMaintenanceBefore }),
            
            
        }).toString();
        let data  = await client.get(`motos/search?${queryParams}`);
        commit("SET_ALL", data)
        //cxt.commit("SET_ALL", data);
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
