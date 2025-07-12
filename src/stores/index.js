import { createStore } from 'vuex';
import clients from './modules/clients'; 
import user from './modules/user';
import motos from './modules/motos';
import livreurs from './modules/livreurs';
import affectations from './modules/affectations';
import courses from './modules/courses';
import zones from './modules/zones';
import villes from './modules/villes';
import quartiers from './modules/quartiers';
import users from './modules/users';
import permissions from './modules/permissions';
import roles from './modules/roles';

export default createStore({
  modules: {
    clients,
    user,
    motos,
    livreurs,
    affectations,
    courses,
    zones,
    villes,
    quartiers,
    users,
    permissions,
    roles
  }
});
