import Vuex from 'vuex';
import Vue from 'vue';
import ticketData from './modules/ticketData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ticketData,
  },
});
