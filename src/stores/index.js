import { createStore } from 'vuex';
import clients from './modules/clients'; 
import user from './modules/user';
import motos from './modules/motos';
import livreurs from './modules/livreurs';
import affectations from './modules/affectations';
import courses from './modules/courses';

export default createStore({
  modules: {
    clients,
    user,
    motos,
    livreurs,
    affectations,
    courses
  }
});
