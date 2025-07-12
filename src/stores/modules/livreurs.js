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
        let data = await client.get('livreurs');
        cxt.commit("SET_ALL", data);
        return data;
    },
    async getOne(cxt, id) {
        let data = await client.get('livreurs/' + id);
        cxt.commit("SET_ONE", data.data);
        return data;
    },
    async create(cxt, payload) {
        let { data } = payload.id ? await client.put('livreurs/' + payload.id, payload) : await client.post('livreurs', payload);
        cxt.commit("SET_ONE", data);
        if (payload.id) {
            payload.id = null;
        }
        return data;
    },
    async del(cxt, id) {
        let { data } = await client.delete('livreurs/'+id);
        cxt.commit("SET_ONE", data);
        return data;
    },
    async getAllLivreurYts(cxt, type) {
        let data = await client.get(`livreurs/type/${type}`);
        return data;
    },
    async getAllP({ commit }, params = {}) {
        const { page = 0, size = 10, sort = '', nom, prenom, email, telephone, adresse, situationMatrimoniale, typeLivreur, statut, typePiece, numeroPieceIdentite,  } = params;
        const queryParams = new URLSearchParams({
            page,
            size,
            sort,
            ...(nom && { nom }),
            ...(prenom && { prenom }),
            ...(email && { email }),
            ...(telephone && { telephone }),
            ...(adresse && { adresse }),
            ...(situationMatrimoniale && { situationMatrimoniale }),
            ...(typeLivreur && { typeLivreur }),
            ...(statut && { statut }),
            ...(typePiece && { typePiece }),
            ...(numeroPieceIdentite && { numeroPieceIdentite }),
            
        }).toString();
        let data  = await client.get(`livreurs/search?${queryParams}`);
        commit("SET_ALL", data)
        //cxt.commit("SET_ALL", data);
        return data;
    },
    getInfoById(cxt, livreurId) {
        let data = client.get('courses/livreur/' + livreurId);
        return data;
    },
    statByLivreur(cxt, livreurId) {
        let data = client.get(`courses/livreur/${livreurId}/stats` );
        return data;
    },
    getAffectationById(cxt, livreurId) {
        let data = client.get(`affectations-moto/livreurs/${livreurId}/motos/historique`);
        return data;
    },
    async getAllLivreurActive(cxt, statut) {
        let data = await client.get(`livreurs/statut/${statut}`);
        return data;
    },
    async activerLivreur(cxt, id) {
        let data = await client.put(`livreurs/${id}/activer`);
        return data;
    },
    async activerMultipleLivreurs(cxt, livreurIds) {
        let data = await client.put('livreurs/activer-multiple', { livreurIds });
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
