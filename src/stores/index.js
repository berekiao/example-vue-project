import { createStore } from 'vuex';
import clients from './modules/clients'; 
import user from './modules/user';

export default createStore({
  modules: {
    clients,
    user
  }
});
