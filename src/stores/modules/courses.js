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
        let data = await client.get('courses');
        cxt.commit("SET_ALL", data);
        return data;
    },
    async getOne(cxt, id) {
        let data = await client.get('courses/' + id);
        cxt.commit("SET_ONE", data.data);
        return data;
    },
    async create(cxt, payload) {
        let { data } = payload.id ? await client.put('courses/' + payload.id, payload) : await client.post('courses', payload);
        cxt.commit("SET_ONE", data);
        if (payload.id) {
            payload.id = null;
        }
        return data;
    },
    async del(cxt, id) {
        let { data } = await client.delete('courses/'+id);
        cxt.commit("SET_ONE", data);
        return data;
    },
    async getAllMotoDisponible(cxt) {
        let data = await client.get('courses/disponibles');
        cxt.commit("SET_ALL", data);
        return data;
    },

    async getAllStatistique(cxt) {
        let data = await client.get('courses/resume-global');
        cxt.commit("SET_ALL", data);
        return data;
    },

    async getAllByPaiementType(cxt) {
        let data = await client.get('courses/montant-par-type-paiement');
        cxt.commit("SET_ALL", data);
        return data;
    },

    async getAllByStatut(cxt) {
        let data = await client.get('courses/courses-par-statut');
        cxt.commit("SET_ALL", data);
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
